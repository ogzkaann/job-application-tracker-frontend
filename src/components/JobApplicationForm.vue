<template>
  <form @submit.prevent="submitForm">
    <div class="mb-4">
      <label class="block text-gray-700">Company Name</label>
      <input v-model="form.companyName" class="mt-1 block w-full p-2 border" type="text" required />
    </div>

    <div class="mb-4">
      <label class="block text-gray-700">Position Name</label>
      <input v-model="form.positionName" class="mt-1 block w-full p-2 border" type="text" required />
    </div>

    <div class="mb-4">
      <label class="block text-gray-700">Country</label>
      <select v-model="form.country" @change="fetchCities" class="mt-1 block w-full p-2 border">
        <option v-for="country in countries" :key="country.id" :value="country">{{ country.name }}</option>
      </select>
    </div>

    <div class="mb-4">
      <label class="block text-gray-700">City</label>
      <select v-model="form.city" class="mt-1 block w-full p-2 border">
        <option v-for="city in cities" :key="city.id" :value="city">{{ city.name }}</option>
      </select>
    </div>

    <div class="mb-4">
      <label class="block text-gray-700">Work Type</label>
      <select v-model="form.workType" class="mt-1 block w-full p-2 border">
        <option v-for="type in workTypes" :key="type" :value="type">{{ type }}</option>
      </select>
    </div>

    <div class="mb-4">
      <label class="block text-gray-700">Salary Range (Optional)</label>
      <input v-model="form.salaryRange.minSalary" class="mt-1 block w-full p-2 border" type="number" placeholder="Min Salary" />
      <input v-model="form.salaryRange.maxSalary" class="mt-1 block w-full p-2 border" type="number" placeholder="Max Salary" />
      <select v-model="form.salaryRange.frequency" class="mt-1 block w-full p-2 border">
        <option value="Hourly">Hourly</option>
        <option value="Monthly">Monthly</option>
        <option value="Yearly">Yearly</option>
      </select>
    </div>

    <div class="mb-4">
      <label class="block text-gray-700">Skills</label>
      <input v-model="newSkill" @keyup.enter="addSkill" class="mt-1 block w-full p-2 border" type="text" placeholder="Add a skill and press Enter" />
      <div class="flex flex-wrap mt-2">
        <span v-for="(skill, index) in form.skills" :key="index" class="bg-blue-500 text-white px-2 py-1 rounded-full mr-2 mb-2">
          {{ skill }} <button @click="removeSkill(index)">x</button>
        </span>
      </div>
    </div>

    <div class="mb-4">
      <label class="block text-gray-700">Job Description</label>
      <textarea v-model="form.jobDescription" class="mt-1 block w-full p-2 border" rows="4"></textarea>
    </div>

    <div class="mb-4">
      <label class="block text-gray-700">Job Requirements</label>
      <textarea v-model="form.requirements" class="mt-1 block w-full p-2 border" rows="4"></textarea>
    </div>

    <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded">Submit</button>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const form = ref({
  companyName: '',
  positionName: '',
  country: {
    name: null
  },
  city: null,
  workType: '',
  salaryRange: {
    minSalary: null,
    maxSalary: null,
    frequency: '',
  },
  skills: [] as string[],
  jobDescription: '',
  requirements: '',
});

const countries = ref([{ id: 1, name: 'Germany' }, { id: 2, name: 'USA' }]); // Replace with real data
const cities = ref([]); // Fetch cities based on selected country
const workTypes = ref(['On-site', 'Remote', 'Hybrid']);

const newSkill = ref('');

function fetchCities() {
  // Simulate fetching cities based on selected country
  if (form.value.country && form.value.country.name === 'Germany') {
    cities.value = [{ id: 1, name: 'Berlin' }, { id: 2, name: 'Munich' }];
  } else {
    cities.value = [];
  }
}

function addSkill() {
  if (newSkill.value) {
    form.value.skills.push(newSkill.value);
    newSkill.value = '';
  }
}

function removeSkill(index: number) {
  form.value.skills.splice(index, 1);
}

function submitForm() {
  // Handle form submission
  console.log('Form Submitted:', form.value);
}
</script>

<style scoped>
/* Bileşene özel stiller */
</style>
