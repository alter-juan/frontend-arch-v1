<script setup lang="ts">
  import { onMounted } from 'vue';

  import { useSocialMediaController } from './login/socialMedia.controller';

  const { handleAuthenticationSocialMedia } = useSocialMediaController();

  onMounted(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const authenticationCode = urlParams.get('code');

    // TODO: implement a strategy to capture the origin of the authentication method (google-oauth2, apple ... etc.)
    if (authenticationCode) {
      handleAuthenticationSocialMedia(authenticationCode, 'google-oauth2');
    }
  });
</script>
<template>
  <h3>....... Loading</h3>
</template>
