<template>
  <div class="container mx-auto p-6">
    <div v-if="application" class="bg-white dark:bg-gray-800 shadow-xl rounded-2xl overflow-hidden p-8">
      <h1 class="text-4xl font-extrabold mb-6 text-gray-900 dark:text-white">{{ application.positionName }}</h1>

      <div class="mb-6">
        <p class="text-xl text-gray-800 dark:text-gray-300 mb-2"><strong>Company:</strong> {{ application.companyName }}</p>
        <p class="text-xl text-gray-800 dark:text-gray-300 mb-2"><strong>Location:</strong> {{ application.city.name }}, {{ application.country.name }}</p>
        <p class="text-xl text-gray-800 dark:text-gray-300 mb-4"><strong>Work Type:</strong> <span class="font-semibold">{{ application.workType }}</span></p>

        <div v-if="application.salaryRange" class="mb-6">
          <p class="text-xl text-gray-800 dark:text-gray-300"><strong>Salary:</strong>
            <span class="text-green-600 dark:text-green-400 font-semibold">
              {{ application.salaryRange.minSalary }} - {{ application.salaryRange.maxSalary }}
            </span>
            <span class="text-gray-600 dark:text-gray-400">{{ application.salaryRange.frequency }}</span>
          </p>
        </div>
      </div>

      <div v-if="application.skills.length" class="mb-6">
        <p class="text-xl text-gray-800 dark:text-gray-300 mb-2"><strong>Skills:</strong></p>
        <ul class="list-disc list-inside ml-4 text-gray-700 dark:text-gray-400 space-y-1">
          <li v-for="(skill, index) in application.skills" :key="index">{{ skill }}</li>
        </ul>
      </div>

      <div class="mb-6">
        <p class="text-xl text-gray-800 dark:text-gray-300 mb-2"><strong>Description:</strong></p>
        <p class="text-gray-700 dark:text-gray-400">{{ application.jobDescription }}</p>
      </div>

      <div class="mb-6">
        <p class="text-xl text-gray-800 dark:text-gray-300 mb-2"><strong>Requirements:</strong></p>
        <p class="text-gray-700 dark:text-gray-400">{{ application.requirements }}</p>
      </div>

      <router-link
          to="/applications"
          class="inline-block bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-6 py-3 rounded-full text-lg font-semibold shadow-lg hover:shadow-2xl hover:from-blue-600 hover:to-indigo-600 transition-all duration-300"
      >
        Back to Applications
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { jobApplicationService } from '../services/jobApplicationService';

const route = useRoute();
const application = ref(null);

onMounted(async () => {
  const applicationId = route.params.id;
  application.value = await jobApplicationService.fetchJobApplicationById(applicationId);
});
</script>

<style scoped>
/* Bileşene özel ek stiller gerekiyorsa buraya ekleyebilirsiniz */
</style>
