console.log('App.js is running!');

var app= {
    title: 'Indecision App',
    subtitle: 'Put ypur life in the hands of a computer',
    options: []
};

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

const appRoot = document.getElementById('app');

