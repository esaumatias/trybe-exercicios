const INITIAL_STATE = {
  theme: 'light'
}

const reducer = (state = INITIAL_STATE, action) => {
  return state;
}

const store = Redux.createStore(reducer);

consoel.log(store);