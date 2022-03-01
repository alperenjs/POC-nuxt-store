export const state = () => ({
    token: null
})

export const mutations = {
    setToken(state, token) {
        console.log("token bastım", token)
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
        if (res) {
            console.log("giriş başarılı")
            const token = Math.random() * 10;
            commit('setToken', token);
        } else {
            console.log("giriş başarısız")
            // Handle error here
        }
    },
    async user_logout({ commit }, user) {
        const res = await this.$repositories.auth.logout(user)
        // const { status, data } = res
        if (res) {
            console.log("çıkış başarılı")
            commit('setToken', null);
        }
    }
}
