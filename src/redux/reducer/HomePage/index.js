const initialState = {
   isShowModal: false,
   isShowIcon: false,
}

const reducerHomePage = (state = initialState, action) => {
   switch (action.type) {
      case 'ACTION__MODAL':
         return {
            ...state,
            isShowModal: action.payload,
         }
      case 'ACTION__ICON':
         return {
            ...state,
            isShowIcon: action.payload,
         }
      default:
         return state
   }
}

export default reducerHomePage
