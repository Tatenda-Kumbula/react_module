console.log('App.js is running!');

var app= {
    title: 'Indecision App',
    subtitle: 'Put ypur life in the hands of a computer',
    options: ['One', 'Two']
};
// JSX - JavaScript XML
var template = (
  <div> 
    <h1>Indecision App.js!</h1>
    <p>This is some info</p>
    <p>{app.options.length > 0 ? 'Here are your options': 'No options'}</p>
    <ol>
        <li>Item one</li>
        <li>Item two</li>
    </ol>
  </div>
);

var user = {
    name: 'Andrew',
    age: 19,
    Location: 'Johannesburg'
};
var templateTwo= (
    <div>
    <h1>Tatenda Kumbula</h1>
    <p>Age: 26</p>
    <p>Location: Johannesburg</p>
    </div>
);



var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);