<script setup>
import CarouselBanner from '@/components/CarouselBanner.vue';
import ProductCard from '@/components/ProductCard.vue';
import trackMount from '@/utils/mountTracker';

const props = defineProps({
  products: {
    type: Array,
    required: true,
  },
  banners: {
    type: Array,
    default: [],
  },
});



console.log(props.products)

trackMount("home view");


</script>

<template>
  <CarouselBanner :banners="banners" />
  <h1 class="divider my-8 text-center text-(--color-secondary) text-2xl">Our best selling perfumes</h1>
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:gricol3 xl:grid-cols-4 gap-6">
    <ProductCard v-for="product in products" :key="product.id" :prod="product" />
  </div>
</template>
