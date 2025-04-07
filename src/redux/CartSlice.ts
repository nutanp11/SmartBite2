import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface CartItem {
  id: string; 
  title: string;
  price: string;
  image: string;
}

const initialState: CartItem[] = [];

const CartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addCartItem: (state, action: PayloadAction<CartItem>) => {
      state.push(action.payload);
    },

    removeCartItem: (state, action: PayloadAction<number>) => {
      return state.filter((_, index) => index !== action.payload);
    },
  },
});

export const { addCartItem, removeCartItem } = CartSlice.actions;
export default CartSlice.reducer;
