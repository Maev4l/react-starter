import { combineReducers } from 'redux';

export default combineReducers({});

// const combineLazyReducers = (reducers, initialState) => {
//   let reducerKeys = new Set(Object.keys(reducers));
//   Object.keys(initialState)
//     .filter((k) => !reducerKeys.has(k))
//     .forEach((k) => {
//       reducers[k] = (state) => (state === undefined ? null : state);
//     });

//   return combineReducers(reducers);
// };

// export default combineLazyReducers;
