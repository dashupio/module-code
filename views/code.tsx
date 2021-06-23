
import React, { useState } from 'react';
import { UnControlled as CodeMirror } from 'react-codemirror2';

// import
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/handlebars/handlebars';

// global timer
let timer;

// global debounce
const debounce = (func, timeout = 1000) => {

  // return debounced
  return (...args) => {
    // clear timeout previously
    clearTimeout(timer);

    // create new timeout
    timer = setTimeout(() => func(...args), timeout);
  };
}

// code
const Code = (props = {}) => {
  // set value
  const [value, setValue] = useState(props.value || '');

  // return jsx
  return (
    <CodeMirror
      value={ value }
      options={ {
        mode        : props.mode || 'javascript',
        theme       : 'one-dark',
        lineNumbers : true
      } }
      onChange={ (editor, data, value) => {
        // on change
        debounce(props.onChange, 500)(value);
      } }
    />
  );
};

// export default
export default Code;