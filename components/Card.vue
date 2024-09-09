<template>
    <NuxtLink v-if="brewery" :to="`/brewery/${brewery.id}`">

    <div class="bg-muted" style="width: 100%; overflow: hidden; height: 200px;">
        <iframe 
            v-if="brewery.latitude && brewery.longitude"
            :src="`https://maps.google.com/maps?q=&layer=c&cbll=${brewery.latitude},${brewery.longitude}&cbp=12,0,0,0,0&output=svembed&disableDefaultUI=true`"
            width="100%"
            height="700"
            frameborder="0"
            style="border:0; margin-top: -250px; pointer-events: none;">
        </iframe>
        <div v-else class="h-[200px] w-full bg-muted rounded mb-2">
            <img src="/mug.svg" alt="Brewery" class="object-contain w-20 mx-auto mt-10 opacity-50">
        </div>
    </div>
    
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
    <div class="h-[200px] w-full bg-muted rounded mb-2 animate-pulse"></div>
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