<script setup lang="ts">
import { useRouter } from "vue-router";
import UserTitle from "../../../components/UserTitle.vue";
import type { User } from "../../../models/entity/User.entity";

defineProps<{
    users: Readonly<User[]>;
}>();

const router = useRouter();
</script>
<template>
    <UserTitle>Dashboard</UserTitle>
    <ul v-if="users.length">
        <li v-for="user in users" :key="user.id">
            <button @click="router.push({ name: 'UserDetail', params: { id: user.id } })">
                {{ user.name }}
            </button>
        </li>
    </ul>
    <p v-else>No users found</p>
</template>
<style lang="css" scoped>
ul {
    list-style-type: none;
    padding: 0;
    display: grid;
    gap: 1rem;
}
</style>