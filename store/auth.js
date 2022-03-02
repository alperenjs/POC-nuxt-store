export const state = () => ({
  token: null,
  authenticated: false
})

export const mutations = {
  setToken(state, token) {
    console.log("token bastım", token)
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
      console.log("giriş başarılı")
      const token = Math.random() * 10;
      commit('setToken', token);
      commit('setAuthenticated', true);
      localStorage.setItem("token", token);
    } else {
      console.log("giriş başarısız")
      // Handle error here
    }
  },

  isAuthorized(state) {
    console.log(localStorage)
    console.log("ali", state.token)
    let token;

    if (token) {
      console.log("varmış", token)
      return true
    } else {
      return false
    }
  },

  async user_logout({ commit }, user) {
    const res = await this.$repositories.auth.logout(user)
    // const { status, data } = res
    if (res) {
      console.log("çıkış başarılı")
      commit('setToken', null);
      commit('setAuthenticated', false);
    }
  }
}
