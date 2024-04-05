<script setup lang="ts">
import { User } from '../../../models/entity';

defineProps<{
    user?: Readonly<User>;
}>();
</script>
<template>
  <div
    v-if="!user"
    role="alert"
  >
    User not found
  </div>
  <pre v-else>{{ user }}</pre>
</template>