<script setup lang="ts">
import { computed, nextTick, onMounted, onUnmounted, ref, watch } from 'vue';

type Doc = {
  s: string; // slug
  t: string; // title
  e: string; // excerpt
  d: string; // date (YYYY-MM-DD)
  a: string; // author
  o: 'ask' | 'osify';
  l: 'en' | 'km';
  c: { n: string; s: string }[];
  g: string[];
  b: string; // body text
};

const open = ref(false);
const query = ref('');
const docs = ref<Doc[]>([]);
const loading = ref(false);
const loaded = ref(false);
const activeIndex = ref(0);
const inputEl = ref<HTMLInputElement | null>(null);
const listEl = ref<HTMLElement | null>(null);

const isMac = typeof navigator !== 'undefined' && /Mac|iPhone|iPad/.test(navigator.platform);
const hint = computed(() => (isMac ? '⌘K' : 'Ctrl K'));

async function loadIndex() {
  if (loaded.value || loading.value) return;
  loading.value = true;
  try {
    const response = await fetch('/search-index.json');
    docs.value = await response.json();
    loaded.value = true;
  } catch {
    docs.value = [];
  } finally {
    loading.value = false;
  }
}

/**
 * Khmer is written without spaces between words, so tokenising on whitespace
 * finds nothing for a Khmer query. Latin queries are matched token-by-token
 * (every token must appear), Khmer queries by substring over the same fields.
 */
const KHMER = /[ក-៿]/;

function scoreDoc(doc: Doc, raw: string): number {
  const q = raw.toLowerCase().trim();
  if (!q) return 0;

  const title = doc.t.toLowerCase();
  const haystack = `${doc.t} ${doc.e} ${doc.g.join(' ')} ${doc.c.map((c) => c.n).join(' ')} ${doc.b} ${doc.a}`.toLowerCase();

  if (KHMER.test(q)) {
    if (!haystack.includes(q)) return 0;
    return title.includes(q) ? 100 : 40;
  }

  const tokens = q.split(/\s+/).filter(Boolean);
  let score = 0;
  for (const token of tokens) {
    if (!haystack.includes(token)) return 0;
    if (title.startsWith(token)) score += 60;
    else if (title.includes(token)) score += 40;
    if (doc.g.some((tag) => tag.toLowerCase().includes(token))) score += 15;
    if (doc.c.some((cat) => cat.n.toLowerCase().includes(token))) score += 15;
    score += 5;
  }
  // Nudge whole-phrase title matches to the top.
  if (title.includes(q)) score += 50;
  return score;
}

const results = computed(() => {
  const q = query.value.trim();
  if (!q) return docs.value.slice(0, 8);
  return docs.value
    .map((doc) => ({ doc, score: scoreDoc(doc, q) }))
    .filter((entry) => entry.score > 0)
    .sort((a, b) => b.score - a.score || b.doc.d.localeCompare(a.doc.d))
    .slice(0, 24)
    .map((entry) => entry.doc);
});

watch(results, () => {
  activeIndex.value = 0;
});

async function show() {
  open.value = true;
  loadIndex();
  await nextTick();
  inputEl.value?.focus();
}

function hide() {
  open.value = false;
  query.value = '';
}

function go(doc: Doc) {
  window.location.href = `/posts/${doc.s}/`;
}

function move(delta: number) {
  if (!results.value.length) return;
  activeIndex.value = (activeIndex.value + delta + results.value.length) % results.value.length;
  nextTick(() => {
    listEl.value
      ?.querySelector(`[data-index="${activeIndex.value}"]`)
      ?.scrollIntoView({ block: 'nearest' });
  });
}

function onKeydown(event: KeyboardEvent) {
  if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
    event.preventDefault();
    open.value ? hide() : show();
    return;
  }
  if (!open.value) {
    // "/" opens search, unless the user is typing in a field already.
    const target = event.target as HTMLElement | null;
    const typing = target && /^(INPUT|TEXTAREA|SELECT)$/.test(target.tagName);
    if (event.key === '/' && !typing) {
      event.preventDefault();
      show();
    }
    return;
  }
  if (event.key === 'Escape') hide();
  else if (event.key === 'ArrowDown') { event.preventDefault(); move(1); }
  else if (event.key === 'ArrowUp') { event.preventDefault(); move(-1); }
  else if (event.key === 'Enter' && results.value[activeIndex.value]) {
    event.preventDefault();
    go(results.value[activeIndex.value]);
  }
}

onMounted(() => window.addEventListener('keydown', onKeydown));
onUnmounted(() => window.removeEventListener('keydown', onKeydown));

function highlight(text: string): string {
  const q = query.value.trim();
  const escaped = text.replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]!);
  if (!q) return escaped;
  const safe = q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  return escaped.replace(new RegExp(safe, 'gi'), '<mark class="bg-stamp-soft text-stamp px-0.5">$&</mark>');
}
</script>

<template>
  <div>
    <button
      type="button"
      class="group flex items-center gap-2 rounded-sm border border-rule px-2.5 py-1.5 text-muted transition-colors hover:border-stamp hover:text-stamp sm:min-w-[13rem]"
      aria-label="Search articles"
      @click="show"
    >
      <svg class="size-3.5 shrink-0" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true">
        <circle cx="9" cy="9" r="6" />
        <path d="m13.5 13.5 3.5 3.5" stroke-linecap="round" />
      </svg>
      <span class="hidden text-sm sm:inline">Search the archive</span>
      <kbd class="ml-auto hidden font-mono text-[0.65rem] tracking-wider text-faint sm:inline">{{ hint }}</kbd>
    </button>

    <Teleport to="body">
      <Transition
        enter-active-class="transition duration-150 ease-out"
        enter-from-class="opacity-0"
        leave-active-class="transition duration-100 ease-in"
        leave-to-class="opacity-0"
      >
        <div
          v-if="open"
          class="fixed inset-0 z-50 bg-ink/40 px-4 pt-[10vh] backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label="Search the archive"
          @click.self="hide"
        >
          <div class="mx-auto w-full max-w-2xl overflow-hidden rounded-sm border border-rule bg-surface shadow-2xl">
            <div class="flex items-center gap-3 border-b border-rule px-4">
              <svg class="size-4 shrink-0 text-faint" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true">
                <circle cx="9" cy="9" r="6" />
                <path d="m13.5 13.5 3.5 3.5" stroke-linecap="round" />
              </svg>
              <input
                ref="inputEl"
                v-model="query"
                type="text"
                class="w-full bg-transparent py-4 text-base text-ink outline-none placeholder:text-faint"
                placeholder="Search 423 articles — English or ភាសាខ្មែរ"
                autocomplete="off"
                spellcheck="false"
              />
              <button type="button" class="meta shrink-0 hover:text-stamp" @click="hide">Esc</button>
            </div>

            <div ref="listEl" class="max-h-[55vh] overflow-y-auto">
              <p v-if="loading" class="meta px-4 py-6">Loading index…</p>

              <p v-else-if="query && !results.length" class="px-4 py-6 text-sm text-muted">
                Nothing matches “{{ query }}”.
                <a href="/archive/" class="text-stamp underline underline-offset-2">Browse the archive</a> instead.
              </p>

              <p v-else-if="!query" class="meta px-4 pt-4 pb-2">Most recent</p>

              <ul>
                <li v-for="(doc, index) in results" :key="doc.s">
                  <a
                    :href="`/posts/${doc.s}/`"
                    :data-index="index"
                    class="block border-l-2 px-4 py-3 transition-colors"
                    :class="index === activeIndex ? 'border-stamp bg-stamp-soft/60' : 'border-transparent hover:bg-raised'"
                    @mouseenter="activeIndex = index"
                  >
                    <span
                      class="block text-[0.95rem] font-medium text-ink"
                      :lang="doc.l"
                      v-html="highlight(doc.t)"
                    />
                    <span class="meta mt-1 flex flex-wrap items-center gap-x-2 gap-y-1">
                      <span>{{ doc.d }}</span>
                      <span aria-hidden="true">·</span>
                      <span>{{ doc.a }}</span>
                      <span v-if="doc.c.length" aria-hidden="true">·</span>
                      <span v-if="doc.c.length">{{ doc.c[0].n }}</span>
                    </span>
                  </a>
                </li>
              </ul>
            </div>

            <div class="meta flex items-center justify-between border-t border-rule px-4 py-2">
              <span>{{ query ? `${results.length} result${results.length === 1 ? '' : 's'}` : `${docs.length} articles` }}</span>
              <span class="hidden sm:inline">↑↓ navigate · ↵ open · esc close</span>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>
