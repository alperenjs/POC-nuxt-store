export default ($axios) => ({
  login(payload) { //auth simulation
      if(payload === "test"){ 
          return true
      }else{
          return false
      }
  },

  logout() {
    return true
  },
})
