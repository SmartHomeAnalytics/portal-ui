import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'

import reducer, { appReducer } from './reducers'
import rootSaga from './sagas'

const preloadedState = appReducer({}, { type: 'EMPTY' })

const sagaMiddleware = createSagaMiddleware()
export const store = configureStore({
  reducer,
  preloadedState,
  devTools: true,
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({
      thunk: false,
      serializableCheck: {
        // Ignore these field paths in all actions
        ignoredActionPaths: ['error', 'payload.error', 'avatarBlob'],
        ignoredPaths: ['auth.error', 'auth.authorizationError', 'errors.list', 'dialogs.list'],
      },
    }),
    sagaMiddleware,
  ],
})

sagaMiddleware.run(rootSaga)
