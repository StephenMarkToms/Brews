<script setup>
useHead({
  title: 'BREWHAUS'
})
const { data } = await useFetch('/api/brewerydb')
</script>


<template>
  <div class="flex flex-col min-h-[100dvh]">
    <pre>{{ data }}</pre>
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
    <input class="mt-5 max-w-[700px] mx-auto flex h-10 border border-input ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-full rounded-lg bg-muted px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2" placeholder="Search breweries..." data-id="3" type="search" value="">
  </section>
  <section class="w-full py-12 md:py-24 lg:py-32">
    <div class="container mx-auto grid grid-cols-1 gap-6 px-4 md:grid-cols-2 lg:grid-cols-3 md:px-6">
      <div class="relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:shadow-xl hover:-translate-y-2">
        <a class="absolute inset-0 z-10" href="#" rel="ugc">
          <span class="sr-only">View Brewery</span>
        </a>
        <div class="p-4 bg-background">
          <h3 class="text-xl font-bold">Acme Brewing Co.</h3>
          <p class="text-sm text-muted-foreground">San Francisco, CA</p>
          <button class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3 mt-4">
            View Details
          </button>
        </div>
      </div>
      <div class="relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:shadow-xl hover:-translate-y-2">
        <a class="absolute inset-0 z-10" href="#" rel="ugc">
          <span class="sr-only">View Brewery</span>
        </a>
        <div class="p-4 bg-background">
          <h3 class="text-xl font-bold">Craft Beer Emporium</h3>
          <p class="text-sm text-muted-foreground">Portland, OR</p>
          <button class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3 mt-4">
            View Details
          </button>
        </div>
      </div>
      <div class="relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:shadow-xl hover:-translate-y-2">
        <a class="absolute inset-0 z-10" href="#" rel="ugc">
          <span class="sr-only">View Brewery</span>
        </a>
        <div class="p-4 bg-background">
          <h3 class="text-xl font-bold">Hops &amp; Barley</h3>
          <p class="text-sm text-muted-foreground">Seattle, WA</p>
          <button class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3 mt-4">
            View Details
          </button>
        </div>
      </div>
      <div class="relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:shadow-xl hover:-translate-y-2">
        <a class="absolute inset-0 z-10" href="#" rel="ugc">
          <span class="sr-only">View Brewery</span>
        </a>
        <div class="p-4 bg-background">
          <h3 class="text-xl font-bold">Brew Haven</h3>
          <p class="text-sm text-muted-foreground">Denver, CO</p>
          <button class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3 mt-4">
            View Details
          </button>
        </div>
      </div>
      <div class="relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:shadow-xl hover:-translate-y-2">
        <a class="absolute inset-0 z-10" href="#" rel="ugc">
          <span class="sr-only">View Brewery</span>
        </a>
        <div class="p-4 bg-background">
          <h3 class="text-xl font-bold">Hops &amp; Grains</h3>
          <p class="text-sm text-muted-foreground">Austin, TX</p>
          <button class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3 mt-4">
            View Details
          </button>
        </div>
      </div>
      <div class="relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:shadow-xl hover:-translate-y-2">
        <a class="absolute inset-0 z-10" href="#" rel="ugc">
          <span class="sr-only">View Brewery</span>
        </a>
        <div class="p-4 bg-background">
          <h3 class="text-xl font-bold">Brew Co.</h3>
          <p class="text-sm text-muted-foreground">Chicago, IL</p>
          <button class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3 mt-4">
            View Details
          </button>
        </div>
      </div>
    </div>
  </section>
</div>
</template>
