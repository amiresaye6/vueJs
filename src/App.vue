<script setup>
import { computed, ref } from 'vue';
import Footer from './components/Footer.vue';
import NavBar from './components/NavBar.vue';

// const decreaseStock = (id) => {
//   const product = products.value.find((p) => p.id === id);
//   product.stock -= 1;
//   console.log('decrease by one' + product.stock);
// }

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
  <NavBar :brand="brand" :links="navLinks" />

  <main class="p-8">
    <RouterView />
  </main>

  <Footer :links="footerLinks" />
</template>

<style scoped></style>
