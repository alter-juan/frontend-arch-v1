<script setup lang="ts">
import { computed, reactive } from 'vue';

import { isEmailValid, isPasswordValid, isUsernameValid, LoginPayload } from "../../../models/entity";
import { useSocialMediaController } from '../socialMedia.controller';
import LogoGoogle from './../../../../assets/google-logo.svg';

import CustomButtonSocialMedia from '../../../../common/components/CustomButtonSocialMedia.vue';


const emit = defineEmits<{ signIn: [payload: LoginPayload] }>()

const { handleAuthenticateWithGoogle } = useSocialMediaController();


const formData: LoginPayload = reactive<LoginPayload>({
  email: '',
  password: '',
  username: ''
});

const hasError = computed(() => !isEmailValid(formData.email) || !isPasswordValid(formData.password) || !isUsernameValid(formData.username));
</script>

<template>
  <form @submit.prevent="emit('signIn', formData)">
    <h2>Sign In</h2>
    <div class="form-container">
      <div class="form-control">
        <label for="email">Email</label>
        <input
          id="email"
          v-model="formData.email"
          type="email"
          placeholder="example@dummy.com"
        >
      </div>

      <div class="form-control">
        <label for="username">Username</label>
        <input
          id="username"
          v-model="formData.username"
          type="text"
          placeholder="max perez"
        >
      </div>

      <div class="form-control">
        <label for="password">Password</label>
        <input
          id="password"
          v-model="formData.password"
          type="password"
          placeholder="************"
        >
      </div>
    </div>
    <button
      type="submit"
      :disabled="hasError"
    >
      Sign In
    </button>

    <section class="content-social-media-buttons">
      <CustomButtonSocialMedia
        label="Continue with Google"
        :logo-src="LogoGoogle"
        @on-click="handleAuthenticateWithGoogle"
      />
    </section>
  </form>
</template>
<style scoped>
form {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 3rem;
    border-radius: 0.5em;
    width: 300px;
    justify-content: space-between;
    background-color: #f2fdf7;
    filter: drop-shadow(0 0 9em #67d6a4aa);
  }

  .form-container {
    display: flex;
    flex-direction: column;
    gap: 1em;

    label {
      text-align: left;
    }

    input {
      padding: 0.8em;
      border: 1px solid #82d39d;
      border-radius: 0.5em;
    }

    input:focus {
      outline: none;
      border-color: #42b883;
    }
  }

  .form-control {
    display: flex;
    flex-direction: column;
    gap: 0.5em;
  }

  h2 {
    margin: 0;
    color: #82d39d;
    font-size: 1.5rem;
  }

  button {
    padding: 0.5em;
    border: none;
    border-radius: 0.5em;
    background-color: #82d39d;
    color: white;
    cursor: pointer;

    &:disabled {
      background-color: #c7c7c7;
      cursor: not-allowed;
    }
  }

  .content-social-media-buttons {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    filter: drop-shadow(0 0 9em #42b883aa);
  }
</style>