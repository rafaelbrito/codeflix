import { Box, Paper, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";
import { useState } from "react";
import { selectCategoryId } from "./categorySlice";
import { CategoryFrom } from "./components/CategoryFrom";



export const CategoryEdit = () => {
  const id = useParams().id || '';
  const [isdisabled, setIsdisabled] = useState(false);
  const category = useAppSelector((state) => selectCategoryId(state, id));

  const handleChange = (e: any) => { };
  const handleToggle = (e: any) => { };

  return (
    <Box>
      <Paper>
        <Box p={2}>
          <Box mb={2}>
            <Typography variant="h4">Edit Category</Typography>
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

