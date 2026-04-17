<script setup>
import ProductDetails from '@/components/ProductDetails.vue';
import RelatedProducts from '@/components/RelatedProducts.vue';
import trackMount from '@/utils/mountTracker';
import { ref, watch } from 'vue';

const props = defineProps({
    products: {
        type: Array,
        required: true,
    },
    id: {
        type: String,
        required: true,
    }
});


trackMount("product details view")

const emit = defineEmits(['buy'])

const buyHandler = (id) => {
    console.log("buy handler for product id ", id);
    emit('buy', id);
}

const featuredProduct = ref(null);
const relatedProducts = ref([]);



watch(
    () => props.id,
    () => {
        featuredProduct.value = props.products.find(p => p.id === Number(props.id));
        relatedProducts.value = props.products.filter(p => p.id !== Number(props.id));
    },
    {
        immediate: true,
    },
)
</script>

<template>
    <div class="">
        <ProductDetails @buy="buyHandler" :product="featuredProduct" />
        <h2 class="divider text-center py-4 text-4xl text-(--color-secondary)">Related products</h2>
        <RelatedProducts :relatedProducts="relatedProducts" />
    </div>
</template>

<style scoped></style>
