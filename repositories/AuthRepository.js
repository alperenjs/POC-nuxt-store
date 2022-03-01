export default ($axios) => ({
  login(payload) { //auth simulation
      if(payload === "alperen@gmail.com"){ 
          return true
      }else{
          return false
      }
  },

  logout() {
    return true
  },
})
