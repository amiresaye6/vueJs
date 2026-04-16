<script setup>
import ProductDetails from '@/components/ProductDetails.vue';
import RelatedProducts from '@/components/RelatedProducts.vue';
import { ref } from 'vue';

const productDetails = ref(
    {
        "id": 1,
        "name": "Nike Air Max Dn 'All Night'",
        "description": "Experience the next generation of Air technology. The Nike Air Max Dn features a Dynamic Air unit system of dual-pressure tubes, creating a reactive sensation with every step. The multi-layered mesh upper is lightweight and breathable, featuring a haptic print for a textured look, while the plush foam cushioning provides a uniquely soft and supportive feel for all-day wear.",
        "image": "https://images.pexels.com/photos/4263994/pexels-photo-4263994.jpeg",
        "badge": "NEW",
        "price": 160,
        "discount": 15,
        "tags": [
            "Sport"
        ]
    }
)


const relatedProducts = ref([
    {
        "id": 1,
        "name": "Professional Mirrorless Camera",
        "description": "Capture every moment with stunning clarity.",
        "image": "https://images.pexels.com/photos/8473534/pexels-photo-8473534.jpeg",
        "badge": "NEW",
        "price": 1299,
        "discount": 10,
        "tags": ["Photography", "Electronics", "Professional"]
    },
    {
        "id": 2,
        "name": "Minimalist Ceramic Vase Set",
        "description": "A set of three handcrafted ceramic vases with a matte finish.",
        "image": "https://images.pexels.com/photos/19893263/pexels-photo-19893263.jpeg",
        "badge": "NEW",
        "price": 45,
        "discount": 0,
        "tags": ["Home Decor","Handmade"]
    },
    {
        "id": 3,
        "name": "Premium Leather Travel Journal",
        "description": "Document your journeys in style. This journal features genuine top-grain leather",
        "image": "https://images.pexels.com/photos/17630275/pexels-photo-17630275.jpeg",
        "badge": "NEW",
        "price": 38,
        "discount": 15,
        "tags": ["Stationery", "Travel", "Leather"]
    },
    {
        "id": 4,
        "name": "Wireless Ergonomic Headphones",
        "description": "Experience immersive sound with active noise cancellation technology.",
        "image": "https://images.pexels.com/photos/12725051/pexels-photo-12725051.jpeg",
        "badge": "",
        "price": 199,
        "discount": 20,
        "tags": ["Audio", "Tech", "Wireless"]
    }
])
</script>

<template>
    <div class="m-3">
        <ProductDetails :product="productDetails" />
        <h2 class="text-center py-4">Related products</h2>
        <RelatedProducts :related-products="relatedProducts" />
    </div>
</template>

<style scoped></style>
