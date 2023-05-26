import { InputField } from '@/components/form';
import { Search } from '@mui/icons-material';
import { Box, Icon, InputAdornment, SxProps, Theme } from '@mui/material';
import { useForm } from 'react-hook-form';

export interface WorkFilterData {
  search: string;
}

interface Props {
  onSubmit?: (data: WorkFilterData) => void;
  sx?: SxProps<Theme>;
}

export function WorkFilter({ onSubmit, sx }: Props) {
  const { control, handleSubmit } = useForm<WorkFilterData>({
    defaultValues: { search: '' },
    mode: 'onChange',
  });

  const handleSubmitData = (data: WorkFilterData) => {
    onSubmit?.(data);
  };

  return (
    <Box sx={sx} component="form">
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
      />
    </Box>
  );
}
