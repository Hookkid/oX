import { computed, observable } from 'mobx'

class Todo{
  @observable key
  @observable name
  @observable distance

  constructor(key, name, distance){
    this.key = key
    this.name = name
    this.distance = distance
  }
}


export class TodoStore {
  @observable isLoading  = true
  @observable todos = []

  fetch() {
    var self = this

    fetch('http://localhost:5000/',{method: 'get'})
      .then(fetchedTodos => {
        return fetchedTodos.json()
      })
      .then(function(returnedValue) {
        returnedValue.result.map(element => {
          self.todos.push(new Todo(element.key, element.name, element.distance))
        })
        self.isLoading = false
      })      
  }

  createTodo(value){
    var self = this
    self.isLoading = true
    var json = {   
      name: value,
      distance: 2
    }

    fetch('http://localhost:5000/', {
      method: 'post',
      headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    },
      body: JSON.stringify(json)
    })
    .then(function (response) {
      return response.json();
    })
    .then(function (result) {
      self.todos.push(new Todo(result.result.key, result.result.name, result.result.distance))
      self.isLoading = false
      console.log('Add Successfull',result)
    })
    .catch (function (error) {
      console.log(JSON.stringify(json.json))
      console.log('Request failed', error)
    })
  }

  deleteTodo(key){

    var self = this
    self.isLoading = true

    fetch('http://localhost:5000/delete', {
      method: 'post',
      headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    },
      body: JSON.stringify(key)
    })
    .then(function (response) {
      return response.json()
    })
    .then(function (result) {
      var removeIndex = self.todos.map(function(item) { return item.key; }).indexOf(key)
      ~removeIndex && self.todos.splice(removeIndex, 1)
      self.isLoading = false
      console.log('Delete Successfull',result);
    })
    .catch (function (error) {
      console.log(JSON.stringify(json.json))
      console.log('Request failed', error)
    })
  }

}

export default new TodoStore