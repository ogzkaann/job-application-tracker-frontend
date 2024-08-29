<template>
  <DefaultLayout :pageTitle="'CV Templates'">
    <div class="container mx-auto p-4">
      <h2 class="text-4xl font-extrabold mb-10 text-center text-gray-900 dark:text-white">CV Templates</h2>

      <div v-if="templates.length === 0" class="text-gray-500 dark:text-gray-400 text-center">No CV templates found.</div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
            v-for="template in templates"
            :key="template.id"
            @click="goToTemplateDetail(template.id, template.title)"
            class="bg-white dark:bg-gray-800 shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300 cursor-pointer"
        >
          <div class="p-6">
            <div class="flex items-center justify-center mb-4">
              <h3 class="text-xl font-bold text-gray-800 dark:text-white">
                {{ template.title }}
              </h3>
            </div>
            <div class="text-center">
              <p class="text-sm text-gray-600 dark:text-gray-400">{{ template.description }}</p>
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
import { useRouter } from 'vue-router';

const templates = ref([
  { id: 1, title: 'Professional CV', description: 'Ideal for corporate positions.' },
  { id: 2, title: 'Creative CV', description: 'Perfect for creative roles like design.' },
  { id: 3, title: 'Minimalist CV', description: 'Clean and simple for a modern look.' },
  { id: 4, title: 'Technical CV', description: 'Great for tech-related jobs.' },
  { id: 5, title: 'Executive CV', description: 'Designed for leadership roles.' },
  { id: 6, title: 'Student CV', description: 'Tailored for recent graduates.' }
]);

const router = useRouter();

const goToTemplateDetail = (id: number, templateTitle: string) => {
  router.push({ name: 'cvTemplateDetail', params: { id: id, pageTitle: templateTitle } });
};
</script>

<style scoped>
/* Bileşene özel ek stiller gerekiyorsa buraya ekleyebilirsiniz */
</style>
