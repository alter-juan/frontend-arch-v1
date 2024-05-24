<script setup lang="ts">
import { ISurvey } from "@/surveys/models/entity";

const props = defineProps<{
  steps: ISurvey[];
}>();

const getSurveyClass = (index: number, step: ISurvey) => {
  const lastIndex = props.steps.length - 1;
  const classes = ["flex", "items-center"];

  if (index !== lastIndex) {
    classes.push("md-full");
    classes.push("before-base", "after-base");
    if (step.isCompleted) {
      classes.push("text-active");
      classes.push("before-active", "after-active");
    } else {
      classes.push("text-inactive");

      classes.push("before-inactive", "after-inactive");
    }
  }
  return classes.join(" ");
};

const getSurveyNumberClass = (step: ISurvey) => {
  const classes = ["common-classes"];
  if (step.isCompleted) {
    classes.push("number-active");
  } else {
    classes.push("number-inactive");
  }
  return classes.join(" ");
};
</script>

<template>
  <ol class="survey-list">
    <li
      v-for="(step, index) in steps"
      :key="step.id"
      :class="getSurveyClass(index, step)"
    >
      <div class="step-container">
        <span 
          :class="getSurveyNumberClass(step)"
        >
          {{ index + 1 }}
        </span>{{ step.name }}
      </div>
    </li>
  </ol>
</template>

<style scoped>
.survey-list {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  text-align: center;
  font-size: 0.875rem;
  color: #6b7280;
  font-weight: 500;
  margin-bottom: 1.25rem;
  padding-left: 2rem;
  padding-right: 2rem;
  max-width: 40rem;
}

.flex {
  display: flex;
}

.items-center {
  align-items: center;
}

.md-full {
  width: 100%;
}

.text-active {
  color: #82d39d;
}

.text-inactive {
  color: #e5e7eb;
}

.before-base::after {
  content: "";
  display: none;
}

@media (min-width: 640px) {
  .before-base::after {
    display: inline-block;
    width: 1rem;
    height: 1px;
    background-color: inherit;
  }
}

.before-active::after {
  background-color: #82d39d;
}

.before-inactive::after {
  background-color: #e5e7eb;
}

.after-base::after {
  content: "";
  width: 100%;
  height: 1px;
  border-bottom-width: 1px;
  display: none;
}

@media (min-width: 640px) {
  .after-base::after {
    display: inline-block;
    margin-left: 1rem;
    margin-right: 1rem;
  }
}

@media (min-width: 1280px) {
  .after-base::after {
    margin-left: 2rem;
    margin-right: 2rem;
  }
}

.after-active::after {
  border-bottom-color: #82d39d;
}

.after-inactive::after {
  border-bottom-color: #e5e7eb;
}

.step-container {
  display: flex;
  align-items: center;
  white-space: nowrap;
}

.step-container::after {
  content: "/";
  display: inline-block;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
}

@media (min-width: 640px) {
  .step-container::after {
    display: none;
  }
}

.common-classes {
  width: 1.5rem;
  height: 1.5rem;
  border-width: 1px;
  border-radius: 9999px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 0.75rem;
  font-size: 0.875rem;
}

@media (min-width: 1024px) {
  .common-classes {
    width: 2.5rem;
    height: 2.5rem;
  }
}

.number-active {
  background-color: #82d39d;
  border-color: #c7d2fe;
  color: white;
}

.number-inactive {
  background-color: #f3f4f6;
  border-color: #e5e7eb;
  color: #4b5563;
}
</style>
