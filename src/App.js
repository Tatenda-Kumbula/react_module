const { render } = require("@testing-library/react");
class IndecisionApp extends React.Component {
    render(){
        return(
            <div>
            <Header />
            <Action />
            <Options />
            <AddOption />
            
            </div>

        );
    }
}


class Header extends React.Component {
    render() {
        return(
        <div>
         <h1>Indecision</h1>
         <h2>Put your life in the hands of a computer</h2>
        </div>
        );
    }
}

class Action extends React.Component {
  render() {
      return (
        <div>
        <button>What should I do?</button>
        </div>  
      );
  }
}

class Action extends React.Component {
    render() {
        return (
          <div>
           Options Component here
          </div>  
        );
    }
  }
    
  class Action extends React.Component {
    render() {
        return (
          <div>
             AddOption component here
          </div>  
        );
    }
  }


  ReactDOM.render(jsx, document.getElementById('app'));
  