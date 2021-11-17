<template>
  <div>

    <baseHeader></baseHeader>

    <main id="main-content" tabindex="-1">
      <div class="fsa-section">
        <div class="fsa-section__bd">
          <h1>What is your name?</h1>

          <div class="fsa-m-t--sm">
              <p class="fsa-m-t--7">Cool Name...  <span class="fsa-text-size--5">{{ passedName }}</span></p>
          </div>

          

        </div>
      </div>

    </main>

    <baseFooter></baseFooter>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

import baseHeader from '@/partials/BaseHeader.vue';
import baseFooter from '@/partials/BaseFooter.vue';

export default {
  components: {
    baseHeader,
    baseFooter,
  },

  setup(props){
    
    const route = useRoute();

    const passedName = route.params.id;

    return {
      passedName
    }
  }
}
</script>