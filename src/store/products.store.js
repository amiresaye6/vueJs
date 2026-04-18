import { useApi } from '@/utils/useApi';
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useProductsStore = defineStore('products', () => {
    const products = ref([]);
    const isLoading = ref(false);
    const isError = ref(null);

    const featuredProduct = ref({});
    const relatedProducts = ref([]);

    const setIsLoading = (state) => isLoading.value = state;
    const setIsError = (msg) => isError.value = msg;

    const fetchAllProducts = async () => {
        products.value = await useApi({
            url: 'http://localhost:3000/products/',
            setLoading: setIsLoading,
            setError: setIsError
        });
    }
    const fetchProductById = async (id) => {
        featuredProduct.value = await useApi({
            url: `http://localhost:3000/products/${id}`,
            setLoading: setIsLoading,
            setError: setIsError
        });
        await fetchAllProducts();
        relatedProducts.value = products.value.filter(el => el.id != id);
    }

    const buyProduct = async (id) => {
        featuredProduct.value.stock -= 1;
        await useApi({
            url: `http://localhost:3000/products/${id}`,
            method: "PUT",
            data: featuredProduct.value,
            setLoading: setIsLoading,
            setError: setIsError
        });
    }

    return {
        // store
        isLoading, isError, products, featuredProduct, relatedProducts,

        // getters

        // actions
        setIsLoading, setIsError, fetchAllProducts, fetchProductById, buyProduct
    }
})