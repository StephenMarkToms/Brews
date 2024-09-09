<template>
    <NuxtLink v-if="brewery" :to="`/brewery/${brewery.id}`">
    
    <div class="border border-muted relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:shadow-xl hover:-translate-y-2">
        <a class="absolute inset-0 z-10" :href="brewery.website" rel="ugc">
          <span class="sr-only">View {{ brewery.name }}</span>
        </a>
        <div class="p-4 bg-background">
          <h3 class="text-xl font-bold">{{ brewery.name }}</h3>
          <p class="text-sm text-muted-foreground">{{ brewery.city }}, {{ brewery.state }}</p>
           <button class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3 mt-4">
            View Details
           </button> 
        </div>
    </div>
</NuxtLink>
<div v-else class="border border-muted relative overflow-hidden rounded-lg shadow-lg">
    <div class="p-4 bg-background">
      <div class="h-6 w-3/4 bg-muted rounded mb-2 animate-pulse"></div>
      <div class="h-4 w-1/2 bg-muted rounded mb-4 animate-pulse"></div>
      <div class="h-9 w-32 bg-muted rounded animate-pulse"></div>
    </div>
</div>
</template>

<script setup lang="ts">
interface Brewery {
  name: string;
  city: string;
  state: string;
  website?: string;
  id: string;
}

defineProps<{
  brewery: Brewery | null;
}>();

function defineProps<T>() {
  throw new Error("Function not implemented.");
}
</script>