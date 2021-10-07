<template>
  <div>
    <baseHeader></baseHeader>

    <main id="main-content" tabindex="-1">
      <div class="fsa-section">
        <div class="fsa-section__bd">
          <h1>Home Page</h1>

          <form @submit.prevent="handleSubmit">

            <field
              ID="name"
              EXTRA_CLASSES=""
              LABEL="Full Name"
              INPUT_VALUE=""
              INPUT_TYPE="text"
              REQUIRED="true"
              ARIA_REQUIRED="true"
              BEHAVIOR=""
              ARIA_DESCRIBEDBY="name__help"
              HELP_MESSAGE="Use your full name, please."
              ERROR_MESSAGE="Hey, you forgot your name, Buddy!"
              ref="nameField"
            >
            </field>

            <field
              ID="email"
              EXTRA_CLASSES=""
              LABEL="E-Mail"
              INPUT_VALUE=""
              INPUT_TYPE="text"
              REQUIRED="false"
              ARIA_REQUIRED="true"
              BEHAVIOR=""
              ARIA_DESCRIBEDBY="email__help"
              HELP_MESSAGE="Only valid emails should be used."
              ERROR_MESSAGE="'Hey, you forgot your email address!'"
              ref="emailField"
            >
            </field>

          </form>

          <p class="fsa-m-t--l">
            <button @click="setError('name')" class="fsa-btn fsa-btn--secondary">Toggle Name Error</button>
          </p>
          <p class="fsa-m-t--l">
            <button @click="setError('email')" class="fsa-btn fsa-btn--secondary">Toggle Email Error</button>
          </p>
        </div>
      </div>
    </main>

    <baseFooter></baseFooter>
  </div>
</template>

<script>
import { ref, defineAsyncComponent  } from 'vue';


import baseHeader from '@/partials/BaseHeader.vue';
import baseFooter from '@/partials/BaseFooter.vue';

const field = defineAsyncComponent(() => import('@/components/field/field.vue'));
 
export default {
  components: {
    baseHeader,
    baseFooter,
    field,
  },

  setup(props){
    const nameField = ref(null);
    const emailField = ref(null);

    let nameHasError = ref(false);
    let emailHasError = ref(false);

    const setError = (type) => {
      if(type=='name'){
        nameHasError.value = nameHasError.value ? false : true;
        nameField.value.setHasError(type, nameHasError.value);
      } 
      if(type=='email'){
        emailHasError.value = emailHasError.value ? false : true;
        emailField.value.setHasError(type, emailHasError.value);
      } 
    }

    return {
      nameField,
      emailField,
      //nameHasError,
      //emailHasError,
      setError
    }
  }

}
</script>