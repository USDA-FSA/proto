<template>

  <div :class="'fsa-field '+ (hasError ? fieldErrorClass : '') +' '+ EXTRA_CLASSES">
    <label
      class="fsa-field__label"
      :for="GROUP_ID"
      :id="GROUP_ID +'_label'">
        {{ LABEL }} <span v-if="REQUIRED=='true'" class="fsa-field__label-desc">Required</span>
    </label>

    <ul class="fsa-form-list" :aria-labelledby="GROUP_ID">

      <li v-for="data in radioGroupData">
        <span>
          <input class="fsa-radio"
            type="radio"
            :id="data.id"
            :name="data.name"
            :checked="data.checked"
          >
          <label :for="data.id">{{ data.label }}</label>
        </span>
      </li>

    </ul>
    <span v-if="HELP_MESSAGE" :id="GROUP_ID + '__help'" class="fsa-field__help">{{ HELP_MESSAGE }}</span>
    <span v-if="hasError" :id="GROUP_ID + '__error-message'" class="fsa-field__message" role="alert">{{ ERROR_MESSAGE }}</span>
  </div>
</template>
<script>
import { ref, reactive } from 'vue';
import { useErrorState } from '@/composables/useErrorState';

export default {
  props: {
    GROUP_ID: String,
    LABEL: String,
    DATA: Array,
    REQUIRED: String,
    BEHAVIOR: String,
    EXTRA_CLASSES: String,
    FIELD_ERROR_CLASS: String,
    ARIA_REQUIRED: String,
    HELP_MESSAGE: String,
    ERROR_MESSAGE: String,
    HAS_ERROR: Boolean
  },

  setup(props){
    const radioGroupData = props.DATA ? props.DATA : reactive(null);
    const fieldErrorClass = props.FIELD_ERROR_CLASS ? props.FIELD_ERROR_CLASS : ref('fsa-field--error');

    const {
      hasError,
      setHasError,
      errorMessage,
      setErrorMessage,
    } = useErrorState();

    const onMounted = () => {
      //if(props.DATA) radioGroupData = props.DATA;
      if(props.HAS_ERROR == 'true') setHasError(true); 
    }

    return {
      hasError,
      setHasError,
      fieldErrorClass,
      radioGroupData
    }
  }

}
</script>