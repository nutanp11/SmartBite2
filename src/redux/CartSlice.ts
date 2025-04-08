import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartItem {
  id: string;
  title: string;
  price: string;
  image: string;
  quantity: number;
}

const initialState: CartItem[] = [];

const CartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addCartItem: (state, action: PayloadAction<CartItem>) => {
      const existingItem = state.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
    },

    removeCartItem: (state, action: PayloadAction<number>) => {
      return state.filter((_, index) => index !== action.payload);
    },

    increaseQuantity: (state, action: PayloadAction<string>) => {
      const item = state.find((item) => item.id === action.payload);
      if (item) item.quantity += 1;
    },

    decreaseQuantity: (state, action: PayloadAction<string>) => {
      const item = state.find((item) => item.id === action.payload);
      if (item) {
        if (item.quantity > 1) {
          item.quantity -= 1;
        } else {
          return state.filter(cartItem => cartItem.id !== item.id);
        }
      }
    },
  },
});

export const { addCartItem, removeCartItem, increaseQuantity, decreaseQuantity } = CartSlice.actions;
export default CartSlice.reducer;
