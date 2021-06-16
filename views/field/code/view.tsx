// import dependencies
import React from 'react';

// field code
const FieldCodeView = (props = {}) => {

  // return jsx
  return (
    <code className="pre">
      { props.value }
    </code>
  );
};

// export default
export default FieldCodeView;