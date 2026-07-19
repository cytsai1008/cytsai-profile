<script setup lang="ts">
import { Pin } from "@lucide/vue";
import { onMounted, onUnmounted, ref } from "vue";

interface TimelineItem {
  href: string;
  title: string;
  date: string; // full ISO timestamp
  year: number;
  pinned: boolean;
}

// items arrive in display order (pinned block first, then newest→oldest) — the rail
// mirrors the list, it does not re-sort.
const props = defineProps<{ items: TimelineItem[]; lang: string; pinnedLabel: string }>();

// SSR formats in the page's own locale so the markup matches the language around
// it; after mount we switch to the visitor's browser locale, matching FormattedDate.
const displayLocale = ref(props.lang);
const formatDate = (iso: string) =>
  new Intl.DateTimeFormat(displayLocale.value, {
    year: "numeric",
    month: "short",
    day: "numeric",
  }).format(new Date(iso));

const BASE_W = 18;
const MAX_EXTRA = 26; // grows to 44px under the cursor
const SIGMA = 26; // px falloff of the magnification

const lineRefs = ref<HTMLElement[]>([]);
const widths = ref<number[]>(props.items.map(() => BASE_W));
const tracking = ref(false); // true while cursor tracks the rail — kills width transition so it follows instantly
const reducedMotion = ref(false);
const railTop = ref<number | null>(null);

// Anchor the rail's FIRST LINE (not the year label above it) to the first post row.
function measureRailTop() {
  const firstRow = document.querySelector("main li a");
  const firstLine = lineRefs.value[0];
  const nav = firstLine?.closest("nav");
  if (firstRow && firstLine && nav) {
    const lineOffsetInNav = firstLine.getBoundingClientRect().top - nav.getBoundingClientRect().top;
    railTop.value = firstRow.getBoundingClientRect().top + window.scrollY - lineOffsetInNav;
  }
}

onMounted(() => {
  reducedMotion.value = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  displayLocale.value = navigator.language;
  measureRailTop();
  // Web-font swap shifts the header height after mount — re-anchor once fonts settle.
  document.fonts?.ready.then(measureRailTop);
  window.addEventListener("resize", measureRailTop, { passive: true });
});

onUnmounted(() => window.removeEventListener("resize", measureRailTop));

// A group's label sits on its bottom-most line (items run newest→oldest, so that's
// the chronological start of a year; for the pinned block it's simply its last line).
function groupLabel(i: number): string | null {
  const item = props.items[i];
  const next = props.items[i + 1];
  if (item.pinned) return next?.pinned ? null : props.pinnedLabel;
  return !next || item.year !== next.year ? String(item.year) : null;
}

function applyZoom(clientY: number) {
  if (reducedMotion.value) return;
  widths.value = lineRefs.value.map((el) => {
    const r = el.getBoundingClientRect();
    const d = clientY - (r.top + r.height / 2);
    return BASE_W + MAX_EXTRA * Math.exp(-(d * d) / (2 * SIGMA * SIGMA));
  });
}

function onMove(e: MouseEvent) {
  tracking.value = true;
  applyZoom(e.clientY);
  activeIdx.value = nearestIdx(e.clientY);
}

function onLeave() {
  tracking.value = false; // let the width transition smooth the snap back to rest
  widths.value = props.items.map(() => BASE_W);
  activeIdx.value = null;
}

// The nav is wider than the thin lines, so make the whole proximity strip clickable —
// otherwise you'd have to land the cursor exactly on the 2px line to navigate.
function onClick() {
  if (activeIdx.value !== null) window.location.href = props.items[activeIdx.value].href;
}

// Touch scrub: press to preview, drag to another line, release to open.
// Dragging left off the rail arms the cancel region; releasing there aborts.
const activeIdx = ref<number | null>(null);
const inCancel = ref(false);

function nearestIdx(clientY: number): number | null {
  let best: number | null = null;
  let bestDist = Infinity;
  lineRefs.value.forEach((el, i) => {
    const r = el.getBoundingClientRect();
    const d = Math.abs(clientY - (r.top + r.height / 2));
    if (d < bestDist) {
      bestDist = d;
      best = i;
    }
  });
  return bestDist <= 24 ? best : null;
}

function onTouchScrub(e: TouchEvent) {
  const { clientX, clientY } = e.touches[0];
  const nav = e.currentTarget as HTMLElement;
  if (clientX < nav.getBoundingClientRect().left - 8) {
    inCancel.value = true;
    activeIdx.value = null;
    onLeave();
    return;
  }
  inCancel.value = false;
  tracking.value = true;
  activeIdx.value = nearestIdx(clientY);
  applyZoom(clientY);
}

function onTouchEnd() {
  if (!inCancel.value && activeIdx.value !== null) {
    window.location.href = props.items[activeIdx.value].href;
  }
  onTouchCancel();
}

function onTouchCancel() {
  inCancel.value = false;
  activeIdx.value = null;
  onLeave();
}
</script>

<template>
  <!-- ponytail: rail assumes post count fits the viewport; add scroll-scaling when it doesn't -->
  <!-- Pointer-only scrubber: every tick duplicates a link in the main list,
       so it's hidden from AT / tab order to avoid a 2x-length tab sequence. -->
  <nav
    aria-hidden="true"
    class="fixed right-0 z-40 flex w-40 touch-none flex-col items-end pr-2 xl:pr-3"
    :class="[
      railTop === null && 'top-1/2 -translate-y-1/2',
      activeIdx !== null && 'cursor-pointer',
    ]"
    :style="railTop !== null ? { top: `${railTop}px` } : undefined"
    @mousemove="onMove"
    @mouseleave="onLeave"
    @click="onClick"
    @touchstart.prevent="onTouchScrub"
    @touchmove.prevent="onTouchScrub"
    @touchend="onTouchEnd"
    @touchcancel="onTouchCancel"
  >
    <template v-for="(item, i) in items" :key="item.href">
      <a
        :href="item.href"
        tabindex="-1"
        class="group relative flex h-4 items-center justify-end no-underline"
      >
        <span
          class="pointer-events-none absolute rounded-lg border border-border bg-surface px-2.5 py-1 text-xs font-medium whitespace-nowrap text-fg opacity-0 shadow-sm transition-opacity duration-100 group-hover:opacity-100"
          :class="[activeIdx === i && 'opacity-100', 'top-1/2 right-full mr-3 -translate-y-1/2']"
        >
          <Pin
            v-if="item.pinned"
            class="mr-1 inline size-3 shrink-0 translate-y-[2px] text-highlight-dim"
          />
          <span class="mr-1.5 text-fg-muted tabular-nums">{{ formatDate(item.date) }}</span>
          {{ item.title }}
        </span>
        <span
          v-if="groupLabel(i)"
          class="mr-1.5 flex items-center gap-0.5 text-[10px] leading-none text-fg-muted tabular-nums select-none"
          aria-hidden="true"
        >
          <Pin v-if="item.pinned" class="size-2.5 text-highlight-dim" />
          {{ groupLabel(i) }}
        </span>
        <span
          :ref="
            (el) => {
              if (el) lineRefs[i] = el as HTMLElement;
            }
          "
          class="block h-[2px] rounded-full"
          :class="[
            activeIdx === i ? 'bg-accent' : 'bg-border',
            !reducedMotion &&
              (tracking
                ? 'transition-[background-color] duration-200 ease-out'
                : 'transition-[width,background-color] duration-200 ease-out'),
          ]"
          :style="{ width: widths[i] + 'px' }"
          aria-hidden="true"
        />
      </a>
    </template>
  </nav>
</template>
