export const state = () => ({
    image: null,
})

export const mutations = {
    setImage(state, image) {
        state.image = image;
    },
}

export const actions = {
    async get_random({ commit }) {
        const res = await this.$repositories.images.getRandom()
        // const { status, data } = res
        if (res) {
            commit('setImage', res.data[0].url);
            return res.data[0].url
        } else {
            // Handle error here
        }
    },
}
