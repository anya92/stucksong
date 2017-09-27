import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createPlaylist } from '../actions';

class CreatePlaylist extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = {
	    numberOfTracks: 50
	  };
	}

	createPlaylist() {
		this.props.createPlaylist(this.state.numberOfTracks);
	}

	renderContent() {
		switch(this.props.playlistUrl) {
			case null: 
				return (
					<div>
						<h1>Create New Playlist</h1>
						<div className="input-group">
							<label>Number Of Tracks:</label>
							<input 
								type="number" 
								min={10}
								max={50}
								value={this.state.numberOfTracks}
								onChange={e => this.setState({ numberOfTracks: e.target.value })}
							/>
						</div>
						<button className="btn" onClick={() => this.createPlaylist()}>Create</button>
					</div>
				);
			default:
				return (
					<div>
						<button className="btn"><a href={this.props.playlistUrl} target="_blank">Open Playlist</a></button>
					</div>
				);	
		}
	}

	render() {
		return (
			<div>
				{ this.renderContent() }
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		playlistUrl: state.playlistUrl
	};
}

export default connect(mapStateToProps, { createPlaylist })(CreatePlaylist);
