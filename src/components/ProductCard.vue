<script setup>
import trackMount from '@/utils/mountTracker';
import { computed } from 'vue';

const props = defineProps({
    prod: {
        type: Object,
        required: true,
    },
});

const inStock = computed(() => {
    return props.prod.stock > 0
})

const caldPriceDiscount = computed(() => {
    return Math.round(props.prod.price - (props.prod.price * (props.prod.discount / 100)), 2);
});


trackMount("product card");


</script>

<template>
    <div class="card bg-base-100  shadow-sm h-full">
        <figure class="aspect-square overflow-hidden ">
            <img class="h-full w-full object-cover hover:scale-105 transition-transform duration-500"
                :src="prod.image" />
        </figure>
        <div class="card-body p-4">
            <h2 class="card-title">
                {{ prod.name }}
                <div v-if="prod.badge" class="badge badge-secondary">{{ prod.badge }}</div>
            </h2>
            <p>{{ prod.description }}</p>
            <div class="card-actions justify-end flex gap-1">
                <div v-for="t in prod.tags" class="badge badge-outline">{{ t }}</div>
            </div>
            <div class="justify-between  flex gap-1">
                <span class="px-2 py-1 rounded-2xl w-fit"
                    :class="inStock ? 'bg-(--color-success)' : 'bg-(--color-warning)'">{{ inStock ? `${prod.stock} in
                    stock` : 'Out of stock' }} </span>
                <div>
                    <span>{{ prod.discount > 0 ? caldPriceDiscount : prod.price }} $</span>
                    <span v-if="prod.discount > 0" class="line-through">{{ prod.price }} $</span>
                </div>
            </div>
            <RouterLink :to="`/product/${prod.id}`" class="btn btn-primary btn-sm">
                View details
            </RouterLink>
        </div>
    </div>

</template>

<style scoped></style>
