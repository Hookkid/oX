import React from "react"
import { toJS } from "mobx"
import { observer } from "mobx-react"
import { Button } from 'react-bootstrap'
import $ from 'jquery'

var className = "";

@observer
export default class TodoList extends React.Component {


  componentDidMount() {
    this.props.store.fetchAll()    
  }

  onInputChange(e){
    this.props.store.changeData(e.target.name, e.target.value);
  }

  createNewTodo(e) {
    if (e.which === 13) {
      this.props.store.createTodo(e.target.value)
      e.target.value = ""
    }
  }

  openEdit(key){    
    this.props.store.selectTodo(key)
  }

  cancelEdit(key){
    this.props.store.selectedTodo.key = {}
  }

  deleteTodo(key){
    this.props.store.deleteTodo(key)
  }

  render() {

    const {  todos, isLoading } = this.props.store

    var todoLis = <li></li>
    const buttonsInstance = (<div>
      <Button>Click me! <i className='fa fa-user'></i></Button>
      <input className="new" onKeyPress={this.createNewTodo.bind(this)} />
    </div>)

    if(isLoading){
      todoLis = <li><i className='fa fa-spinner'></i></li>
    }else{      
      todoLis = todos.slice().map(todo => {
        if(this.props.store.selectedTodo.key==todo.key){
          return(
            <li key={todo.key}> 
              <span className="inputHolder">
                <input className="editInput" name="name" onChange={this.onInputChange.bind(this)} value={this.props.store.selectedTodo.name} /> - 
                <input className="editInput" name="distance" onChange={this.onInputChange.bind(this)} value={this.props.store.selectedTodo.distance}/>
              </span>
              <a onClick={() => this.props.store.saveTodo()}><i className='fa fa-floppy-o icon'></i></a>
              <a onClick={() => this.cancelEdit()}><i className='fa fa-ban icon'></i></a>
            </li> 
          )
        }else{
          return(
            <li key={todo.key}  onClick={() => this.openEdit(todo.key)}>        
              <span className="labelHolder">{todo.name} - {todo.distance}</span>
              <i className='fa fa-pencil icon'></i>
              <a onClick={() => this.deleteTodo(todo.key)}><i className='fa fa-trash icon'></i></a>
            </li> 
          )
        }

      })
    }

    return <div>
      <ul>{ todoLis }</ul>
      <p>I can also show you a bootstrap stylized button with a font-awesome icon in it:</p>
      {buttonsInstance}
    </div>
  }
}