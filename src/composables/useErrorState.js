import { ref } from 'vue';

export function useErrorState() {
  
  let hasError = ref(false)
  let errorMessage = ref('Form Field Error')

  const setHasError = (type, boo) => {
    console.log('setHasError',boo)
    hasError.value = boo
  }

  const setErrorMessage = (val) => {
    console.log(val)
    errorMessage.value = val
  }

  return {
    hasError,
    setHasError,
    errorMessage,
    setErrorMessage,
  }
}