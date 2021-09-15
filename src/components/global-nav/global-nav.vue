<template>
  <nav>
    <div class="fsa-nav-global">
      <div class="fsa-nav-global__bd">
        <ul class="fsa-nav-global__list" aria-label="Primary Navigation" id="primary-navigation">
          <li v-for="item in navList" :class="'fsa-nav-global__list-item '+ item.columnClass">
            <div v-if="item.hasChild=='true' && item.columnClass==EXTRA_CLASSES && item.hasHeaders=='true'">
              <button :id="item.uid+'-BTN'" v-on:click="toggleMenu" class="fsa-nav-global__link fsa-nav-global__link--has-sub-menu" type="button" aria-expanded="false" :aria-controls="item.uid">
                <span class="fsa-nav-global__text" :id="item.uid+'-SUB'">{{item.label}}</span>
              </button>
              <div class="fsa-nav-global__sub-menu" :id="item.uid" aria-hidden="true">
                <div class="fsa-nav-global__sub-menu-bd" :aria-labelledby="item.uid+'-SUB'">
                  <div v-for="child in item.children" class="fsa-nav-global__sub-menu-group">
                    <h3 class="fsa-nav-global__sub-menu-title" :id="child.uid">{{ child.header }}</h3>
                    <ul class="fsa-nav-global__sub-menu-list" :aria-labelledby="child.uid">
                      <li v-for="gp in child.group" class="fsa-nav-global__sub-menu-item">
                        <router-link :to='gp.path' class="fsa-nav-global__sub-menu-link">{{ gp.label }}</router-link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div v-else-if="item.hasChild=='true' && item.columnClass==EXTRA_CLASSES && item.hasHeaders=='false'">
              <button :id="item.uid+'-BTN'" v-on:click="toggleMenu" class="fsa-nav-global__link fsa-nav-global__link--has-sub-menu" type="button" aria-expanded="false" :aria-controls="item.uid">
                <span class="fsa-nav-global__text" :id="item.uid+'-SUB'">{{item.label}}</span>
              </button>
              <div class="fsa-nav-global__sub-menu" :id="item.uid" aria-hidden="true">
                <div class="fsa-nav-global__sub-menu-bd">
                  <ul class="fsa-nav-global__sub-menu-list" :aria-labelledby="item.uid+'-SUB'">
                    <li v-for="child in item.children" class="fsa-nav-global__sub-menu-item">
                      <router-link :to='child.path' class="fsa-nav-global__sub-menu-link">{{child.label}}</router-link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div v-else-if="item.hasChild=='true' && item.multiColumn=='false'">
              <button :id="item.uid+'-BTN'" v-on:click="toggleMenu" class="fsa-nav-global__link fsa-nav-global__link--has-sub-menu" type="button" aria-expanded="false" :aria-controls="item.uid">
                <span class="fsa-nav-global__text" :id="item.uid+'-SUB'">{{item.label}}</span>
              </button>
              <div class="fsa-nav-global__sub-menu" :id="item.uid" aria-hidden="true">
                <div class="fsa-nav-global__sub-menu-bd">
                  <ul class="fsa-nav-global__sub-menu-list" :aria-labelledby="item.uid+'-SUB'">
                    <li v-for="child in item.children" class="fsa-nav-global__sub-menu-item">
                      <router-link :to='child.path' class="fsa-nav-global__sub-menu-link">{{child.label}}</router-link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div v-else="item.hasChild=='false'">
              <router-link :to='item.path' class="fsa-nav-global__link">
                <span class="fsa-nav-global__text">{{item.label}}</span>
              </router-link> 
            </div>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue';
import useListener from '../../composables/useListener';

export default {

  props: {
    NAV_DATA: Array,
    EXTRA_CLASSES: String,
  },
  
  setup(props){
    const menuOpen = ref(false);
    let item = ref({});
    const { 
      openMenu,
      closeMenu,
      loopItems,
      listenForKeys
    } = useListener(item)
    
    //const toggleMenu = useToggleMenu;

    const navList = computed(()=>{
      return props.NAV_DATA;
    });

    onMounted(()=>{
      window.addEventListener('keydown', listenForKeys);
      loopItems('addFocusListeners');
      
    });
    
    onBeforeUnmount(()=>{
      window.removeEventListener('keydown', listenForKeys);
      loopItems('removeFocusListeners');
    });
    
    return {
      item,
      menuOpen,
      listenForKeys,
      loopItems,
      navList
    }
  },

  methods: {
    toggleMenu: (e) => {
      item = e.currentTarget;
      let expanded = item.getAttribute('aria-expanded');
      loopItems('closeAllMenus');
      if (expanded=="true"){
        closeMenu( item );
        menuOpen = false;
      } else {
        openMenu( item );
        menuOpen = true;
      }
    }
  }
  
}

</script>