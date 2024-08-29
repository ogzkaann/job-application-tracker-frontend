<template>
  <DefaultLayout :pageTitle="'Profile'">
    <div class="min-h-screen bg-gray-100 py-10">
    <div class="container mx-auto bg-white rounded-lg shadow-md overflow-hidden max-w-5xl">
      <div class="flex p-6">
        <!-- Sol Kısım: Profil Bilgileri -->
        <div class="w-1/3 text-center">
          <img
            src="https://via.placeholder.com/150"
            alt="Profile Picture"
            class="rounded-full mx-auto mb-4"
          />
          <h2 class="text-2xl font-semibold text-gray-800">Jeremy Rose</h2>
          <p class="text-sm text-gray-500">Product Designer</p>
          <div class="mt-4">
            <span class="text-2xl font-bold text-blue-500">8.6</span>
            <span class="text-sm text-gray-500">/ 10</span>
            <div class="flex justify-center mt-2">
              <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 .587l3.668 7.449 8.207 1.191-5.937 5.797 1.4 8.167L12 18.902l-7.338 3.85 1.4-8.167L.125 9.227l8.207-1.191L12 .587z"/>
              </svg>
              <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 .587l3.668 7.449 8.207 1.191-5.937 5.797 1.4 8.167L12 18.902l-7.338 3.85 1.4-8.167L.125 9.227l8.207-1.191L12 .587z"/>
              </svg>
              <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 .587l3.668 7.449 8.207 1.191-5.937 5.797 1.4 8.167L12 18.902l-7.338 3.85 1.4-8.167L.125 9.227l8.207-1.191L12 .587z"/>
              </svg>
              <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 .587l3.668 7.449 8.207 1.191-5.937 5.797 1.4 8.167L12 18.902l-7.338 3.85 1.4-8.167L.125 9.227l8.207-1.191L12 .587z"/>
              </svg>
              <svg class="w-5 h-5 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 .587l3.668 7.449 8.207 1.191-5.937 5.797 1.4 8.167L12 18.902l-7.338 3.85 1.4-8.167L.125 9.227l8.207-1.191L12 .587z"/>
              </svg>
            </div>
          </div>
          <div class="mt-6">
            <button class="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-600 transition-colors duration-300">
              Send Message
            </button>
            <button class="ml-2 bg-gray-300 text-gray-800 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-400 transition-colors duration-300">
              Report User
            </button>
          </div>
        </div>

        <!-- Sağ Kısım: İletişim Bilgileri -->
        <div class="w-2/3 pl-8">
          <div class="flex items-center justify-between border-b border-gray-200 pb-4 mb-4">
            <h3 class="text-xl font-semibold text-gray-800">Contact Information</h3>
            <div class="flex space-x-4">
              <a href="#" class="text-blue-500 hover:text-blue-600">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M21.75 3h-19.5C1.675 3 1 3.675 1 4.5v15c0 .825.675 1.5 1.5 1.5h10.25v-6.25h-2v-2.5h2V10c0-2.625 1.5-4.75 3.75-4.75 1.075 0 2 .075 2.25.1v2.6h-1.575c-1.275 0-1.675.825-1.675 1.65v2.15h2.975l-.475 2.5h-2.5V21h4.775c.825 0 1.5-.675 1.5-1.5v-15c0-.825-.675-1.5-1.5-1.5z"/>
                </svg>
              </a>
              <a href="#" class="text-blue-500 hover:text-blue-600">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M21.75 3h-19.5C1.675 3 1 3.675 1 4.5v15c0 .825.675 1.5 1.5 1.5h10.25v-6.25h-2v-2.5h2V10c0-2.625 1.5-4.75 3.75-4.75 1.075 0 2 .075 2.25.1v2.6h-1.575c-1.275 0-1.675.825-1.675 1.65v2.15h2.975l-.475 2.5h-2.5V21h4.775c.825 0 1.5-.675 1.5-1.5v-15c0-.825-.675-1.5-1.5-1.5z"/>
                </svg>
              </a>
            </div>
          </div>

          <div class="space-y-4">
            <div>
              <h4 class="text-gray-600 font-medium">Phone:</h4>
              <p class="text-gray-800">+1 123 456 7890</p>
            </div>
            <div>
              <h4 class="text-gray-600 font-medium">Address:</h4>
              <p class="text-gray-800">123 6th St. Melbourne, FL 32904</p>
            </div>
            <div>
              <h4 class="text-gray-600 font-medium">Email:</h4>
              <p class="text-gray-800">johndoe@example.com</p>
            </div>
            <div>
              <h4 class="text-gray-600 font-medium">Website:</h4>
              <a href="#" class="text-blue-500 hover:underline">www.jeremyrose.com</a>
            </div>
            <div>
              <h4 class="text-gray-600 font-medium">Birthday:</h4>
              <p class="text-gray-800">June 5, 1992</p>
            </div>
            <div>
              <h4 class="text-gray-600 font-medium">Gender:</h4>
              <p class="text-gray-800">Male</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </DefaultLayout>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import DefaultLayout from "../layouts/DefaultLayout.vue";

// Edit profile state
const editProfile = ref(false);

// Form data for editing profile
const formData = ref({
  name: 'John Doe',
  email: 'johndoe@example.com',
  password: '',
});

// Function to handle profile update
const updateProfile = () => {
  console.log('Profile updated', formData.value);
  // Reset password field after updating
  formData.value.password = '';
  editProfile.value = false;
};
</script>

<style scoped>
/* Profil sayfasına özel stiller */
</style>
