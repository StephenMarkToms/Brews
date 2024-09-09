<script setup>
useHead({
  title: 'BREWHAUS'
})

const searchQuery = ref('')
const { data, refresh } = await useFetch(() => `/api/brewerydb/search?size=9&name=${searchQuery.value}`, {
  watch: [searchQuery]
})

const handleSearch = () => {
  refresh()
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
        <Card v-for="brewery in data" :key="brewery.id" :brewery="brewery" />
      </div>
      <div v-if="data.length <= 0">
        <div class="flex flex-col items-center justify-center bg-background px-4  sm:px-6 lg:px-8">
          <div class="mx-auto max-w-md text-center">
            <svg data-id="3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mx-auto h-12 w-12 text-primary">
              <path d="M17 11h1a3 3 0 0 1 0 6h-1"></path>
              <path d="M9 12v6"></path>
              <path d="M13 12v6"></path>
              <path d="M14 7.5c-1 0-1.44.5-3 .5s-2-.5-3-.5-1.72.5-2.5.5a2.5 2.5 0 0 1 0-5c.78 0 1.57.5 2.5.5S9.44 2 11 2s2 1.5 3 1.5 1.72-.5 2.5-.5a2.5 2.5 0 0 1 0 5c-.78 0-1.5-.5-2.5-.5Z"></path>
              <path d="M5 8v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8"></path>
            </svg>
            <h1 class="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">No Breweries Found</h1>
            <p class="mt-4 text-muted-foreground">
              We couldn't find any breweries matching your search or selection. Please try again with different criteria.
            </p>
            <div class="mt-6">
              <Link
                href="#"
                class="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                :prefetch="false"
              >
                Back to Search
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
