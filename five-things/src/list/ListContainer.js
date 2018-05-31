import React, { Component } from 'react';
import './list_container.css'
import CategoryName from  './CategoryName.js'
class ListContainer extends Component{
	render()
	{
		return(
		<div className="row">
			<div className="container-box col-md-5 col-md-offset-5">
					<div className="row">
						<CategoryName name="Politics"/>
					</div>
			</div>
		</div>
		);
	}
}
export default ListContainer;