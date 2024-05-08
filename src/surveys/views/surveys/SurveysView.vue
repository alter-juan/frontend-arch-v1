<script setup lang="ts">
import { surveyController } from "./surveys.controller";

import StepsTextAndNumber from "../surveys/components/StepsTextAndNumber.vue";
import FormCognito from "./components/FormCognito.vue";

const KEY_FORM = import.meta.env.VITE_API_KEY_FORM as string;

const { onSubmit, page, steps, isLoading } = surveyController();
</script>

<template>
  <section class="flex flex-col justify-center items-center mb-6">
    <StepsTextAndNumber :steps="steps" />
    <p 
      v-if="isLoading" 
      class="text-green-300 mt-5"
    >
      🔔 Thank you for responding to the survey... we are saving the
      information. Wait a moment... 🕒
    </p>
    <FormCognito
      v-else
      :key-form="KEY_FORM"
      :form="page?.toString()"
      @after-submit="onSubmit"
    />
  </section>
</template>

<style scoped></style>
