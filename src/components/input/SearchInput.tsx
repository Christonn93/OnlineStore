import { AutocompleteRenderInputParams, InputAdornment, TextField } from '@mui/material';
import { SearchIconWrapper } from '../styled/SearchBarStyled';

export const SearchInput = ({
  params,
  searchQuery,
  setSearchQuery,
}: {
  params: AutocompleteRenderInputParams;
  searchQuery: string;
  setSearchQuery: (event: React.ChangeEvent<HTMLInputElement>) => void; // Fixed typing
}) => {
  return (
    <TextField
      {...params}
      label="Search"
      variant="outlined"
      value={searchQuery}
      onChange={setSearchQuery} // Now correctly typed
      slotProps={{
        input: {
          // Fixed incorrect placement
          startAdornment: (
            <InputAdornment position="start">
              <SearchIconWrapper />
            </InputAdornment>
          ),
        },
      }}
    />
  );
};
