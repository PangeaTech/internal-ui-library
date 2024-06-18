import React, { useState } from 'react';
import TextField from '../TextField';

const TextFieldExample: React.FC = () => {
  const [value, setValue] = useState('');

  return (
    <div>
      <TextField label="Example TextField" value={value} onChange={(e) => setValue(e.target.value)} />
      <p>Entered Value: {value}</p>
    </div>
  );
};

export default TextFieldExample;
