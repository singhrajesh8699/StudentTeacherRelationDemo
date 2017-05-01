import { combineReducers } from 'redux'

import registration from './registrationReducer.js'
import student from './studentReducer.js'
import teacher from './teacherReducer.js'
import admin from './adminReducer.js'

export default combineReducers({
  
  registration,
  student,
  teacher,
  admin
})