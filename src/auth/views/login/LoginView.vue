<script lang="ts" setup>
import LoginForm from "./components/LoginForm.vue";
import { useLoginController } from "./login.controller.ts";

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