<script setup>
import { computed, ref } from 'vue';
import Footer from './components/Footer.vue';
import NavBar from './components/NavBar.vue';

// data
const products = ref([
  {
    "id": 101,
    "stock": 12,
    "name": "Amouage Reflection Man",
    "description": "A sophisticated woody floral fragrance with notes of neroli, jasmine, and sandalwood.",
    "image": "/products/amouage.jpg",
    "badge": "LUXURY",
    "price": 360,
    "discount": 5,
    "tags": ["Niche", "Floral", "Long-lasting"]
  },
  {
    "id": 102,
    "stock": 8,
    "name": "Dior Homme Intense",
    "description": "An elegant iris-based scent with a powdery finish, perfect for evening wear.",
    "image": "/products/dior.jpg",
    "badge": "BEST SELLER",
    "price": 115,
    "discount": 0,
    "tags": ["Iris", "Woody", "Classic"]
  },
  {
    "id": 103,
    "stock": 15,
    "name": "Dolce & Gabbana The One",
    "description": "A warm, spicy oriental fragrance featuring ginger, cardamom, and tobacco.",
    "image": "/products/dolce.jpg",
    "badge": "SIGNATURE",
    "price": 95,
    "discount": 15,
    "tags": ["Spicy", "Amber", "Date Night"]
  },
  {
    "id": 104,
    "stock": 4,
    "name": "Dior Fahrenheit",
    "description": "A bold, legendary fragrance known for its unique leather and violet leaf accord.",
    "image": "/products/fahrenhite.jpg",
    "badge": "VINTAGE",
    "price": 110,
    "discount": 0,
    "tags": ["Leather", "Bold", "Iconic"]
  },
  {
    "id": 105,
    "stock": 20,
    "name": "Rasasi Hawas for Him",
    "description": "A fresh, aquatic powerhouse with notes of apple, cinnamon, and bergamot.",
    "image": "/products/hawas.jpg",
    "badge": "TRENDING",
    "price": 55,
    "discount": 10,
    "tags": ["Fresh", "Summer", "Beast Mode"]
  },
  {
    "id": 106,
    "stock": 25,
    "name": "Lattafa Khamrah",
    "description": "A sweet, boozy masterpiece with cinnamon, dates, and vanilla notes.",
    "image": "/products/khamrah.jpg",
    "badge": "NEW",
    "price": 45,
    "discount": 0,
    "tags": ["Gourmand", "Sweet", "Winter"]
  },
  {
    "id": 107,
    "stock": 6,
    "name": "Lorance Wood",
    "description": "A deep, earthy composition focused on cedarwood and aromatic resins.",
    "image": "/products/lorance.jpg",
    "badge": "NEW",
    "price": 85,
    "discount": 20,
    "tags": ["Woody", "Earthy", "Masculine"]
  },
  {
    "id": 108,
    "stock": 30,
    "name": "Dior Sauvage",
    "description": "A crisp, raw fragrance featuring Calabrian bergamot and ambroxan.",
    "image": "/products/souvage.jpg",
    "badge": "POPULAR",
    "price": 120,
    "discount": 5,
    "tags": ["Fresh", "Spicy", "Versatile"]
  }
])


const totalStock = computed(() => {
  return products.value.reduce((total, curr) => total + curr.stock, 0)
})

const decreaseStock = (id) => {
  const product = products.value.find((p) => p.id === id);
  product.stock -= 1;
  console.log('decrease by one' + product.stock);
}

const brand = "Amir";

const navLinks = [
  { id: 1, label: "Home", href: "/", },
  { id: 2, label: "Product", href: "/product/101", },
  { id: 3, label: "About", href: "/about", },
]

const footerLinks = [
  { id: 1, label: "Privacy", href: "#" },
  { id: 2, label: "Terms", href: "#" },
  { id: 3, label: "Support", href: "#" },
];



</script>

<template>
  <NavBar :brand="brand" :links="navLinks" :total-stock="totalStock" />

  <main class="p-8">
    <RouterView @buy="decreaseStock" :products="products" />
  </main>

  <Footer :links="footerLinks" />
</template>

<style scoped></style>
