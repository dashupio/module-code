
import React from 'react';
import { UnControlled as CodeMirror } from 'react-codemirror2';

// import
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/handlebars/handlebars';

// code
const Code = (props = {}) => {

  // return jsx
  return (
    <CodeMirror
      value={ props.value || '' }
      options={ {
        mode        : props.mode || 'javascript',
        theme       : 'one-dark',
        lineNumbers : true
      } }
      onChange={ (editor, data, value) => {
        // on change
        props.onChange(value);
      } }
    />
  );
};

// export default
export default Code;