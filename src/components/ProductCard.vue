<script setup>
import { computed } from 'vue';

const props = defineProps({
    prod: {
        type: Object,
        required: true,
    },
});

const caldPriceDiscount = computed(() => {
    return Math.round(props.prod.price - (props.prod.price * (props.prod.discount / 100)), 2);
});

</script>

<template>
    <div class="card bg-neutral-800 w-80 shadow-sm">
        <figure>
            <img :src="prod.image" />
        </figure>
        <div class="card-body">
            <h2 class="card-title">
                {{ prod.name }}
                <div v-if="prod.badge" class="badge badge-secondary">{{ prod.badge }}</div>
            </h2>
            <p>{{ prod.description }}</p>
            <div class="card-actions justify-end flex gap-1">
                <span>{{ prod.discount > 0 ? caldPriceDiscount : prod.price }} $</span>
                <span v-if="prod.discount > 0" class="line-through">{{ prod.price }} $</span>
            </div>
            <div class="card-actions justify-end flex gap-1">
                <div v-for="t in prod.tags" class="badge badge-outline">{{ t }}</div>
            </div>
            <button class="btn btn-primary">Buy now</button>
        </div>
    </div>

</template>

<style scoped></style>
