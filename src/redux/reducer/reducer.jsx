const INIT_STATE = {
  carts: []
};

export const cartreducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "ADD_CART":
      const Itemindex = state.carts.findIndex((item)=> item.id ===  action.payload.id);

      if (Itemindex >=0) {
        state.carts[Itemindex].qnty +=1
      }else{
        const temp = {...action.payload,qnty: 1 }
        return {
          ...state,
          carts: [...state.carts,temp],
        };
      }

      case "RMV_CART":
      const data = state.carts.filter((ele)=>ele.id !== action.payload)

      return{
        ...state, 
        carts: data
      }
    default:
      return state;
  }
};
