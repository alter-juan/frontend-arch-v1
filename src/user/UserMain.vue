<script setup lang="ts">
import { provide } from 'vue';
import { UserFetchService } from './services/UserFetch.query';
import { UserAuthorizer } from './services/User.authorizer';
const role = ['admin'];
const userAuthorizer = new UserAuthorizer(role);
const queryService = new UserFetchService(userAuthorizer);

provide('services', { queryService });
</script>
<template>
    <router-view />
</template>