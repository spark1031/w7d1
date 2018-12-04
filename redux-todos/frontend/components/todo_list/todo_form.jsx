import React from 'react';

class TodoForm extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      title: "",
      body: "",
      done: false
    };
  }
  
  //when a change is registered,
  //  this inner function (event) => {} is invoked
  update (key) {
    if (key === "title") {
      return (event) => {
        e.preventDefault();
        this.setState({title: e.target.value});
      };
    } else if (key === "body") {
      return (event) => {
        e.preventDefault();
        this.setState({body: e.target.value});
      };
    }
    
  }
  
  
  render () {
    return (
      <div>
        <form>
          <input type="text" value={this.state.title} onChange={this.update('title')}/>
          <input type="text" value={this.state.body} onChange={this.update('body')}/>
        </form>
      </div>
    );
  }
}