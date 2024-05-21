<script setup lang="ts">

import type { User } from "../../../models/entity/user.entity";

import UserTitle from "../../../components/UserTitle.vue";

defineProps<{ user: Readonly<Partial<User>> }>();

</script>
<template>
  <UserTitle>Dashboard</UserTitle>
  <h3>Email: {{ user?.email }}</h3>

  <h3 v-if="user?.name">
    Full Name: {{ user?.name }}
  </h3>

  <p v-else>
    No user found
  </p>
</template>
<style lang="css" scoped>
ul {
    list-style-type: none;
    padding: 0;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 1rem;

    li {
        button {
            width: 100%;
        }
    }
}
</style>