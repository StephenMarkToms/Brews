<script setup>
useHead({
  title: 'BREWHAUS'
})

const searchQuery = ref('')
const isLoading = ref(false)
const { data, refresh } = await useLazyFetch(() => `/api/brewerydb/search?size=9&name=${searchQuery.value}`, {
  watch: false // Remove automatic watching
})

// Custom debounce function
function debounce(fn, delay) {
  let timeoutId
  return (...args) => {
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => fn(...args), delay)
  }
}

// Create a debounced version of the refresh function
const debouncedRefresh = debounce(async () => {
  isLoading.value = true
  await refresh()
  isLoading.value = false
}, 300) // 300ms delay

// Watch for changes in searchQuery and trigger the debounced refresh
watch(searchQuery, () => {
  debouncedRefresh()
})

const handleSearch = () => {
  debouncedRefresh()
}
</script>


<template>
  <div class="flex flex-col min-h-[100dvh]">
    <section class="w-full py-6 md:py-14 lg:py-20 bg-muted">
      <div class="container px-4 md:px-6 mx-auto">
        <div class="flex flex-col items-center justify-center space-y-4 text-center">
          <div class="space-y-2">
            <h1 class="text-3xl font-bold tracking-tighter sm:text-5xl">BREWHAUS</h1>
            <p class="max-w-[700px] text-muted-foreground md:text-xl">
              Search for your new favorite brewery!
            </p>
          </div>
        </div>
      </div>
      <form @submit.prevent="handleSearch" class="mt-5 max-w-[700px] mx-auto flex">
        <input
          v-model="searchQuery"
          class="flex-grow h-10 border border-input ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-full rounded-lg bg-muted px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          placeholder="Search breweries..."
          type="search"
        >
        <button
          type="submit"
          class="ml-2 px-4 py-2 bg-primary text-primary-foreground border border-input rounded-lg text-sm font-medium"
        >
          Search
        </button>
      </form>
    </section>
    <section class="w-full py-12 md:py-24 lg:py-32">
      <div class="container mx-auto grid grid-cols-1 gap-6 px-4 md:grid-cols-2 lg:grid-cols-3 md:px-6">
        <!-- loading state -->
        <template v-if="isLoading">
          <Card v-for="i in 9" :key="i" :brewery="null" />
        </template>
        <!-- results state -->
        <template v-else-if="data && data.length > 0">
          <Card v-for="brewery in data" :key="brewery.id" :brewery="brewery" />
        </template>
        <!-- no results state -->
        <template v-else>
          <div class="col-span-full">
            <div class="flex flex-col items-center justify-center bg-background px-4 sm:px-6 lg:px-8">
              <div class="mx-auto max-w-md text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="mx-auto h-12 w-12 text-primary"
                >
                  <!-- ... (SVG path data) ... -->
                </svg>
                <h1 class="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">No Breweries Found</h1>
                <p class="mt-4 text-muted-foreground">
                  We couldn't find any breweries matching your search or selection. Please try again with different criteria.
                </p>
                <div class="mt-6">
                  <button
                    @click="searchQuery = ''; handleSearch()"
                    class="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                  >
                    Back to Search
                  </button>
                </div>
              </div>
            </div>
          </div>
        </template>
      </div>
    </section>
  </div>
</template>
