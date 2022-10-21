const initialState = {
   isShowModal: false,
}

const reducerHomePage = (state = initialState, action) => {
   switch (action.type) {
      case 'ACTION__MODAL':
         return {
            ...state,
            isShowModal: action.payload,
         }
      default:
         return state
   }
}

export default reducerHomePage
