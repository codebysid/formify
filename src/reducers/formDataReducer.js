export const formReducerActions = {
  ADD_DATA: "add_data",
  ADD_RADIO: "add_radio",
  RESET_STATE: "reset_state"
}

export const reducer = (state, action) => {
  switch (action.type) {
    case formReducerActions.ADD_DATA: {
      return [
        ...state, action.payload
      ]
    }
    case formReducerActions.ADD_RADIO: {
      return [
        ...state, action.payload
      ]
    }
    case formReducerActions.RESET_STATE: return []
  }
}
