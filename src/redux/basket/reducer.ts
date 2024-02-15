import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';

import { RootState } from '@/redux/store';
import { IBasketItem } from '@/interfaces/basket.interface';

const BasketAdapter = createEntityAdapter({
  selectId: (basketItem: IBasketItem) =>
    basketItem.product.id,
});

const basketSlice = createSlice({
  name: 'basket',
  initialState: BasketAdapter.getInitialState(),
  reducers: {
    basketUpsertOne: BasketAdapter.upsertOne,
    basketRemoveOne: BasketAdapter.removeOne,
    basketRemoveAll: BasketAdapter.removeAll,
  },
});

export const {
  basketUpsertOne,
  basketRemoveOne,
  basketRemoveAll,
} = basketSlice.actions;

export const BasketSelector =
  BasketAdapter.getSelectors<RootState>(
    (state) => state.basket
  );

export default basketSlice.reducer;
