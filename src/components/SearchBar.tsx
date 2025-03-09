import { useState, useEffect } from 'react';
import { useGetProducts } from '@/hooks/query/useGetProducts';
import { useNavigate } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import { Autocomplete, TextField, InputAdornment, alpha } from '@mui/material';

export const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const { data: products = [], refetch } = useGetProducts();
  const navigate = useNavigate();

  // Fetch only when user starts typing
  useEffect(() => {
    if (searchQuery.trim()) {
      refetch();
    }
  }, [searchQuery, refetch]);

  return (
    <Autocomplete
      freeSolo
      options={searchQuery ? products : []}
      getOptionLabel={option => option.title}
      onChange={(_event, value) => {
        if (value) {
          navigate(`/product/${value.id}`);
        }
      }}
      renderInput={params => (
        <TextField
          {...params}
          label="Search"
          variant="outlined"
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          slotProps={{
            input: {
              endAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            },
          }}
        />
      )}
    />
  );
};
