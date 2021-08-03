<template>
<div>
  <h1>{{ msg }}</h1>

  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">Vite Documentation</a> |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Documentation</a>
  </p>

  <p class="cdh">Testing Paragraph Text</p>

  <button class="fsa-btn fsa-btn--primary" @click="count++">count is: {{ count }}</button> <button class="fsa-btn fsa-btn--secondary" @click="count++">count is: {{ count }}</button>
  <p>Edit<code>components/HelloWorld.vue</code> to test hot module replacement.</p>

  <div>
    <button @click="countModals()" class="fsa-btn fsa-btn--tertiary" data-behavior="open-modal" aria-controls="MODAL-ID-123" aria-expanded="false" type="button">Eject</button>
  </div>

  <div class="fsa-spinbox">
  <div class="fsa-spinbox__number">
    <input class="fsa-input fsa-spinbox__input" id="lorem-ipsum-amount__hsus" name="lorem-ipsum-amount" type="number" step=".01" value="10">
  </div>
  <div class="fsa-spinbox__actions" aria-hidden="true">
    <button tabindex="-1" class="fsa-spinbox__btn fsa-spinbox__btn--increment" type="button" data-behavior="spinbox-spin" title="Increase"></button>
    <button tabindex="-1" class="fsa-spinbox__btn fsa-spinbox__btn--decrement" type="button" data-behavior="spinbox-spin" title="Decrease"></button>
  </div>
</div>

<div class="fsa-level">
  <span>
    <input @change="sliderChange()" class="fsa-slider fsa-slider--block" id="slider" name="lorem-range-4672" type="range" min="0" max="100" :value="slider" step="10">
  </span>
  <span><output aria-live="polite" id="lorem-range-ouput-6789" name="lorem-range-ouput-6789" for="lorem-range-4672">{{slider}}</output></span>
</div>

  <modal ID="MODAL-ID-123"/>

</div>
</template>

<script>
import { ref, reactive, computed } from 'vue';
import Modal from '../components/Modal.vue';

export default {
  props: {
    msg: String
  },
  components: {
    modal: Modal
  },
  setup(props, context){

    const count = ref({count: 0});
    const slider = ref({slider: 0});
    
    return {
      count,
      slider
    }
  },
  data(){
    return {
      
    }
  },
  computed(){
      
  },
  methods: {   
    countModals(evt){
      let t = document.querySelectorAll('[data-behavior~="open-modal"]');
      console.log(t)
    },
    sliderChange(evt){
      this.slider = evt.target.value
    }
  },
  mounted(){
    FSAModal.init();
  }
}

</script>

<style lang="scss">
$cdh-color: $color-fsa-yellow;

.cdh {
  color: $cdh-color;
}
</style>