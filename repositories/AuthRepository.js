const resource = '/auth'
export default ($axios) => ({
  login() {
      console.log("auth login repostitry")
    return $axios.get(`${resource}`)
  },

  logout(id) {
    return $axios.get(`${resource}/${id}`)
  },
})
