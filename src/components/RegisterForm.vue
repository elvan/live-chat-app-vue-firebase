<template>
  <form @submit.prevent="handleRegister">
    <!-- Display Name -->
    <input
      v-model="displayNameRef"
      placeholder="Display name"
      type="text"
      required
    />

    <!-- Email -->
    <input v-model="emailRef" placeholder="Your email" type="email" required />

    <!-- Password -->
    <input
      v-model="passwordRef"
      placeholder="Create password"
      type="password"
      required
    />

    <!-- Register button -->
    <button type="submit">Register</button>
  </form>
</template>

<script>
import useRegister from '@/composable/useRegister';
import { ref } from 'vue';

export default {
  setup() {
    const { register, errorRef } = useRegister();

    // refs
    const displayNameRef = ref('');
    const emailRef = ref('');
    const passwordRef = ref('');

    const handleRegister = async () => {
      const response = await register({
        displayNameRef,
        emailRef,
        passwordRef,
      });

      if (response) {
        console.log('success');
      } else {
        console.log('error');
      }

      if (errorRef.value) {
        console.log(errorRef.value);
      }
    };

    return {
      displayNameRef,
      emailRef,
      passwordRef,
      handleRegister,
    };
  },
};
</script>
