import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import TodoStore from '../smartComponents/todoStore'
import TodoList from '../smartComponents/todoList'
import Explorer from '../smartComponents/Explorer'
import ExplorerStore from '../smartComponents/ExplorerStore'

export class Page extends React.Component{

  render(){
    return(
<div className="container">
    <div className="page">
    <div className="row">
    <div className="col-md-12">
            <div className="mongoDB">
      <p>How about we <b>CRUD</b> some data live from mongoDB Atlas. The following UL component is hooked up to a MobX store fetching and storing data to a MongoDB database.</p>
      <TodoList store={TodoStore} />
      </div>
    </div>
    </div>
    </div>
    <div className="page">
    <p>Now let's explore our MongoDB databases and collections further:</p>
     <Explorer store={ExplorerStore} />
     </div>
    </div>
    )
  }
}