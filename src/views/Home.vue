<template>
  <div>
    <baseHeader></baseHeader>

    <main id="main-content" tabindex="-1">
      <div class="fsa-section">
        <div class="fsa-section__bd">
          <h1>Home Page</h1>

          <div class="fsa-grid">
            <div class="fsa-grid fsa-grid__1/2">

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
            </div>
            <div class="fsa-grid fsa-grid__1/2">
              <p class="fsa-m-t--l">
                <button @click="setError('name')" class="fsa-btn fsa-btn--secondary">Toggle Name Error</button>
              </p>
            </div>
            <div class="fsa-grid fsa-grid__1/2">
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
            </div>
            <div class="fsa-grid fsa-grid__1/2">
            <p class="fsa-m-t--l">
                <button @click="setError('email')" class="fsa-btn fsa-btn--secondary">Toggle Email Error</button>
              </p>
              
            </div>
            <div class="fsa-grid fsa-grid__1/2">
              <radio-group
                GROUP_ID="pies"
                LABEL="Pick a Pie"
                :DATA="pieData"
                REQUIRED=""
                BEHAVIOR=""
                EXTRA_CLASSES=""
                FIELD_ERROR_CLASS=""
                ARIA_REQUIRED="false"
                HELP_MESSAGE="Select your favorite."
                ERROR_MESSAGE="Why don't you like my pies?"
                ref="pieField"
              >
              </radio-group>
            </div>
            <div class="fsa-grid fsa-grid__1/2">
              <p class="fsa-m-t--l">
                <button @click="setError('pies')" class="fsa-btn fsa-btn--secondary">Toggle Pie Error</button>
              </p>
            </div>



          </div>
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
const radioGroup = defineAsyncComponent(() => import('@/components/radio-group/radio-group.vue'));
 
export default {
  components: {
    baseHeader,
    baseFooter,
    field,
    radioGroup
  },

  setup(props){
    const nameField = ref(null);
    const emailField = ref(null);
    const pieField = ref(null);

    const pieData = [
      { id: "pie1", label: "Apple Pie", name: "piegroup" },
      { id: "pie2", label: "Pumpkin Pie", name: "piegroup" },
      { id: "pie3", label: "Keylime Pie", name: "piegroup" },
      { id: "pie4", label: "French Silk Pie", name: "piegroup" },
    ];

    let nameHasError = ref(false);
    let emailHasError = ref(false);
    let piesHasError = ref(false);

    const setError = (type) => {
      if(type=='name'){
        nameHasError.value = nameHasError.value ? false : true;
        nameField.value.setHasError(type, nameHasError.value);
      } 
      if(type=='email'){
        emailHasError.value = emailHasError.value ? false : true;
        emailField.value.setHasError(type, emailHasError.value);
      }
      if(type=='pies'){
        piesHasError.value = piesHasError.value ? false : true;
        pieField.value.setHasError(type, piesHasError.value);
      } 
    }

    return {
      nameField,
      emailField,
      pieField,
      setError,
      pieData
    }
  }

}
</script>