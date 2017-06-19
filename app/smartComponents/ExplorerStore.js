import { computed, observable, action } from 'mobx'
import $ from 'jquery'
import dt from 'datatables.net'
import buttons from'datatables.net-buttons'

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
    var arrDataTable = []

    returnedValue.result.map(value => arrDataTable.push([value]))

    $('#tableCollections').DataTable( {
      data: arrDataTable,
      sorting: true,
      paging: true,
      lengthChange: false,
      searching: true,
      info: false,
      columns: [
        { title: "Collection name" }
      ]
    })
  


     // returnedValue.result.map(element => {
        //self.todos.push(new Todo(element.key, element.name, element.distance))
      //})
      //self.isLoading = false
    })      
  }

}

export default new ExplorerStore