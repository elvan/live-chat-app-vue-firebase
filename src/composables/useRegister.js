import { projectAuth } from '@/firebase/config';
import { ref } from 'vue';

const error = ref(null);

const register = async ({ displayName, email, password }) => {
  error.value = null;

  try {
    // register user
    const response = await projectAuth.createUserWithEmailAndPassword(
      email,
      password
    );

    if (!response.user) {
      throw new Error('Could not complete registration');
    }

    // update user profile
    await response.user.updateProfile({ displayName });

    // reset error
    error.value = null;

    console.log('User registered');
  } catch (err) {
    console.log(err.message);
    error.value = err.message;
  }
};

const useRegister = () => {
  return {
    register,
    error,
  };
};

export default useRegister;
