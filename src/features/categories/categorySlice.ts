import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface Category {
  id: string;
  name: string;
  deleted_at: null | string;
  is_active: boolean;
  created_at: string;
  updated_at: string;
  description: null | string;
}


const category: Category = {
  id: '1',
  name: 'test 1',
  deleted_at: null,
  is_active: true,
  created_at: '2021-01-01 00:00:00',
  updated_at: '2021-01-01 00:00:00',
  description: 'test description'
};

export const initialState = [
  category,
  { ...category, id: "2", name: "test 2" },
  { ...category, id: "3", name: "test 3" },
  { ...category, id: "4", name: "test 4" },
];

const categoriesSlice = createSlice({
  name: "category",
  initialState: initialState,
  reducers: {
    createCategory: (state, action) => { },
    deleteCategory: (state, action) => { },
    updateCategory: (state, action) => { }
  }
});

export const selectCategories = (state: RootState) => state.categories;

export const selectCategoryId = (state: RootState, id: string) => {
  const category = state.categories.find((category) => category.id === id);

  return {
    id: '',
    name: '',
    deleted_at: null,
    is_active: false,
    created_at: '',
    updated_at: '',
    description: '',
  };
}

export default categoriesSlice.reducer;