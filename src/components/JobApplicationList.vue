<template>
  <div class="container mx-auto p-4">
    <h2 class="text-4xl font-extrabold mb-10 text-center text-gray-900 dark:text-white">Job Applications</h2>

    <div v-if="applications.length === 0" class="text-gray-500 dark:text-gray-400 text-center">No job applications found.</div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      <div
          v-for="application in applications"
          :key="application.id"
          class="bg-white dark:bg-gray-800 shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300"
      >
        <div class="p-6">
          <div class="flex items-center justify-between mb-4">
            <h3 class="text-xl font-bold text-gray-800 dark:text-white">
              {{ application.positionName }}
            </h3>
            <span
                :class="{
                'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300': application.workType === 'Remote',
                'bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300': application.workType === 'Hybrid',
                'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300': application.workType === 'On-site',
              }"
                class="inline-block text-xs font-semibold px-2.5 py-0.5 rounded"
            >
              {{ application.workType }}
            </span>
          </div>
          <p class="text-sm text-gray-600 dark:text-gray-400">{{ application.companyName }}</p>
          <p class="text-sm text-gray-600 dark:text-gray-400 mb-4">{{ application.city.name }}, {{ application.country.name }}</p>
          <router-link
              :to="{ name: 'jobApplicationDetail', params: { id: application.id } }"
              class="inline-block w-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-4 py-2 rounded-md text-sm font-semibold text-center hover:from-blue-600 hover:to-indigo-600 transition-colors duration-300"
          >
            View Details
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { jobApplicationService } from '../services/jobApplicationService.ts';

const applications = ref([]);

onMounted(async () => {
  applications.value = await jobApplicationService.fetchJobApplications();
});
</script>

<style scoped>
/* Bileşene özel ek stiller gerekiyorsa buraya ekleyebilirsiniz */
</style>
