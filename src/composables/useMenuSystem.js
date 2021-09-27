import { ref, reactive } from 'vue';

export function useMenuSystem() {

  /*
  let isMenuOpen = ref(status);
  let theItem = reactive(item);
  let theMenu = reactive(menu);
  */
  let isMenuOpen = ref(false);
  let theItem = reactive({});
  let theMenu = reactive({});

  const setMenuStatus = (status) => {
    isMenuOpen = status;
  }
  
  const openMenu = (item, menu) => {
    console.log('openMenu')
    theItem = item;
    theMenu = menu;
    let id = item.getAttribute('aria-controls');
    item.setAttribute('aria-expanded', 'true');
    document.getElementById(id).setAttribute('aria-hidden', 'false');
    // Set status here for Unfocus actions
    setMenuStatus(true);
  }
  
  const closeMenu = (item, closeAll = false) => {
    console.log('closeMenu')
    let id = item.getAttribute('aria-controls');
    item.setAttribute('aria-expanded', 'false');
    document.getElementById(id).setAttribute('aria-hidden', 'true');
    // Set status here for Unfocus actions
    setMenuStatus(false);
  }
  
  const addFocusListeners = (item) => {
    item.addEventListener('focus', focusHander );
  }
  
  const removeFocusListeners = (item) => {
    item.removeEventListener('focus', focusHander );
  }

  const focusHander = (event) => {
    let item = event.currentTarget
    //openMenu(item);
  }
  

  /// need to fix the below code
  const documentClickHandler = (event) => {
    //console.log('documentClickHandler FIRED')
    if(isMenuOpen && theItem){
      try{
        let isItemClicked = theItem.contains(event.target);
        let isMenuClicked = theMenu.contains(event.target);    

        if(!isItemClicked && !isMenuClicked){
          loopItems('closeAllMenus');
          setMenuStatus(false);
        }
      } catch (error){
        //console.log('Error', error)
      }
      
    }
  }

  
  const listenForKeys = (e) => {
    if(isMenuOpen && e.keyCode == 27) {
      loopItems('closeAllMenus')
      setMenuStatus(false);
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
    else if(action=='closeAllMenus') closeMenu(item, true);
    //else if(action=='addUnfocusListener') addUnfocusListener(item);
  }

  return {
    isMenuOpen,
    theItem,
    theMenu,
    openMenu,
    closeMenu,
    loopItems,
    listenForKeys,
    documentClickHandler
  }
}