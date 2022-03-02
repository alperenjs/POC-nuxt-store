import toastr from 'toastr'

export const state = () => ({
  token: null,
  authenticated: false
})

export const mutations = {
  setToken(state, token) {
    state.token = token;
  },
  clearToken(state) {
    state.token = null;
  },
  setAuthenticated(state, authenticated) {
    state.authenticated = authenticated
  }
}

export const actions = {
  async user_login({ commit }, user) {
    const res = await this.$repositories.auth.login(user)
    // const { status, data } = res
    if (res) {
      const token = Math.random() * 10;
      commit('setToken', token);
      commit('setAuthenticated', true);
      localStorage.setItem("token", token);
    } else {
      this.$toast.error('Giriş Başarısız - Kullanıcı Adı: test')// Handle error here
    }
  },

  async user_logout({ commit }, user) {
    const res = await this.$repositories.auth.logout(user)
    // const { status, data } = res
    if (res) {
      localStorage.removeItem("token")
      commit('setToken', null);
      commit('setAuthenticated', false);
    }
  }
}
