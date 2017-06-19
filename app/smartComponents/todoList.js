import React from "react"
import { toJS } from "mobx"
import { observer } from "mobx-react"
import { Button } from 'react-bootstrap'

@observer
export default class TodoList extends React.Component {
  constructor(){
    super()
    this.state = {
      'todoInputText' : ''
    }
  }

  componentDidMount() {
    this.props.store.fetchAll()    
  }

  onInputChange(e){
    this.props.store.changeData(e.target.name, e.target.value);
  }

  createNewTodo(value) {
    if (value != "") {
      this.props.store.createTodo(value)
    }
    this.setState({
      'todoInputText' : ''
    })
  }

  todoInputChange(e) {
    this.setState({
      'todoInputText' : e.target.value
    })
  }

  todoInputKeyPress(e){
    if (e.which === 13) {
      this.createNewTodo(e.target.value)
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
    const buttonsInstance = (<div className="row">
      <div className="col-lg-3">
        <input className="form-control input-sm" onKeyPress={this.todoInputKeyPress.bind(this)}  onChange={this.todoInputChange.bind(this)} value={this.state.todoInputText} />
      </div>
      <Button onClick={() => this.createNewTodo(this.state.todoInputText)}>Add a new record <i className='fa fa-plus'></i></Button>
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
      <p>Use the field bellow to add a new record to the database or hover over the list items to save or delete an existing record:</p>
      {buttonsInstance}
    </div>
  }
}