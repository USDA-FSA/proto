
import { useStore } from "vuex";
import { v4 as uuidv4 } from 'uuid';

export function useGrowlControls() {

  const store = useStore();

  const showGrowl = (_id) => {
    document.getElementById(_id).setAttribute('aria-hidden', false);
  }

  const hideGrowl = (_id, _callback=null) => {
    document.getElementById(_id).setAttribute('aria-hidden', true);
    document.getElementById(_id).classList.add('fsa-growl--dismissing');
    if(_callback) _callback();
  }

  const showDefaultGrowl = (_obj) => {
    let alertObj = {
      id: String( uuidv4() ),
      extraClasses: 'x',
      title: _obj.title,
      useIcon: _obj.useIcon || 'false',
      iconPath: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z',
      iconSizeClass: 'fsa-icon--size-1',
      useMessage: _obj.useMessage || 'true',
      message: _obj.msg
    }
    store.dispatch('alerts/addAlert', alertObj);
  }

  const showSuccessGrowl = (_obj) => {
    let alertObj = {
      id: String( uuidv4() ),
      extraClasses: 'fsa-growl--success',
      title: _obj.title,
      useIcon: _obj.useIcon || 'false',
      iconPath: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z',
      iconSizeClass: 'fsa-icon--size-1',
      useMessage: _obj.useMessage || 'true',
      message: _obj.msg
    }
    store.dispatch('alerts/addAlert', alertObj);
  }

  const showErrorGrowl = (_obj) => {
    let alertObj = {
      id: String( uuidv4() ),
      extraClasses: 'fsa-growl--error',
      title: _obj.title,
      useIcon: _obj.useIcon || 'false',
      iconPath: 'M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z',
      iconSizeClass: 'fsa-icon--size-1',
      useMessage: _obj.useMessage || 'true',
      message: _obj.msg
    }
    store.dispatch('alerts/addAlert', alertObj);
  }

  const showWarningGrowl = (_obj) => {
    let alertObj = {
      id: String( uuidv4() ),
      extraClasses: 'fsa-growl--warning',
      title: _obj.title,
      useIcon: _obj.useIcon || 'false',
      iconPath: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z',
      iconSizeClass: 'fsa-icon--size-1',
      useMessage: _obj.useMessage || 'true',
      message: _obj.msg
    }
    store.dispatch('alerts/addAlert', alertObj);
  }

  const showErrorModalGrowl = (_obj) => {
    let alertObj = {
      id: String( uuidv4() ),
      useCentered: 'true',
      extraClasses: 'fsa-growl--error',
      title: _obj.title,
      useIcon: _obj.useIcon || 'false',
      iconPath: 'M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z',
      iconSizeClass: 'fsa-icon--size-1',
      useMessage: _obj.useMessage || 'true',
      message: _obj.msg
    }
    store.dispatch('alerts/addAlert', alertObj);
    showWhiteout();
  }

  const showWhiteout = () => {
    document.getElementById('fsa-whiteout').setAttribute('aria-hidden', 'false');
  }

  const hideWhiteout = () => {
    document.getElementById('fsa-whiteout').setAttribute('aria-hidden', 'true');
  }


  return {
    showGrowl,
    hideGrowl,
    showWhiteout,
    hideWhiteout,
    showDefaultGrowl,
    showSuccessGrowl,
    showErrorGrowl,
    showWarningGrowl,
    showErrorModalGrowl
  }
}