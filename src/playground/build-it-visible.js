const { render } = require("react-dom");

let visibility = false;

const toggleVisibility = () => {
    visibility = !visibility
    render();
};