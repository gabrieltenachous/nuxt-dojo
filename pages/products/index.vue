<template>
  <div>
    <div class="grid grid-cols-4 gap-5">
      <div v-for="p in products">
        <ProductCard :product="p"></ProductCard>
      </div>
    </div>
  </div>
</template>

<script setup>
  //  fetch the products
  const { data: products } = await useFetch('https://fakestoreapi.com/products')
  useHead({
    title: 'Nuxt Dojo | Merch',
    meta: [
      {
        name: 'description',
        content: 'Nuxt 3 Merch'
      }
    ]
  })
  definePageMeta({
    layout: "products",
  })
</script>