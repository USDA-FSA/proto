
import { createStore } from 'vuex';

import { navigation } from './navigation.module.js';
import { users } from './users.module.js';
import { web } from './web.module.js';

export const store = createStore({
  modules: {
    navigation: navigation,
    users: users,
    web: web
  }
});