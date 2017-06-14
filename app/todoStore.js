import { computed, observable } from 'mobx'

export class TodoStore {
  @observable isLoading  = true
  @observable todos = []

  fetch() {
    var self = this
    fetch('http://localhost:5000/star',{method: 'get'})
      .then(fetchedTodos => {
        return fetchedTodos.json()
      })
      .then(function(returnedValue) {
        self.todos = returnedValue.result
        self.isLoading = false
      })      

  }

}

export default new TodoStore