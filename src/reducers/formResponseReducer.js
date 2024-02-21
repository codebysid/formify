export const formResponseActions = {
  ADD_RESPONSE_DATA: "add_response_data"
}

export const reducer = (state, action) => {
  switch (action.type) {
    case formResponseActions.ADD_RESPONSE_DATA: {
      return {
        ...state, ...action.payload
      }
    }
  }
}
