import {configureStore} from '@reduxjs/toolkit'

import uislice from './uislice.js'

const store=configureStore({
    reducer:{ui: uislice.reducer}
})

export default store;