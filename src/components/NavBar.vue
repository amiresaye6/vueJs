<script setup>
import { useCartStore } from '@/store/cart.store';
import trackMount from '@/utils/mountTracker';
import { storeToRefs } from 'pinia';

defineProps(
    {
        brand: {
            type: String,
            required: true
        },
        links: {
            type: Array,
            default: () => []
        }
    }
)

const cartStore = useCartStore();
const { totalItems } = storeToRefs(cartStore);


trackMount("navbar component");

</script>

<template>
    <div class="navbar bg-base-100 shadow-sm">
        <div class="navbar-start">
            <div class="dropdown">
                <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M4 6h16M4 12h8m-8 6h16" />
                    </svg>
                </div>
                <ul tabindex="-1"
                    class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                    <li v-for="link in links" :key="link.id">
                        <RouterLink :to="link.href">{{ link.label }}</RouterLink>
                    </li>
                </ul>
            </div>
            <a class="btn btn-ghost text-xl">{{ brand }}</a>
        </div>
        <div class="navbar-center hidden lg:flex">
            <ul class="menu menu-horizontal px-1">
                <li v-for="link in links" :key="link.id">
                    <RouterLink :to="link.href">{{ link.label }}</RouterLink>
                </li>
                <div class="flex items-center justify-center gap-2">
                    <div class="inline-grid *:[grid-area:1/1]">
                        <span class="status status-success animate-ping"></span>
                        <span class="status status-success"></span>
                    </div>
                    <span class="text-(--color-secondary)">{{ totalItems }}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                    </svg>

                </div>
            </ul>
        </div>
        <div class="navbar-end flex gap-2">
            <a class="btn btn-primary">Login</a>
            <a class="btn btn-secondary">Join us</a>
        </div>
    </div>
</template>

<style scoped></style>
