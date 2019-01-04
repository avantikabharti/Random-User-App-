import { RANDOM_IMAGE, GET_API_DATA } from '../constants/constants'

export const onBtnClickHandlerAction = () => ({type:RANDOM_IMAGE});

export const getAptData = data => ({type:GET_API_DATA, data});