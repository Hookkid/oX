import React from "react"
import { toJS } from "mobx"
import { observer } from "mobx-react"
import { Button } from 'react-bootstrap'

@observer
export default class Explorer extends React.Component {
	componentDidMount(){
		this.props.store.fetchAllDbs()
	}
	render() {

		return <div>
			<div className="row">
				<div className="col-md-12">
					<table id="tableCollections" className="display">
					  <thead>
					      <tr>
					          <th>Name</th>
					      </tr>
					  </thead>
					</table>
				</div>
			</div>
		</div>
	}
}