import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import TodoStore from '../smartComponents/todoStore'
import TodoList from '../smartComponents/todoList'

export class Page extends React.Component{

  render(){
    return(
<div className="container">
    
    <div className="row">
    <div className="col-md-12">
            <div className="mongoDB">
      <p>How about we <b>CRUD</b> some data live from mongoDB Atlas:</p>
      <TodoList store={TodoStore} />
      </div>
    </div>
    </div>
    <p>Or how about some nicely stylized tables?</p>
      <div className="row">
        <div className="col-md-6">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Username</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td rowSpan="2">1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <td>Mark</td>
                <td>Otto</td>
                <td>@TwBootstrap</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <td>3</td>
                <td colSpan="2">Larry the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="col-md-6">
          <table className="table table-condensed">
            <thead>
              <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Username</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <td>3</td>
                <td colSpan="2">Larry the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    )
  }
}