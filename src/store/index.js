import { createStore } from 'vuex';

export default createStore({
    state: {
        isAuthenticated: false, // Kullanıcı giriş durumu
        user: null, // Giriş yapmış kullanıcı bilgileri
         defaultUser: {
          email: 'ogz@mail.com',
          password: '123', // Güvenlik amacıyla şifreleri şifrelemek gerekir
        },
    },
    mutations: {
        setAuth(state, status) {
            state.isAuthenticated = status;
        },
        setUser(state, user) {
            state.user = user;
        },
        logout(state) {
            state.isAuthenticated = false;
            state.user = null;
        },
    },
    actions: {
    login({ commit, state }, user) {
      if (
        user.email === state.defaultUser.email &&
        user.password === state.defaultUser.password
      ) {
        commit('setAuth', true);
        commit('setUser', user);
      } else {
        alert('Invalid credentials');
      }
    },
    logout({ commit }) {
      commit('logout');
    },
  },
    getters: {
        isAuthenticated: (state) => state.isAuthenticated,
        getUser: (state) => state.user,
    },
});
