import { defineStore } from 'pinia'
import { useLocalStorage } from '@vueuse/core'
import { computed } from 'vue'
import { toast } from 'vue-sonner';
import { useProductsStore } from './products.store';


export const useCartStore = defineStore('cart', () => {
    const cart = useLocalStorage("cart", {
        products: [],
    })
    const { buyProduct } = useProductsStore();
    const calcProdPrice = (product) => {
        return product.price - product.price * (product.discount / 100);
    }

    const totalItems = computed(() => {
        return cart.value.products.reduce((count, curr) => count + curr.itemsCount, 0);
    })
    const totalPrice = computed(() => {
        return cart.value.products.reduce((total, curr) => total + curr.itemsCount * calcProdPrice(curr), 0);
    })
    const totalSavings = computed(() => {
        return cart.value.products.reduce((total, curr) => total + curr.itemsCount * curr.price * (curr.discount / 100), 0);
    })

    const addToCart = (product) => {
        // see if i have this product in cart or not?
        const inCart = cart.value.products.find(p => p.id === product.id);
        if (inCart) {
            inCart.itemsCount += 1;
        }
        else {

            cart.value.products.push({
                ...product,
                itemsCount: 1
            });
        }
        buyProduct(product.id);
        toast.success('Product added')
    }

    const removeFromCart = (id) => {
        cart.value.products = cart.value.products.filter(p => p.id !== id);
        toast.success("Product deleted")
    }

    const clearCart = () => {
        cart.value = {
            products: [],
        };
        toast.success("Cart Cleard")
    }

    return {
        // store
        cart,
        // getters
        totalItems, totalPrice, totalSavings,
        // actions
        addToCart, removeFromCart, clearCart,
    }
})