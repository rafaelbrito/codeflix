import { Box, Paper, Typography } from "@mui/material";
import { CategoryFrom } from "./components/CategoryFrom";
import categorySlice, { Category, createCategory } from "./categorySlice";
import { useState } from "react";
import { useAppDispatch } from "../../app/hooks";
import { useSnackbar } from "notistack";



export const CategoryCreate = () => {
  const [isdisabled, setIsdisabled] = useState(false);
  const [categoryState, setCategoryState] = useState<Category>({
    id: '',
    name: '',
    is_active: false,
    created_at: '',
    updated_at: '',
    description: '',
    deleted_at: '',
  });
  const dispatch = useAppDispatch();
  const {enqueueSnackbar} = useSnackbar();


  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    dispatch(createCategory(categoryState));
    enqueueSnackbar('Success create category', {variant:'success'});
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCategoryState({ ...categoryState, [name]: value });
  };

  const handleToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setCategoryState({ ...categoryState, [name]: checked });
  };

  return (
    <Box>
      <Paper>
        <Box p={2}>
          <Box mb={2}>
            <Typography variant="h4">Create Category</Typography>
          </Box>
        </Box>
        <CategoryFrom
          category={categoryState}
          isdisabled={isdisabled}
          isLoading={false}
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          handleToggle={handleToggle} />
      </Paper>
    </Box>
  );

}

