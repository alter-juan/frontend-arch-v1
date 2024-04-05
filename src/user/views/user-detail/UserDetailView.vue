<script setup lang="ts">
import { toRef } from 'vue';

import { useUserDetailController } from './userDetail.controller';

import UserDetailContainer from './components/UserDetailContainer.vue';
import UserDetailSkeleton from './components/UserDetailSkeleton.vue';

const props = defineProps<{
    id: string;
}>();

const { isLoading, user } = useUserDetailController(toRef(props, 'id'))
</script>
<template>
  <UserDetailSkeleton v-if="isLoading" />
  <UserDetailContainer
    v-else
    :user="user"
  />
</template>./userDetail.controller