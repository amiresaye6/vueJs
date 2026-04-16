<script setup>
import ProductCard from './ProductCard.vue';
const props = defineProps({
    relatedProducts: {
        type: Array,
        required: true,
    },
});

</script>

<template>
    <div class="flex flex-row justify-evenly  flex-wrap">
        <ProductCard v-for="prod in relatedProducts" :key="prod.id" :prod="prod" />
    </div>
</template>

<style scoped></style>
