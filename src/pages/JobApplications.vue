<template>
  <DefaultLayout :pageTitle="'Job Applications'">
    <JobApplicationList />
  </DefaultLayout>
</template>

<script setup lang="ts">
import JobApplicationList from '../components/JobApplicationList.vue';
import DefaultLayout from "../layouts/DefaultLayout.vue";
</script>

<style scoped>
/* Sayfa özel stiller */
</style>
