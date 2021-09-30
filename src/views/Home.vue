<template>
  <div>
    <baseHeader></baseHeader>

    <main id="main-content" tabindex="-1">
      <div class="fsa-section">
        <div class="fsa-section__bd">
          <h1>Home Page</h1>

          <card NAME="Animal Things" :CARDDATA="cardData"></card>

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
              REQUIRED="true"
              ARIA_REQUIRED="true"
              BEHAVIOR=""
              ARIA_DESCRIBEDBY="email__help"
              ERROR_FIELD=""
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

            <button class="fsa-btn fsa-btn--secondary" type="submit">Add User</button> 

          </form>
        </div>
      </div>
    </main>

    <baseFooter></baseFooter>
  </div>
</template>

<script>
import { inject, onMounted, ref, computed } from 'vue';

import baseHeader from '../partials/BaseHeader.vue';
import baseFooter from '../partials/BaseFooter.vue';
const card = () => import('../components/card/card');

export default {
  setup(props){
    let cardData = [
      { label:'bird', desc: 'things that fly' },
      { label: 'cat', desc: 'things that jump' },
      { label: 'dog', desc: 'things that lick' },
      { label: 'fish', desc: 'things that swim' }
    ];
    return{
      cardData
    }
  },
  components: {
    baseHeader,
    baseFooter,
    card
  }
}
</script>