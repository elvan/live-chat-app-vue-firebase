<template>
  <form @submit.prevent="handleRegister">
    <!-- Display Name -->
    <input
      v-model="displayName"
      type="text"
      placeholder="Display name"
      required
    />

    <!-- Email -->
    <input v-model="email" placeholder="Email" type="Your email" required />

    <!-- Password -->
    <input
      v-model="password"
      type="password"
      placeholder="Create password"
      required
    />

    <!-- Register button -->
    <button type="submit">Register</button>
  </form>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    // refs
    const displayName = ref('');
    const email = ref('');
    const password = ref('');

    const handleRegister = () => {
      console.log(displayName.value);
      console.log(email.value);
      console.log(password.value);
    };

    return {
      displayName,
      email,
      password,
      handleRegister,
    };
  },
};
</script>
