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
              ERROR_FIELD=""
              HAS_HELP="true"
            >
              
              <template v-slot:labelDescribe>
                <span class="fsa-field__label-desc">Required</span>
              </template>
              <!-- Below 2 Slots should be used with above ARIA_DESCRIBEDBY -->
              <template v-slot:help>
                <span id="name__help" class="fsa-field__help">Use your full name, please.</span>
              </template>
              <template v-slot:message>
                <span id="name-id__error-message" class="fsa-field__message" role="alert">Hey, you forgot your own name, silly!</span>
              </template>

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
              ERROR_FIELD="fsa-field--error"
              HAS_HELP="true"
              HAS_MESSAGE="true"
            >
              
              <template v-slot:labelDescribe>
                <span class="fsa-field__label-desc">Required</span>
              </template>
              <!-- Below 2 Slots should be used with above ARIA_DESCRIBEDBY -->
              <template v-slot:help>
                <span id="email__help" class="fsa-field__help">Only valid emails should be used.</span>
              </template>
              <template v-slot:message>
                <span id="email__error-message" class="fsa-field__message" role="alert">Hey, you forgot your email address!</span>
              </template>

            </field>

            <p class="fsa-m-t--l">
              <button class="fsa-btn fsa-btn--secondary" type="submit">Add User</button>
            </p>

          </form>
        </div>
      </div>
    </main>

    <baseFooter></baseFooter>
  </div>
</template>

<script>
import { defineAsyncComponent  } from 'vue';

import baseHeader from '../partials/BaseHeader.vue';
import baseFooter from '../partials/BaseFooter.vue';

//import field from '../components/field/field.vue';

const field = defineAsyncComponent(() => import('../components/field/field.vue'));
 
export default {
  setup(props){
    
    const handleError = () =>{

    };
  },
  components: {
    baseHeader,
    baseFooter,
    field,
  }
}
</script>