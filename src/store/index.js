import {configureStore} from '@reduxjs/toolkit'

import loginSlice from './loginSlice'

const store = configureStore({
    reducer:{login:loginSlice}
})

export default store;