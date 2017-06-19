import { computed, observable, action } from 'mobx'

export class ExplorerStore {
  @observable dbs = []

    @action fetchAllDbs() {
    var self = this
    self.todos = [];
    fetch('http://localhost:5000/dbs',{method: 'get'})
    .then(fetchedTodos => {
        return fetchedTodos.json()
    })
    .then(function(returnedValue) {
    self.dbs = returnedValue.result

    })      
  }

}

export default new ExplorerStore