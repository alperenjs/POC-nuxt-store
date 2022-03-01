import AuthRepository from '~/repositories/AuthRepository'

export default ($axios) => ({
  auth: AuthRepository($axios),
})
