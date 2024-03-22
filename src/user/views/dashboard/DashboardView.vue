<script setup lang="ts">
import DashboardContainer from "./components/DashboardContainer.vue";
import { useDashboardController } from "./dashboard.controller";

const { users, isLoading } = useDashboardController();

</script>
<template>
    <div v-if="isLoading">Loading...</div>
    <DashboardContainer v-else :users="users" />
</template>