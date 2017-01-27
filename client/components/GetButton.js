import React from 'react';

const GetButton = (props) => {
   return (
    <div className="get-button">
<input type="button" value="Click me to open a modal and call the back-end!" onClick={props.onClick}>
</input>
    </div>
    );
};

export default GetButton
