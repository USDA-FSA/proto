import { ref, reactive } from 'vue';

export function useErrorHandling() {

  const onFocus = (item) => {
    theItem = item;
    let id = item.getAttribute('aria-controls');
    //item.setAttribute('aria-expanded', 'true');
    //document.getElementById(id).setAttribute('aria-hidden', 'false');
    
  }

  const setClasses = (item) => {
    
  }

  return {
    onFocus,
    setClasses
  }
}