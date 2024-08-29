<template>
  <DefaultLayout :pageTitle="'Home'">
    <div class="relative flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 dark:from-gray-900 dark:to-black overflow-hidden">
      <!-- Arka Planda Hareketli Daireler -->
      <div class="absolute inset-0 flex justify-center items-center">
        <div class="relative w-full h-full">
          <div class="absolute rounded-full bg-gradient-to-r from-green-400 to-blue-500 opacity-30 blur-3xl h-96 w-96 -top-16 -left-16 animate-pulse"></div>
          <div class="absolute rounded-full bg-gradient-to-r from-pink-400 to-yellow-500 opacity-30 blur-3xl h-80 w-80 -bottom-16 -right-16 animate-pulse"></div>
        </div>
      </div>

      <!-- İçerik Bölgesi -->
      <div class="relative z-10 flex flex-col items-center space-y-6 text-center">
        <h1 class="text-6xl font-extrabold text-white dark:text-gray-100 tracking-tight">Welcome to JAT</h1>
        <p class="text-xl text-gray-100 dark:text-gray-300 max-w-xl">Efficiently manage your job applications and stay organized with our powerful tools.</p>

        <!-- Ana İşlevsel Butonlar -->
        <div class="flex flex-wrap justify-center space-x-4">
          <router-link
              to="/applications"
              class="inline-block bg-gradient-to-r from-green-400 to-blue-500 text-white px-6 py-3 rounded-full text-lg font-semibold shadow-lg hover:shadow-2xl hover:from-green-500 hover:to-blue-600 transition-all duration-300"
          >
            Job Applications
          </router-link>

          <router-link
              to="/cv-templates"
              class="inline-block bg-gradient-to-r from-pink-400 to-red-500 text-white px-6 py-3 rounded-full text-lg font-semibold shadow-lg hover:shadow-2xl hover:from-pink-500 hover:to-red-600 transition-all duration-300"
          >
            CV Templates
          </router-link>

          <router-link
              to="/motivation-letters"
              class="inline-block bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-6 py-3 rounded-full text-lg font-semibold shadow-lg hover:shadow-2xl hover:from-yellow-500 hover:to-orange-600 transition-all duration-300"
          >
            Motivation Letters
          </router-link>
        </div>

        <!-- Alt Butonlar -->
        <div class="flex flex-wrap justify-center space-x-4 mt-6">
          <router-link
              to="/profile"
              class="inline-block bg-gradient-to-r from-indigo-400 to-purple-500 text-white px-6 py-3 rounded-full text-lg font-semibold shadow-lg hover:shadow-2xl hover:from-indigo-500 hover:to-purple-600 transition-all duration-300"
          >
            Profile
          </router-link>

          <router-link
              to="/settings"
              class="inline-block bg-gradient-to-r from-teal-400 to-cyan-500 text-white px-6 py-3 rounded-full text-lg font-semibold shadow-lg hover:shadow-2xl hover:from-teal-500 hover:to-cyan-600 transition-all duration-300"
          >
            Settings
          </router-link>
        </div>
      </div>
    </div>
  </DefaultLayout>
</template>

<script setup lang="ts">
import DefaultLayout from "../layouts/DefaultLayout.vue";
</script>

<style scoped>
/* Stil ayarları burada yapılmıştır */
</style>
