<script lang="ts" setup>
import { useLoginController } from "./login.controller.ts";

import LoginForm from "./components/LoginForm.vue";

const { handleSubmit } = useLoginController();
</script>
<template>
  <section>
    <LoginForm @sign-in="handleSubmit" />
  </section>
</template>
<style scoped>
section {
    display: flex;
    justify-content: center;
}
</style>