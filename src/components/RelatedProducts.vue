<script setup>
import trackMount from '@/utils/mountTracker';
import ProductCard from './ProductCard.vue';
import ProductCardSkeleton from './productCardSkeleton.vue';
const props = defineProps({
    relatedProducts: {
        type: Array,
        required: true,
    },
    isLoading: {
        type: Boolean,
        default: false,
    }
});

trackMount("related produts component");


</script>

<template>
    <div v-if="isLoading" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-4">
        <ProductCardSkeleton v-for="i in 8" :key="i" />
    </div>
    <div v-else class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-4">
        <ProductCard v-for="prod in relatedProducts" :key="prod.id" :prod="prod" />
    </div>
</template>

<style scoped></style>
