import {configureStore} from '@reduxjs/toolkit'
import userslicepage from './UserSlice'
export default configureStore({reducer:{shahinsha:userslicepage}})