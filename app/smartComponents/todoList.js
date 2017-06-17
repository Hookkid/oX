import React from "react"
import { observer } from "mobx-react"
import { Button } from 'react-bootstrap'
import $ from 'jquery'

var className = "";

@observer
export default class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: {},
      inputText : "",
      inputNumber : "",
    };
  }
  componentDidMount() {
    this.props.store.fetch();
  }

  createNew(e) {
    if (e.which === 13) {
      this.props.store.createTodo(e.target.value)
      e.target.value = ""
    }
  }

  openEdit(key){
    this.setState({
      isEditing: key,
      inputText: "231213",
      inputNumber: "6"
    })
  }

  cancelEdit(key){
    this.setState({
      isEditing: {}
    })
  }

  deleteTodo(key){
    this.props.store.deleteTodo(key)
  }

  onInputChange(e){
    this.setState({
      inputText: e.value
    })
  }

  render() {

    const { todos, isLoading } = this.props.store
    var todoLis = <li></li>
    const buttonsInstance = (<div>
      <Button>Click me! <i className='fa fa-user'></i></Button>
      <input className="new" onKeyPress={this.createNew.bind(this)} />
    </div> )

    if(isLoading){
      todoLis = <li><i className='fa fa-spinner'></i></li>
    }else{      
      todoLis = todos.slice().map(todo => {
        if(this.state.isEditing==todo.key){
          return(
            <li key={todo.key}> 
              <span className="inputHolder"><input className="editInput" onChange={this.onInputChange} value={this.state.inputText} /> - <input className="editInput" onChange={this.onInputChange} value={this.state.inputNumber}/></span>
              <i className='fa fa-floppy-o icon'></i>
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