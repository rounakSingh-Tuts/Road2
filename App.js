import React, { Component } from "react";

const list = [
  {
    title: 'React',
    url: 'https://reactjs.org/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: 'Redux',
    url: 'https://redux.js.org/',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
];

class App extends Component {
  constructor() {
    this.state = {
      list,
      searchTerm: ''
    }
   
    this.onDismiss = this.onDismiss.bind(this);
    this.clickMe = this.clickMe.bind(this);
    this.onSearchChange = this.onSearchChange.bind(this);
  }
  onDismiss(id) {
    const updatedList = this.state.list.filter(item => item.objectID != id)
    this.setState({list: updatedList})
  }

  clickMe() {
    alert("clicked")
  }

  onSearchChange(event) {
    this.state = (
      {
        searchTerm: event.target.value
      }
    )

    console.log('searchTerm::',event.target.value)
  }

  render() {
    return (
      <div>
        <form>
          <input 
            type="text" 
            onChange={this.onSearchChange}/ >
        </form>
        {
          this.state.list.map(item => 
            <div key={item.objectID}>
              <span>
                <a href={item.url}>{item.title}</a>
              </span>
              <button type="button" onClick={() => this.onDismiss(item.objectID)}>
                Display
              </button>
              <button type="buton" onClick={() => this.clickMe()}>ClickMe
              </button>
            </div>
            
          )
        }
      </div>
    )
  }
}

export default App