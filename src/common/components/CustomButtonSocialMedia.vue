<script setup lang="ts">
  import { defineEmits, defineProps } from 'vue';

  defineProps<{ logoSrc: string; label: string }>();
  defineEmits(['onClick']);
</script>
<template>
  <button
    type="button"
    class="content-button"
    @click="$emit('onClick')"
  >
    <img
      :src="logoSrc"
      :alt="'Logo for ' + label"
      class="logo"
    >
    <span>{{ label }}</span>
  </button>
</template>

<style scoped>
  .content-button {
    display: flex;
    gap: 5px;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    border: 2px solid #82d39d;
    background: #82d39d;
  }

  .content-button:hover {
    cursor: pointer;
    background: #8bb79a;
  }

  .logo {
    width: 25px;
    height: 25px;
  }
</style>
