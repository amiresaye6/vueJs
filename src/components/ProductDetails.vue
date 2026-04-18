<script setup>
import { computed, ref } from 'vue';
import BreadCrumps from './BreadCrumps.vue';
import trackMount from '@/utils/mountTracker';
import { useProductsStore } from '@/store/products.store';

const props = defineProps({
    product: {
        type: Object,
        required: true,
    },
    ctaLabel: {
        type: String,
        default: "Buy Now",
    }
});



trackMount("product detaisl");

const productsStore = useProductsStore();

const {isLoading, isError, buyProduct} = productsStore;

const inStock = computed(() => props.product.stock > 0);

const caldPriceDiscount = computed(() => {
    return Math.round(props.product.price - (props.product.price * (props.product.discount / 100)), 2);
});


const links = ref([
    {
        id: 1,
        path: '/',
        title: "Home"
    },
    {
        id: 2,
        path: '/perfumes',
        title: "Perfumes"
    },
])

</script>
<template>
    <BreadCrumps :links="links" :current="product.name" />
    <div class="container mx-auto px-4 py-10">
        <div class="grid lg:grid-cols-2 gap-10 items-start">
            <div class="card bg-base-100 shadow-xl">
                <figure class="p-4 aspect-square ">
                    <img :src="product.image" class="rounded-2xl object-cover w-full h-full" />
                </figure>
            </div>
            <div class="space-y-5">
                <h1 class="text-4xl font-bold">
                    {{ product.name }}
                    <div v-if="product.badge" class="badge badge-secondary">{{ product.badge }}</div>
                </h1>
                <p class="text-base-content/70 leading-relaxed">
                    {{ product.description }}
                </p>
                <div class="flex flex-wrap gap-2">
                    <span v-for="t in product.tags" :key="t" class="badge badge-outline">
                        {{ t }}
                    </span>
                </div>
                <div class="flex items-center gap-3">
                    <span class="text-3xl font-semibold text-primary">
                        {{ product.discount > 0 ? caldPriceDiscount : product.price }} $
                    </span>

                    <span v-if="product.discount > 0" class="text-lg line-through opacity-50">
                        {{ product.price }} $
                    </span>

                    <span v-if="product.discount > 0" class="badge badge-success">
                        -{{ product.discount }}%
                    </span>
                </div>
                <div>
                    <span class="badge" :class="inStock ? 'badge-success' : 'badge-warning'">
                        {{ inStock
                            ? product.stock + ' in stock'
                            : 'Out of stock'
                        }}
                    </span>
                </div>
                <div class="pt-4">
                    <button class="btn btn-primary w-full md:w-auto" :disabled="!inStock"
                        @click="buyProduct(product.id)">
                        Buy Now
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
