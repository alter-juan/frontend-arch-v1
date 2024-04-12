<script setup lang="ts">
import { AuthRoutes } from "@/auth/auth.routes";
import { useAuthStore } from "@/auth/store/auth.store";

const authStore = useAuthStore();
</script>

<template>
  <header>
    <h1>Vue template</h1>
    <router-link
      v-if="!authStore.isAuthenticated"
      :to="{ name: AuthRoutes.LOGIN }"
    >
      Sign In
    </router-link>
    <button
      v-else
      @click="authStore.logout"
    >
      Sign out
    </button>
  </header>
</template>

<style scoped>
header {
  background-color: #242424;
  padding: 1em 1.5em;
  margin: 0 2rem;
  position: sticky;
  top: 0;
  z-index: 2;
  border: #82d39d;
  border-bottom: solid #82d39d 2px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    margin: 0;
    color: #82d39d;
    font-size: 1.5rem;
  }

  a {
    color: #82d39d;
    text-decoration: none;
    margin-left: 1em;
  }

  a:hover {
    text-decoration: underline;
  }
}
</style>
