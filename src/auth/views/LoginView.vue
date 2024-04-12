<script lang="ts" setup>
import { useLoginController } from "./login.controller";

import LoginForm from "./components/LoginForm.vue";

const { handleSubmit, handleLoginWithGoogle } = useLoginController();
</script>

<template>
  <section>
    <LoginForm
      @sign-in="handleSubmit"
      @sign-in-with-google="handleLoginWithGoogle"
    />
  </section>
</template>

<style scoped>
section {
  display: flex;
  justify-content: center;
}
</style>
