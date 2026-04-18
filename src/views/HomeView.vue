<script setup>
import CarouselBanner from '@/components/CarouselBanner.vue';
import ProductCard from '@/components/ProductCard.vue';
import ProductCardSkeleton from '@/components/productCardSkeleton.vue';
import { useProductsStore } from '@/store/products.store';
import trackMount from '@/utils/mountTracker';
import { storeToRefs } from 'pinia';
import { onMounted } from 'vue';

const props = defineProps({
  banners: {
    type: Array,
    default: [],
  },
});


const productStore = useProductsStore();
const { fetchAllProducts } = productStore;
const { isLoading, isError, products } = storeToRefs(productStore)


onMounted(async () => {
  await fetchAllProducts();
})

// trackMount("home view");


</script>

<template>
  <CarouselBanner :banners="banners" />
  <h1 class="divider my-8 text-center text-(--color-secondary) text-2xl">Our best selling perfumes</h1>
  <div v-if="isLoading" class="grid grid-cols-1 sm:grid-cols-2 lg:gricol3 xl:grid-cols-4 gap-6">
    <ProductCardSkeleton v-for="i in 8" :key="i" />
  </div>
  <div v-else class="grid grid-cols-1 sm:grid-cols-2 lg:gricol3 xl:grid-cols-4 gap-6">
    <ProductCard v-for="product in products" :key="product.id" :prod="product" />
  </div>
</template>
