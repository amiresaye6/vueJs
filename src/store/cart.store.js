import { useApi } from '@/utils/useApi';
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useCartStore = defineStore('cart', () => {
    const cartProducts = ref([]);
    const isLoading = ref(false);
    const isError = ref(null);

    const setIsLoading = (state) => isLoading.value = state;
    const setIsError = (msg) => isError.value = msg;

    const fetchCart = async () => {
        products.value = await useApi({
            url: 'http://localhost:3000/cart/',
            setLoading: setIsLoading,
            setError: setIsError
        });
    }

    const addToCart = async (product) => {
        await useApi({
            url: `http://localhost:3000/cart/${id}`,
            method: "POST",
            data: product,
            setLoading: setIsLoading,
            setError: setIsError
        });
    }



    return {
        // store
        isLoading, isError, cartProducts,

        // getters

        // actions
        setIsLoading, setIsError, fetchCart, addToCart,
    }
})