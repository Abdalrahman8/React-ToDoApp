import React, { Component } from 'react';
import TodoItems from './components/TodoItems/todoItems';
import AddItems from './components/AddItem/addItem';

class App extends Component {

  state = {
    items: [
      {id:1, name: "Eltetsh", age: 25},
      {id:2, name: "Saleh", age: 30},
      {id:3, name: "Abdo", age: 20},
    ]
  }

  deleteItem = (id) => {
     let items = this.state.items.filter(item => {
       return item.id !== id
     })
     this.setState({items})
  }

  addItem = (item) => {
    item.id = Math.random();
    let items = this.state.items;
    items.push(item);
    this.setState({items})
  }

  render () {
    return (
      <div className="App container">
        <h1 className="text-center" >Todo List</h1>
        <TodoItems items={this.state.items} deleteItem={this.deleteItem} />
        <AddItems addItem={this.addItem}/>
      </div>
    );
  }

  
}

export default App;



// let items = this.state.items;
    // let i = items.findIndex(item => items.id === id)
    // items.splice(i, 1)
    // this.setState({items})