import React from "react";
import ReactDOM from "react-dom";



const head = React.createElement('h1', { id: 'heading' }, "Helo nidhi from react");
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(head)
