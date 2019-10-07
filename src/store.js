import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import userStatsReducer from './reducers/userStatsReducer'
import buildingsReducer from './reducers/buildingsReducer'
import missionsReducer from './reducers/missionsReducer'
import resourcesReducer from './reducers/resourcesReducer'

const reducer = combineReducers({
  userStats: userStatsReducer,
  buildings: buildingsReducer,
  missions: missionsReducer,
  resources: resourcesReducer,
})

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
)

export default store