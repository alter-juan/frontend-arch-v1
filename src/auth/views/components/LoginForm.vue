<script setup lang="ts">
import { computed, reactive } from 'vue'

import { isEmailValid, isPasswordValid, LoginPayload } from '@/auth/models/entity';

import GoogleIcon from '@/common/components/icons/GoogleIcon.vue';

const emit = defineEmits<{ signIn: [payload: LoginPayload], signInWithGoogle: [] }>()

const formData: LoginPayload = reactive<LoginPayload>({
  email: '',
  password: '',
});

const hasError = computed(() => !isEmailValid(formData.email) || !isPasswordValid(formData.password));
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
      data-testid="login-submit"
    >
      Sign In
    </button>
    <div>
      <button
        type="button"
        class="btn-google-sign-in"
        @click="emit('signInWithGoogle')"
      >
        <google-icon />
        <span>Sign in with Google</span>
      </button>
    </div>
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
  background-color: #242424;
  filter: drop-shadow(0 0 9em #42b883aa);
}

.form-container {
  display: flex;
  flex-direction: column;
  gap: 1em;

  label{
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
  gap: 0.5em
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

  &.btn-google-sign-in {
    width: 100%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5em;
    span {
      font-weight: 500;
      color: #6B6E70;
    }
  }
}
</style>
../../models/entity
