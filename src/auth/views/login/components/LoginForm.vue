<script setup lang="ts">
import { computed, reactive } from 'vue'
import { LoginPayload, isEmailValid, isPasswordValid, isUsernameValid } from "../../../models/entity";

const emit = defineEmits<{ signIn: [payload: LoginPayload] }>()

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
        <input id="email" type="email" placeholder="example@dummy.com" v-model="formData.email" />
      </div>

      <div class="form-control">
        <label for="username">Username</label>
        <input id="username" type="text" placeholder="max perez" v-model="formData.username" />
      </div>

      <div class="form-control">
        <label for="password">Password</label>
        <input id="password"type="password" placeholder="************" v-model="formData.password" />
      </div>
    </div>
    <button type="submit" :disabled="hasError">Sign In</button>
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
}
</style>