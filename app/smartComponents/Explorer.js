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
		var explorerList = this.props.store.dbs.slice().map(dbs => {
			return (<tr key={dbs}><td>{dbs}</td></tr>)
		})

		return <div>
			<div className="mongoExplorer">
				<div className="widgetHeader">
					<img src="/images/mongodb-leaf_32x32@2x.png" />
					My Mongo Explorer
				</div>
				<div className="widgetBody">
					<table><tbody>
						{explorerList}
					</tbody></table>
				</div>
				<div className="widgetFooter">
				</div>
			</div>
		</div>
	}
}