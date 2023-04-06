import * as React from 'react';
import Button from '@mui/material/Button';

export default function MyButton({text, onClick}) {
  return (
    <div>
      <Button onClick={onClick}>
      {text}
        </Button>
    </div>
  );
}