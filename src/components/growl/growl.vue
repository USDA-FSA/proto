<template>
  <div :class="'fsa-growl-container'+ (USE_CENTERED=='true' ? ' fsa-growl-container--centered' : '')">
    <div 
      :class="'fsa-growl ' + EXTRA_CLASSES + '' + (USE_CENTERED=='true' ? ' fsa-growl--centered' : '')"
      :id="ID" aria-hidden="true" tabindex="0"
      :role="USE_CENTERED=='true' ? ' alertdialog': 'dialog'">
      <div class="fsa-growl__hd">
        <button @click="hideThisGrowl(ID)" class="fsa-growl__close" data-behavior="growl-dismiss" type="button" title="Close Notification" aria-label="Close Notification"></button>
          
        <h2 class="fsa-growl__title">
          <svg
            v-if="USE_ICON=='true'"
            :class="'fsa-icon '+ ICON_SIZE_CLASS!='' ? ICON_SIZE_CLASS : 'fsa-icon--size-2'"
            aria-hidden="true"
            focusable="false"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24">
            <path :d="ICON_PATH"></path>
          </svg>
          {{ TITLE }}
        </h2>

      </div>
      <div class="fsa-growl__bd">
        <p v-if="USE_MESSAGE">{{ MESSAGE }}</p>
        <button v-if="false" @click="hideThisGrowl(ID)" data-behavior="growl-dismiss" class="fsa-btn fsa-btn--small fsa-btn--secondary" type="button">Close</button>
        <slot name="growlContainer"></slot>
      </div>
    </div>
  </div>
</template>
<script>
import { ref, computed } from 'vue';
import { useGrowlControls } from '@/composables/useGrowlControls';

export default {
  props: {
    ID: String,
    EXTRA_CLASSES: String,
    TITLE: String,
    USE_ICON: String,
    ICON_PATH: String,
    ICON_SIZE_CLASS: String,
    USE_MESSAGE: String,
    MESSAGE: String,
    USE_CENTERED: String
  },
  setup(props, {emit}) {
    
    const hideThisGrowl = (_id) => {

      emit('emitGrowlClose',{id:_id, isModal: props.USE_CENTERED });
    }

    return {
      hideThisGrowl
    }

  }
}
</script>
