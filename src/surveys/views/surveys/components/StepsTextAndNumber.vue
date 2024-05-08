<script setup lang="ts">
import { SurveyWithText } from "../../../models";

const props = defineProps<{
  steps: SurveyWithText[];
}>();

const getSurveyClass = (index: number, step: SurveyWithText) => {
  const lastIndex = props.steps.length - 1;
  const baseClass = `flex ${
    index !== lastIndex ? "md:w-full" : ""
  } items-center`;
  const activeClass = step.active ? "text-[#82d39d]" : "text-gray-200";
  const afterClass =
    index !== lastIndex
      ? `sm:after:content-[''] after:w-full after:h-1 after:border-b ${
          step.active ? "after:border-[#82d39d]" : "after:border-gray-200"
        } after:border-1 after:hidden sm:after:inline-block after:mx-4 xl:after:mx-8`
      : "";
  return `${baseClass} ${activeClass} ${afterClass}`;
};

const getSurveyNumberClass = (step: SurveyWithText) => {
  const activeClass = step.active
    ? "bg-[#82d39d] border-indigo-200 text-white"
    : "bg-gray-100 border-gray-200 text-gray-600";
  return `w-6 h-6 border ${activeClass} border rounded-full flex justify-center items-center mr-3 text-sm lg:w-10 lg:h-10`;
};
</script>

<template>
  <ol
    class="flex items-center justify-center w-full text-sm text-gray-500 font-medium sm:text-base mb-5 px-8 max-w-xl"
  >
    <li
      v-for="(step, index) in steps"
      :key="step.id"
      :class="getSurveyClass(index, step)"
    >
      <div
        class="flex items-center whitespace-nowrap after:content-['/'] sm:after:hidden after:mx-2"
      >
        <span :class="getSurveyNumberClass(step)">{{ index + 1 }}</span
        >{{ step.text }}
      </div>
    </li>
  </ol>
</template>

<style scoped></style>
