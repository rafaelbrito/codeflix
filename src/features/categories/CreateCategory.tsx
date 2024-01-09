import { Box, Paper, Typography } from "@mui/material";
import { CategoryFrom } from "./components/CategoryFrom";
import categorySlice, { Category } from "./categorySlice";
import { useState } from "react";



export const CategoryCreate = () => {
  const [isdisabled, setIsdisabled] = useState(false);
  const [category, setCategory] = useState<Category>({
    id: '',
    name: '',
    is_active: false,
    created_at: '',
    updated_at: '',
    description: '',
    deleted_at: '',
  });
  const handleChange = (e: any) => { };
  const handleToggle = (e: any) => { };

  return (
    <Box>
      <Paper>
        <Box p={2}>
          <Box mb={2}>
            <Typography variant="h4">Create Category</Typography>
          </Box>
        </Box>
        <CategoryFrom
          category={category}
          isdisabled={isdisabled}
          isLoading={false}
          onSubmit={() => { }}
          handleChange={handleChange}
          handleToggle={handleToggle} />
      </Paper>
    </Box>
  );

}

