<template>
  <form @submit.prevent="handleLogin">
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
    <button type="submit">Login</button>
  </form>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    // refs
    const email = ref('');
    const password = ref('');

    const handleLogin = () => {
      console.log(email.value);
      console.log(password.value);
    };

    return {
      email,
      password,
      handleLogin,
    };
  },
};
</script>
