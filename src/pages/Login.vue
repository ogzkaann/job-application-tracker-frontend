<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
    <div class="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg max-w-md w-full">
      <h1 class="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-6">Login</h1>
      <form @submit.prevent="handleLogin">
        <div class="mb-4">
          <label class="block text-gray-700 dark:text-gray-300">Email</label>
          <input v-model="email" type="email"
                 class="mt-1 p-2 w-full border rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-gray-200"
                 required>
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 dark:text-gray-300">Password</label>
          <input v-model="password" type="password"
                 class="mt-1 p-2 w-full border rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-gray-200"
                 required>
        </div>
        <button type="submit"
                class="w-full bg-blue-500 dark:bg-blue-700 text-white py-2 rounded-lg font-semibold hover:bg-blue-600 dark:hover:bg-blue-800 transition-colors duration-300">
          Login
        </button>
      </form>
      <p class="text-center text-gray-600 dark:text-gray-400 mt-4">
        Don't have an account?
        <router-link to="/signup" class="text-blue-500 dark:text-blue-300 hover:underline">Sign Up</router-link>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref} from 'vue';
import {useStore} from 'vuex';
import {useRouter} from 'vue-router';

const email = ref('');
const password = ref('');
const store = useStore();
const router = useRouter();

const handleLogin = () => {
  store?.dispatch('login', { email: email.value, password: password.value });
  router.push({ name: 'Home' });
  if (store?.getters?.isAuthenticated) {
    router.push({ name: 'Home' });
  }
};
</script>
