<script setup lang="ts">
import { onMounted, ref, watch } from "vue";

const props = defineProps<{
  keyForm: string;
  form: string;
}>();

const cognito = ref<HTMLDivElement | null>(null);

const emits = defineEmits<{
  (event: "afterSubmit", e: any): void;
}>();

const loadScript = () => {
  if (!cognito.value) return;
  cognito.value.innerHTML = "";

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
};

onMounted(() => {
  loadScript();
});

watch(
  () => [props.form, props.keyForm],
  () => loadScript()
);
</script>

<template>
  <div
    id="cognito"
    ref="cognito"
    data-testid="cognito"
    class="cognito-form"
  />
</template>

<style scoped>
.cognito-form {
  max-width: 850px;
  margin: 0 auto;
  padding: 1rem;
  border-radius: 0.5rem;
  background-color: #fff;
}
</style>
