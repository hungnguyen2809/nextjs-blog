import { InputField } from '@/components/form';
import { Search } from '@mui/icons-material';
import { Box, Icon, InputAdornment, SxProps, Theme, debounce } from '@mui/material';
import { useForm } from 'react-hook-form';

export interface WorkFilterData {
  search: string;
}

interface Props {
  sx?: SxProps<Theme>;
  defaultValues?: WorkFilterData;
  onSubmit?: (data: WorkFilterData) => void;
}

export function WorkFilter({ onSubmit, sx, defaultValues }: Props) {
  const { control, handleSubmit } = useForm<WorkFilterData>({
    defaultValues: { search: '', ...defaultValues },
  });

  const handleSubmitData = (data: WorkFilterData) => {
    onSubmit?.(data);
  };

  const debounceSearchChange = debounce(handleSubmit(handleSubmitData), 500);

  return (
    <Box sx={sx} component="form" onSubmit={handleSubmit(handleSubmitData)}>
      <InputField
        name="search"
        control={control}
        placeholder="Search"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <Icon component={Search} />
            </InputAdornment>
          ),
        }}
        onChange={() => {
          debounceSearchChange();
        }}
      />
    </Box>
  );
}
