<script setup>
import trackMount from '@/utils/mountTracker';
import { ref } from 'vue'

trackMount("Carouserl Banners")


const current = ref(0)

const banners = [
  "/banners/banner_1.webp",
  "/banners/banner_2.webp",
  "/banners/banner_3.jpg"
]

const next = () => {
  current.value = (current.value + 1) % banners.length
}

const prev = () => {
  current.value = (current.value - 1 + banners.length) % banners.length
}
</script>

<template>
  <div class="relative w-full h-100 md:h-130 rounded-box overflow-hidden mb-8">

    <img
      :src="banners[current]"
      class="w-full h-full object-cover"
    />

    <div class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 justify-between">
      <button @click="prev" class="btn btn-circle">❮</button>
      <button @click="next" class="btn btn-circle">❯</button>
    </div>

  </div>
</template>