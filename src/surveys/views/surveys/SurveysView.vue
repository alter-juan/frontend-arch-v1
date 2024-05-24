<script setup lang="ts">
import { surveyController } from "./surveys.controller";

import StepsTextAndNumber from "../surveys/components/StepsTextAndNumber.vue";
import FormCognito from "./components/FormCognito.vue";

const { onSubmit, steps, isLoading, surveySelected, isPageOutOfRange } = surveyController();
</script>

<template>
  <section 
    v-if="steps" 
    class="section-form"
  >
    <StepsTextAndNumber 
      v-if="steps?.surveys" 
      :steps="steps?.surveys" 
    />
    <p 
      v-if="isLoading && !isPageOutOfRange" 
      class="text-success"
    >
      🔔 Thank you for responding to the survey... we are saving the
      information. Wait a moment... 🕒
    </p>
    <div v-if="isPageOutOfRange">
      <p class="text-center">
        Congratulations you have submitted all the required forms.
      </p>
    </div>
    <FormCognito
      v-else
      :key-form="steps.surveyGroupId"
      :form="surveySelected?.toString()!"
      @after-submit="onSubmit"
    />
  </section>
  <p 
    v-if="!steps && isLoading" 
    class="text-success"
  >
    Loading...
  </p>
</template>

<style scoped>
.section-form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 3.5rem;
}

.text-success {
  color: #6ee7b7;
  margin-top: 2rem;
}

@media (min-width: 768px) {
  .section-form {
    margin-top: 2rem;
  }
}
</style>
