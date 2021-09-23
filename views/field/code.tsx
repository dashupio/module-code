// import dependencies
import { View, Form } from '@dashup/ui';
import React, { useState } from 'react';

// field code
const FieldCode = (props = {}) => {
  // use state
  const [value, setValue] = useState(props.value || '');

  // return jsx
  return (
    <Form.Group className={ props.noLabel ? '' : 'mb-3' } controlId={ props.field.uuid }>
      { !props.noLabel && (
        <Form.Label>
          { props.field.label || (
            <a href="#!" onClick={ (e) => !props.onConfig(props.field) && e.preventDefault() }>
              <i>Set Label</i>
            </a>
          ) }  
        </Form.Label>
      ) }
      <View
        type="field"
        view="code"
        struct="code"
        mode={ props.field.mode }
        value={ value }
        dashup={ props.dashup }
        onChange={ (val) => props.onChange(props.field, val) }
        />
      { !!props.field.help && !props.noLabel && (
        <Form.Text className="text-muted">
          { props.field.help }
        </Form.Text>
      ) }
    </Form.Group>
  );
};

// export default
export default FieldCode;