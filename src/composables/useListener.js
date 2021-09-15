import { ref, onMounted, watch } from 'vue';

export default function useMenuListeners(item) {

  const openMenu = (item) => {
    let id = item.getAttribute('aria-controls');
    item.setAttribute('aria-expanded', 'true');
    document.getElementById(id).setAttribute('aria-hidden', 'false');
    // Set status here for Unfocus actions
    //setMenuStatus(true);
  }
  
  const closeMenu = (item) => {
    let id = item.getAttribute('aria-controls');
    item.setAttribute('aria-expanded', 'false');
    document.getElementById(id).setAttribute('aria-hidden', 'true');
    // Set status here for Unfocus actions
    //setMenuStatus(false);
  }
  
  const addFocusListeners = (item) => {
    item.addEventListener('focus', closeMenu(item) );
  }
  
  const removeFocusListeners = (item) => {
    item.removeEventListener('focus', closeMenu(item) );
  }
  
  const addUnfocusListener = (item) => {
    /// ref below CAUSES SCRIPT TO NOT RUN
    //item.cb = loopItems;
    document.addEventListener('click', function(event){
      var isClickInside = item.contains(event.target);
      console.log('isClickInside',event.target)
      if(!isClickInside){
        loopItems('closeAllMenus');
        //item.cb('closeAllMenus');
      }
    });
  }

  const listenForClickAway= () => {
    // commented out because causing issues
    loopItems('addUnfocusListener');
  }
  
  const listenForKeys = (e) => {
    console.log('e',e)
    if(e.keyCode == 27) {
      loopItems('closeAllMenus')
    }
  }
  
  //
  // Utility Method to cycle thru ALL of top level nav items
  //
  const loopItems = ( action, passedCB=null ) => {
    let menuItems = document.getElementsByClassName('fsa-nav-global__link--has-sub-menu');
    for (let i = 0; i < menuItems.length; i++) {
      let item = menuItems[i];
      item.cb = loopItems;
      addActionListener(action, item);
    }
  }
  
  const addActionListener = ( action, item) => {
    if(action=='addFocusListeners') addFocusListeners(item);
    else if(action=='removeFocusListeners') removeFocusListeners(item);
    else if(action=='closeAllMenus') closeMenu(item);
    else if(action=='addUnfocusListener') addUnfocusListener(item);
  }

  onMounted( listenForClickAway, listenForKeys )

  watch(item)

  return {
    openMenu,
    closeMenu,
    loopItems,
    listenForKeys
  }
}