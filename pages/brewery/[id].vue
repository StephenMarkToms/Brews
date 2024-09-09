<script setup>
useHead({
  title: 'BREWHAUS'
})

const route = useRoute();
const { data } = await useFetch(`/api/brewerydb/${route.params.id}`)

function formatPhoneNumber(phoneNumberString) {
  const cleaned = ('' + phoneNumberString).replace(/\D/g, '');
  const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
  if (match) {
    return '(' + match[1] + ')' + match[2] + '-' + match[3];
  }
  return phoneNumberString;
}
</script>

<template>
  <div class="flex flex-col min-h-[100dvh] mx-auto bg-amber-50">
    <section class="w-full py-12 bg-muted text-brown">
      <div class="container px-4 md:px-6 mx-auto">
        <div class="flex flex-col items-center justify-center space-y-4 text-center">
          <div class="space-y-2">
            <h1 class="text-3xl font-bold tracking-tighter sm:text-5xl">{{ data.name }}</h1>
            <p class="max-w-[700px]  md:text-lg">
              {{ data.street }} {{ data.city }}, {{ data.state }} {{ data.postal_code }}
            </p>
          </div>
        </div>
      </div>
    </section>
    <section class="w-full py-6 ">
      <div class="container px-4 md:px-6 mx-auto">
        <div class="flex flex-col items-center justify-center text-center space-y-4">
          <h2 class="text-2xl font-semibold ">Contact Information</h2>
          <p>
            <a :href="`tel:${data.phone}`" class=" hover:underline">
              {{ formatPhoneNumber(data.phone) }}
            </a>
          </p>
          <a :href="data.website_url" target="_blank" rel="noopener noreferrer" class=" hover:underline">
            {{ data.website_url }}
          </a>
          <div class="w-full max-w-2xl mt-8">
            <iframe
              v-if="data.latitude && data.longitude"
              class="w-full h-64 rounded-lg shadow-md mb-4"
              :src="`https://maps.google.com/maps?q=&layer=c&cbll=${data.latitude},${data.longitude}&cbp=12,0,0,0,0&output=svembed&disableDefaultUI=true`"
              allowfullscreen>
            </iframe>
            <iframe 
              v-if="data.latitude && data.longitude" 
              class="w-full h-64 rounded-lg shadow-md" 
              :src="`https://maps.google.com/maps?q=${data.latitude},${data.longitude}&t=&z=15&ie=UTF8&iwloc=&output=embed`" 
            />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
