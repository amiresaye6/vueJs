<script setup>
import Footer from './components/Footer.vue';
import NavBar from './components/NavBar.vue';
import { Toaster } from 'vue-sonner'
import 'vue-sonner/style.css'

const brand = "Amir";

const navLinks = [
  { id: 1, label: "Home", href: "/", },
  { id: 2, label: "Perfumes", href: "/product/101", },
  { id: 3, label: "About", href: "/about", },
  { id: 4, label: "Cart", href: "/cart", },
]

const footerLinks = [
  { id: 1, label: "Privacy", href: "#" },
  { id: 2, label: "Terms", href: "#" },
  { id: 3, label: "Support", href: "#" },
];



</script>

<template>
  <Toaster richColors  />
  <NavBar :brand="brand" :links="navLinks" />

  <main class="p-8">
    <RouterView />
  </main>

  <Footer :links="footerLinks" />
</template>

<style scoped></style>
