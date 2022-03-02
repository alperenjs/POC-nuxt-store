import AuthRepository from '~/repositories/AuthRepository'
import ImagesRepository from './ImagesRepository'

export default ($axios) => ({
  auth: AuthRepository($axios),
  images: ImagesRepository($axios)
})
