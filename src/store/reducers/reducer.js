import { data } from "../../data";
import { ADD_PRODUCT } from "../actions/action";

const initialState = {
  product: data,
};

export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PRODUCT:
            return {
                ...state,
                product: [
                    ...state.product,
                    {
                        id: action.payload,
                    }
                ]
            }
        default:
            return state;
    }
};
// todo: [
//           ...state.todo,
//           {
//             text: action.payload,
//             completed: false,
//           },
//         ],