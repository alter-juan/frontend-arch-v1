<script setup lang="ts">
import { onMounted, ref } from "vue";

const props = defineProps<{
  keyForm: string;
  form: string;
}>();

const cognito = ref<HTMLDivElement | null>(null);

const emits = defineEmits<{
  (event: "afterSubmit", e: any): void;
}>();

onMounted(() => {
  const script = document.createElement("script");
  script.src = "https://www.cognitoforms.com/f/seamless.js";
  script.dataset.key = props.keyForm;
  script.dataset.form = props.form;

  script.onload = () => {
    const prefillScript = document.createElement("script");

    cognito.value?.appendChild(prefillScript);

    // @ts-ignore
    Cognito.on("afterSubmit", function (e) {
      emits("afterSubmit", e);
    });
  };

  cognito.value?.appendChild(script);
});
</script>

<template>
  <div
    id="cognito"
    ref="cognito"
    data-testid="cognito"
    className="w-2/3 w-min-[850px] mx-auto rounded-lg p-6 bg-white"
  />
</template>

<style scoped></style>
