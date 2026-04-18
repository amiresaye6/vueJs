<script setup>
import ProductDetails from '@/components/ProductDetails.vue';
import RelatedProducts from '@/components/RelatedProducts.vue';
import trackMount from '@/utils/mountTracker';
import { onMounted, ref, watch } from 'vue';
import { useProductsStore } from '@/store/products.store'
import { storeToRefs } from 'pinia';

const props = defineProps({
    id: {
        type: String,
        required: true,
    }
});

const productStore = useProductsStore();
const { fetchAllProducts, fetchProductById } = productStore;
const { isLoading, isError, featuredProduct, relatedProducts } = storeToRefs(productStore)

// trackMount("product details view")

onMounted(async () => {
    await fetchAllProducts();
    await fetchProductById(props.id);
})

watch(
    () => props.id,
    () => {
        fetchProductById(props.id);
    },
)
</script>

<template>
    <div class="">
        <div>
            <ProductDetails :product="featuredProduct" />
            <h2 class="divider text-center py-4 text-4xl text-(--color-secondary)">Related products</h2>
            <RelatedProducts :relatedProducts="relatedProducts" :isLoading="isLoading" />
        </div>
    </div>
</template>

<style scoped></style>
