<script setup lang="ts">
import { toRef } from 'vue';
import { useUserDetailController } from './userDetail.controller';
import UserDetailSkeleton from './components/UserDetailSkeleton.vue';
import UserDetailContainer from './components/UserDetailContainer.vue';

const props = defineProps<{
    id: string;
}>();

const { isLoading, user } = useUserDetailController(toRef(props, 'id'))
</script>
<template>
    <UserDetailSkeleton v-if="isLoading" />
    <UserDetailContainer v-else :user="user" />
</template>./userDetail.controller