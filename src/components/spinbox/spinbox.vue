<template>
  <div class="fsa-spinbox fsa-field__item">
    <div class="fsa-spinbox__number">

      <span v-if="USE_PREFIX=='true'" class="fsa-affix fsa-affix--fill">
        <label :for="ID" class="fsa-affix__prefix" aria-hidden="true" :title="LABEL_TITLE">
          <svg v-if="USE_ICON=='true'" :class="'fsa-icon '+ ICON_SIZE_CLASS" aria-hidden="true" focusable="false" role="img" fill="#494440" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path :d="ICON_PATH"></path>
          </svg>
          <span v-if="PREFIX">{{ PREFIX }}</span>
        </label>
        <input @blur="handleBlur" @keydown="handleKeydown" class="fsa-input fsa-spinbox__input fsa-affix__item" type="number" :value="INPUT_VALUE" :step="STEP" :id="ID" :aria-describedby="ARIA_DESCRIBEDBY" :name="ID">
      </span>

      <span v-if="USE_SUFFIX=='true'" class="fsa-affix fsa-affix--fill">
        <input class="fsa-input fsa-spinbox__input fsa-affix__item" type="number" :value="INPUT_VALUE" :step="STEP" :id="ID" :aria-describedby="ARIA_DESCRIBEDBY" :name="ID">
        <label :for="ID" class="fsa-affix__suffix" aria-hidden="true" title="LABEL_TITLE">
          <svg v-if="USE_ICON=='true'" :class="'fsa-icon '+ ICON_SIZE_CLASS" aria-hidden="true" focusable="false" role="img" fill="#494440" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path :d="ICON_PATH"></path>
          </svg>
          <span v-if="SUFFIX">{{ SUFFIX }}</span>
        </label>
      </span>

    </div>
    <div class="fsa-spinbox__actions" aria-hidden="true">
      <button @click="spin('up')" tabindex="-1" class="fsa-spinbox__btn fsa-spinbox__btn--increment" type="button" data-behavior="spinbox-spin" title="Increase"></button>
      <button @click="spin('down')" tabindex="-1" class="fsa-spinbox__btn fsa-spinbox__btn--decrement" type="button" data-behavior="spinbox-spin" title="Decrease"></button>
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue';
import { useSpinboxControls } from '@/composables/useSpinboxControls';
export default {
  props: {
    ID: String,
    INPUT_VALUE: String,
    LABEL_TITLE: String,
    STEP: String,
    USE_PREFIX: String,
    PREFIX: String,
    USE_SUFFIX: String,
    SUFFIX: String,
    USE_ICON: String,
    ICON_PATH: String,
    ICON_SIZE_CLASS: String,
    ARIA_DESCRIBEDBY: String
  },
  setup(props, {emit}) {
    const prevValue = ref(null);
    const { stepUp, stepDown } = useSpinboxControls( props.ID, props.STEP);
    
    const callParent = (_dir) => {
      emit('emitSpin', {
        id: props.ID,
        dir: _dir,
        val: parseInt( document.getElementById(props.ID).value )
      });
    };

    const spin = (_dir) => {
      if(_dir == 'up') stepUp();
      if(_dir == 'down') stepDown();
      callParent(_dir);
      prevValue.value = parseInt( document.getElementById(props.ID).value );
    };

    const handleKeydown = (_e) => {
      if(_e.keyCode === 38 && _e.key == 'ArrowUp'){
        _e.preventDefault();
        stepUp();
        callParent('up');
      }
      if(_e.keyCode === 40 && _e.key == 'ArrowDown'){
        _e.preventDefault();
        stepDown();
        callParent('down');
      }
    };

    const handleBlur = () => {
      let val = parseInt( document.getElementById(props.ID).value );
      if( prevValue.value > val) callParent('up');
      else callParent('down');
      prevValue.value = val;
    }
    
    return {
      spin,
      handleKeydown,
      handleBlur
    }
    
  }
}
</script>