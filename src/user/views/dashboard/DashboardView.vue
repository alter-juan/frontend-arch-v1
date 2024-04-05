<script setup lang="ts">
import { useDashboardController } from "./dashboard.controller";

import DashboardContainer from "./components/DashboardContainer.vue";

const { users, isLoading } = useDashboardController();

</script>
<template>
  <div v-if="isLoading">
    Loading...
  </div>
  <DashboardContainer
    v-else
    :users="users"
  />
</template>