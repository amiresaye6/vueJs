<script setup>
import { computed } from 'vue';

const props = defineProps({
    product: {
        type: Object,
        required: true,
    },
});


const caldPriceDiscount = computed(() => {
    return Math.round(props.product.price - (props.product.price * (props.product.discount / 100)), 2);
});



</script>

<template>
    <div class="hero  min-h-screen">
        <div class="hero-content flex flex-col lg:flex-row">
            <img :src="product.image" class="max-w-sm rounded-lg shadow-2xl" />
            <div>
                <h1 class="text-5xl font-bold">{{ product.name }}</h1>
                <p class="py-6">{{ product.description }}</p>
                <div class="card-actions justify-start flex gap-1 mb-4">
                    <span>{{ product.discount > 0 ? caldPriceDiscount : product.price }} $</span>
                    <span v-if="product.discount > 0" class="line-through">{{ product.price }} $</span>
                </div>
                <div class="card-actions justify-start flex gap-1 mb-4">
                    <div v-for="t in product.tags" class="badge badge-outline">{{ t }}</div>
                </div>
                <button class="btn btn-primary">Buy now</button>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
