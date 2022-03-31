
import { createStore } from 'vuex';

import { navigation } from './navigation.module.js';
import { alerts } from './alerts.module.js';
import { users } from './users.module.js';
import { web } from './web.module.js';

export const store = createStore({
  modules: {
    navigation: navigation,
    alerts: alerts,
    users: users,
    web: web
  }
});