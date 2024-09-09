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
              Search for your favorite brewery.
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
    </section>
  </div>
</template>
