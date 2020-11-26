console.log('App.js is running!');

// JSX - JavaScript XML
var template = (
  <div> 
    <h1>Indecision App.js!</h1>
    <p>This is some info</p>
    <ol>
        <li>Item one</li>
        <li>Item two</li>
    </ol>
  </div>
);

var templateTwo= (
    <div>
    <h1>Tatenda Kumbula</h1>
    <p>Age: 26</p>
    <p>Location: Philadelphia</p>
    </div>
);



var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);