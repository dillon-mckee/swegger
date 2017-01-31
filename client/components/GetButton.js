import React from 'react';

const GetButton = (props) => {
   return (
    <div className="get-button">
<button type="button" onClick={props.onClick}>Click me to open a modal and call the back-end!</button>
    </div>
    );
};

export default GetButton
