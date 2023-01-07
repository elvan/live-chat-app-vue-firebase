<template>
  <form @submit.prevent="handleRegister">
    <!-- Display Name -->
    <input
      v-model="displayName"
      placeholder="Display name"
      type="text"
      required
    />

    <!-- Email -->
    <input v-model="email" placeholder="Your email" type="email" required />

    <!-- Password -->
    <input
      v-model="password"
      placeholder="Create password"
      type="password"
      required
    />

    <!-- Error -->
    <div v-if="error" class="error">
      {{ error }}
    </div>

    <!-- Register button -->
    <button type="submit">Register</button>
  </form>
</template>

<script>
import useRegister from '@/composable/useRegister';
import { ref } from 'vue';

export default {
  setup() {
    const { register, error } = useRegister();

    // refs
    const displayName = ref('');
    const email = ref('');
    const password = ref('');

    const handleRegister = async () => {
      await register({
        displayName: displayName.value,
        email: email.value,
        password: password.value,
      });

      // reset form
      displayName.value = '';
      email.value = '';
      password.value = '';
    };

    return {
      displayName,
      email,
      password,
      handleRegister,
      error,
    };
  },
};
</script>
