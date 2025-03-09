import { useState, useEffect } from 'react';
import { useGetProducts } from '@/hooks/query/useGetProducts';
import { useNavigate } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import { Autocomplete, TextField, InputAdornment } from '@mui/material';

export const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const { data: products = [], refetch } = useGetProducts();
  const navigate = useNavigate();

  useEffect(() => {
    if (searchQuery.trim()) {
      refetch().catch((error: unknown) => {
        console.error('Error fetching products:', error);
      });
    }
  }, [searchQuery, refetch]);

  return (
    <Autocomplete
      freeSolo
      options={searchQuery ? products : []}
      getOptionLabel={option => (typeof option === 'string' ? option : option[0].title)}
      onChange={(_event, value) => {
        if (!value) return null;
        if (typeof value === 'string') return null;

        void navigate(`/product/${value[0].id}`);
      }}
      renderInput={params => (
        <TextField
          {...params}
          label="Search"
          variant="outlined"
          value={searchQuery}
          onChange={e => {
            setSearchQuery(e.target.value);
          }}
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
