import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface ProductsState {
  value: Array<Product>
  searchInputValue: string
  sort: {
    price: 'asc' | 'desc' | '',
    rate: 'asc' | 'desc' | '',
  }
  filter: {
    categories: Array<string>,
    brands: Array<string>,
  }
}

const initialState: ProductsState = {
  value: [],
  searchInputValue: '',
  sort: {
    price: '',
    rate: '',
  },
  filter: {
    categories: [],
    brands: [],
  }

}

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setValue: (state, action: PayloadAction<Array<Product>>) => {
      state.value = action.payload
    },
    setSearchInputValue: (state, action: PayloadAction<string>) => {
      state.searchInputValue = action.payload.toLowerCase()
    },
    setSort: (state, action: PayloadAction<ProductsState["sort"]>) => {
      state.sort = action.payload
    },
    setFilterCategories: (state, action: PayloadAction<string>) => {
      if(state.filter.categories.includes(action.payload)) {
        state.filter.categories = state.filter.categories.filter((category) => category !== action.payload)
      } else {
        state.filter.categories.push(action.payload)
      }
    },
    setFilterBrands: (state, action: PayloadAction<string>) => {
      if(state.filter.brands.includes(action.payload)) {
        state.filter.brands = state.filter.brands.filter((brand) => brand !== action.payload)
      } else {
        state.filter.brands.push(action.payload)
      }
    },

  },
})

export const { setValue, setSearchInputValue, setSort, setFilterCategories, setFilterBrands } = productsSlice.actions

export default productsSlice.reducer