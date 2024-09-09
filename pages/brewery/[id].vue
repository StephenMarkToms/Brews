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
  <div class="flex flex-col min-h-[100dvh] mx-auto">
    <section class="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div class="container px-4 md:px-6 mx-auto">
        <div class="flex flex-col items-center justify-center space-y-4 text-center">
          <div class="space-y-2">
            <h1 class="text-3xl font-bold tracking-tighter sm:text-5xl">{{ data.name }}</h1>
            <p class="max-w-[700px] text-muted-foreground md:text-lg">
              {{ data.street }} {{ data.city }}, {{ data.state }} {{ data.postal_code }}
            </p>
            <p class="mt-24 max-w-[700px] text-muted-foreground md:text-xl">
              Contact:
            </p>
            <p>
              <a :href="`tel:${data.phone}`" class="hover:underline">
                {{ formatPhoneNumber(data.phone) }}
              </a>
            </p>
            <a :href="data.website_url" target="_blank" rel="noopener noreferrer" class="hover:underline ml-2">
              {{ data.website_url }}
            </a>
            <div>
              <iframe v-if="data.latitude && data.longitude" class="w-full h-40 mt-4" :src="`https://maps.google.com/maps?q=${data.latitude},${data.longitude}&t=&z=15&ie=UTF8&iwloc=&output=embed`" />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
