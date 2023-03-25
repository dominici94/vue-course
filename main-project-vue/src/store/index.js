import { createStore } from 'vuex';

import coachesModule from './modules/coaches/index';
// import requestsModule from './modules/requests/index';

const store = createStore({
  modules: {
    coaches: coachesModule,
  },
});

export default store;
