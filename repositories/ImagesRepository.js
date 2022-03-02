// https://api.thecatapi.com/v1/images/search

const resource = '/images/search'
export default ($axios) => ({
  getRandom() {
    return $axios.get(`${resource}`)
  },
})
