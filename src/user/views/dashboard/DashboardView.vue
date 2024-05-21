<script setup lang="ts">
import { useDashboardController } from "./dashboard.controller";

import DashboardContainer from "./components/DashboardContainer.vue";

const { user, isLoading } = useDashboardController();

</script>
<template>
  <div v-if="isLoading">
    Loading...
  </div>
  <DashboardContainer
    v-else-if="user"
    :user="user"
  />
</template>