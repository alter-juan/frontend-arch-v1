<script setup lang="ts">
import UserTitle from "../../../components/UserTitle.vue";
import type { User } from "../../../models/entity/User.entity";

defineProps<{
    users: Readonly<User[]>;
}>();
</script>
<template>
    <UserTitle>Dashboard</UserTitle>
    <ul v-if="users.length">
        <li v-for="user in users" :key="user.id">
            {{ user.name }}
        </li>
    </ul>
    <p v-else>No users found</p>
</template>