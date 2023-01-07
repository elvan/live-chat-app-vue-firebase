<template>
  <div class="welcome container">
    <p>Welcome</p>

    <div v-if="showLogin">
      <h2>Login</h2>
      <LoginForm />
      <p>No account yet? <span @click="showLogin = false">Register</span></p>
    </div>

    <div v-else>
      <h2>Register</h2>
      <RegisterForm />
      <p>
        Already have an account? <span @click="showLogin = true">Login</span>
      </p>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import LoginForm from '../components/LoginForm.vue';
import RegisterForm from '../components/RegisterForm.vue';

export default {
  components: {
    LoginForm,
    RegisterForm,
  },

  setup() {
    const showLogin = ref(true);

    return {
      showLogin,
    };
  },
};
</script>

<style>
.welcome {
  text-align: center;
  padding: 20px 0;
}

/* form styles */
.welcome form {
  width: 300px;
  margin: 20px auto;
}

.welcome label {
  display: block;
  margin: 20px 0 10px;
}

.welcome input {
  width: 100%;
  padding: 10px;
  border-radius: 20px;
  border: 1px solid #eee;
  outline: none;
  color: #999;
  margin: 10px auto;
}

.welcome span {
  font-weight: bold;
  text-decoration: underline;
  cursor: pointer;
}

.welcome button {
  margin: 20px auto;
  cursor: pointer;
}
</style>
