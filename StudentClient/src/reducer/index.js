import { combineReducers } from 'redux'

import registration from './registrationReducer.js'
import student from './studentReducer.js'
import teacher from './teacherReducer.js'

export default combineReducers({
  registration,
  student,
  teacher
})