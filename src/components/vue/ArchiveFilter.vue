<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';

type Item = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  year: number;
  author: string;
  lang: 'en' | 'km';
  site: 'ask' | 'osify';
  siteLabel: string;
  categories: { name: string; slug: string }[];
};

const props = defineProps<{
  items: Item[];
  categories: { name: string; slug: string; count: number }[];
}>();

const activeCategory = ref('');
const activeSite = ref('');
const activeLang = ref('');

const SITES = [
  { value: '', label: 'Both sources' },
  { value: 'osify', label: 'osify.com' },
  { value: 'ask', label: 'ask.osify.com' },
];

const LANGS = [
  { value: '', label: 'Any language' },
  { value: 'en', label: 'English' },
  { value: 'km', label: 'ភាសាខ្មែរ' },
];

const filtered = computed(() =>
  props.items.filter((item) => {
    if (activeSite.value && item.site !== activeSite.value) return false;
    if (activeLang.value && item.lang !== activeLang.value) return false;
    if (activeCategory.value && !item.categories.some((c) => c.slug === activeCategory.value)) return false;
    return true;
  })
);

const grouped = computed(() => {
  const map = new Map<number, Item[]>();
  for (const item of filtered.value) {
    if (!map.has(item.year)) map.set(item.year, []);
    map.get(item.year)!.push(item);
  }
  return [...map.entries()].sort((a, b) => b[0] - a[0]).map(([year, items]) => ({ year, items }));
});

const isFiltered = computed(() => !!(activeCategory.value || activeSite.value || activeLang.value));

function reset() {
  activeCategory.value = '';
  activeSite.value = '';
  activeLang.value = '';
}

// Deep links like /archive/?topic=java arrive from topic pages.
onMounted(() => {
  const params = new URLSearchParams(window.location.search);
  const topic = params.get('topic');
  const site = params.get('site');
  if (topic && props.categories.some((c) => c.slug === topic)) activeCategory.value = topic;
  if (site === 'ask' || site === 'osify') activeSite.value = site;
});
</script>

<template>
  <div>
    <div class="flex flex-wrap items-center gap-2 border-b border-rule pb-4">
      <select
        v-model="activeCategory"
        class="rounded-sm border border-rule bg-surface px-2.5 py-1.5 font-mono text-xs text-ink"
        aria-label="Filter by topic"
      >
        <option value="">All topics</option>
        <option v-for="category in categories" :key="category.slug" :value="category.slug">
          {{ category.name }} ({{ category.count }})
        </option>
      </select>

      <select
        v-model="activeSite"
        class="rounded-sm border border-rule bg-surface px-2.5 py-1.5 font-mono text-xs text-ink"
        aria-label="Filter by original source"
      >
        <option v-for="site in SITES" :key="site.value" :value="site.value">{{ site.label }}</option>
      </select>

      <select
        v-model="activeLang"
        class="rounded-sm border border-rule bg-surface px-2.5 py-1.5 font-mono text-xs text-ink"
        aria-label="Filter by language"
      >
        <option v-for="lang in LANGS" :key="lang.value" :value="lang.value">{{ lang.label }}</option>
      </select>

      <button
        v-if="isFiltered"
        type="button"
        class="meta hover:text-stamp"
        @click="reset"
      >
        Clear
      </button>

      <span class="meta ml-auto" role="status">
        {{ filtered.length }} of {{ items.length }}
      </span>
    </div>

    <p v-if="!filtered.length" class="py-16 text-center text-sm text-muted">
      Nothing matches that combination.
      <button type="button" class="text-stamp underline underline-offset-2" @click="reset">
        Clear the filters
      </button>
    </p>

    <section v-for="group in grouped" :key="group.year" :id="`y${group.year}`" class="scroll-mt-28 pt-10">
      <div class="flex items-baseline gap-4 border-b border-rule pb-2">
        <h2 class="font-mono text-2xl tabular-nums font-medium tracking-tight text-ink">
          {{ group.year }}
        </h2>
        <span class="meta">{{ group.items.length }} article{{ group.items.length === 1 ? '' : 's' }}</span>
      </div>

      <ul>
        <li v-for="item in group.items" :key="item.slug" class="group border-b border-rule last:border-b-0">
          <a :href="`/posts/${item.slug}/`" class="grid gap-1 py-5 sm:grid-cols-[6.5rem_1fr] sm:gap-6">
            <time :datetime="item.date" class="meta pt-1 tabular-nums transition-colors group-hover:text-stamp">
              {{ item.date }}
            </time>
            <div class="min-w-0">
              <h3
                :lang="item.lang"
                class="text-balance text-lg font-semibold leading-snug tracking-[-0.02em] text-ink transition-colors group-hover:text-stamp"
              >
                {{ item.title }}
              </h3>
              <p v-if="item.excerpt" :lang="item.lang" class="mt-1.5 line-clamp-2 text-sm leading-relaxed text-muted">
                {{ item.excerpt }}
              </p>
              <p class="meta mt-2 flex flex-wrap items-center gap-x-2 gap-y-1">
                <span>{{ item.author }}</span>
                <template v-if="item.categories.length">
                  <span aria-hidden="true">·</span>
                  <span>{{ item.categories[0].name }}</span>
                </template>
                <span aria-hidden="true">·</span>
                <span class="text-faint">{{ item.siteLabel }}</span>
              </p>
            </div>
          </a>
        </li>
      </ul>
    </section>
  </div>
</template>
