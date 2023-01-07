import { projectAuth } from '@/firebase/config';
import { ref } from 'vue';

const errorRef = ref(null);

const register = async ({ displayNameRef, emailRef, passwordRef }) => {
  errorRef.value = null;

  try {
    // register user
    const response = await projectAuth.createUserWithEmailAndPassword(
      emailRef.value,
      passwordRef.value
    );

    if (!response.user) {
      throw new Error('Could not complete registration');
    }

    // update user profile
    await response.user.updateProfile({ displayName: displayNameRef.value });

    errorRef.value = null;

    emailRef.value = null;
    passwordRef.value = null;
    displayNameRef.value = null;

    return response;
  } catch (err) {
    errorRef.value = err.message;
  }
};

const useRegister = () => {
  return {
    register,
    errorRef,
  };
};

export default useRegister;
