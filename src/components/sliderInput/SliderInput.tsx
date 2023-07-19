import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

const marks = [
  {
    value: 1,
    label: '1',
  },
  {
    value: 2,
    label: '2',
  },
  {
    value: 3,
    label: '3',
  },
  {
    value: 4,
    label: '4',
  },
  {
    value: 5,
    label: '5',
  },
  {
    value: 6,
    label: '6',
  },
  {
    value: 7,
    label: '7',
  },
];

function valuetext(value: number) {
  return `${value}`;
}

function valueLabelFormat(value: number) {
  return marks.findIndex((mark) => mark.value === value) + 1;
}

export function SliderInput() {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Typography variant="body1">Discordo</Typography>
      <Box sx={{ flexGrow: 1, mx: 2, width:'8rem'}}>
        <Slider
          aria-label="Restricted values"
          valueLabelFormat={valueLabelFormat}
          getAriaValueText={valuetext}
          step={null}
          valueLabelDisplay="auto"
          marks={marks}
          max={marks.length}
          min={1}
        />
      </Box>
      <Typography variant="body1">Concordo</Typography>
    </Box>
  )
}
