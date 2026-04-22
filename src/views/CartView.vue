<script setup>
import BreadCrumps from '@/components/BreadCrumps.vue';
import CartStatus from '@/components/CartStatus.vue';
import { useCartStore } from '@/store/cart.store';
import { storeToRefs } from 'pinia';
import { onMounted, ref } from 'vue';

const cartStore = useCartStore();
const { removeFromCart, clearCart } = cartStore
const { cart } = storeToRefs(cartStore)


</script>

<template>

    <BreadCrumps />
    <div class="flex justify-between items-start">
        <CartStatus />
        <button class="btn btn-error" onclick="my_modal_1.showModal()">
            Clear cart
        </button>

    </div>
    <h1 class="divider">
        My Perfumes
    </h1>

    <div class="overflow-x-auto ">
        <table class="table">
            <!-- head -->
            <thead>
                <tr>
                    <th>Perfume</th>
                    <th>Price</th>
                    <th>Discount</th>
                    <th>Bange</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <!-- row 1 -->
                <tr v-for="item in cart.products">
                    <td>
                        <div class="flex items-center gap-3">
                            <div class="avatar">
                                <div class="mask mask-squircle h-12 w-12">
                                    <img :src="item.image" alt="Avatar Tailwind CSS Component" />
                                </div>
                            </div>
                            <div>
                                <div class="font-bold">{{ item.name }}</div>
                                <div class="text-sm opacity-50">{{ item.itemsCount }} pieces</div>
                            </div>
                        </div>
                    </td>
                    <td>{{ item.price }} $</td>
                    <td>{{ item.discount }} %</td>
                    <td>{{ item.badge }}</td>
                    <th class="flex wrap gap-2">
                        <RouterLink :to="`/product/${item.id}`" class="btn btn-info btn-xs">details</RouterLink>
                        <button class="btn btn-error btn-xs" @click="removeFromCart(item.id)">
                            delete
                        </button>
                    </th>
                </tr>
            </tbody>
        </table>
    </div>
    <dialog id="my_modal_1" class="modal">
        <div class="modal-box">
            <h3 class="text-lg font-bold">Clear my caart</h3>
            <p class="py-4">Are you sure you want to clear cart?</p>
            <p class="py-4">Press ESC key or click the button below to close or Clear to procead.</p>
            <div class="modal-action">
                <form method="dialog" class="flex gap-2 flex-wrap">
                    <button class="btn">Close</button>
                    <button class="btn btn-error" @click="clearCart">Clear</button>
                </form>
            </div>
        </div>
    </dialog>
</template>