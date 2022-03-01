export const state = () => ({
    token: null
})

export const mutations = {
    setToken(state, token) {
        state.token = token;
    },
    clearToken(state) {
        state.token = null;
    }
}

export const actions = {
    async user_login({ commit }, user) {
        const res = await this.$repositories.auth.login(user)
        // const { status, data } = res
        if (res.status === 200 && res.data) {
            //   const { data } = data
            commit('setToken', res.data)
        } else {
            // Handle error here
        }
    }
}
