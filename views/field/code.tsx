// import dependencies
import React, { useState } from 'react';
import { View, Box, TextField } from '@dashup/ui';

// field code
const FieldCode = (props = {}) => {
  // use state
  const [value, setValue] = useState(props.value || '');

  // return jsx
  return (
    <TextField
      type="hidden"
      label={ props.field.label }
      color={ props.isInline ? 'transparent' : props.field?.color?.hex }
      value="working"
      fullWidth
      helperText={ props.field.help }
      InputProps={ {
        startAdornment : (
          <Box flex={ 1 } pr={ 1 } pb={ 1 } pt={ 2 }>
            <View
              type="field"
              view="code"
              struct="code"
              mode={ props.field.mode }
              value={ value }
              dashup={ props.dashup }
              onChange={ (v) => props.onChange(props.field, v) }
            />
          </Box>
        ),
      } }
      placeholder={ props.field.placeholder || `Enter ${props.field.label}` }
    />
  );
};

// export default
export default FieldCode;