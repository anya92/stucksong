import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { createPlaylist } from '../actions';

class CreatePlaylist extends Component {
	constructor(props) {
		super(props);
	
		this.state = {
			name: `${this.props.auth.username}'s Top Tracks`,
			description: '',
			numberOfTracks: 50
		};
	}

	createPlaylist() {
		const { name, description, numberOfTracks } = this.state;
		this.props.createPlaylist(name, description, numberOfTracks);
	}

	renderContent() {
		switch(this.props.playlist) {
			case null: 
				return (
					<div>
						<div className="site-title">Create playlist based on your <Link to='/top-tracks'>Top Tracks</Link></div>
						<div className="playlist__form">
							<div className="form-group">
								<label htmlFor="name">Name</label>
								<div className="input-group">
									<input 
										type="text"
										id="name"
										maxLength="100"
										className="form-control"
										value={this.state.name}
										onChange={e => this.setState({ name: e.target.value })}
									/>
									<div className="input-group-addon">{this.state.name.length}/100</div>
								</div>
							</div>
							<div className="form-group">
								<label htmlFor="description">Description</label>
								<div className="input-group">
									<textarea 
										rows={3}
										id="description"
										maxLength="300"
										className="form-control"
										placeholder="Give your playlist a description."
										value={this.state.description}
										onChange={e => this.setState({ description: e.target.value })}
									/>
									<div className="input-group-addon">{this.state.description.length}/300</div>
								</div>
							</div>
							<div className="form-group row">
								<label 
									htmlFor="numberOfTracks"
									className="col-md-3 col-form-label"
								>
									Number of Tracks
								</label>
								<div className="col-md-9">
									<input 
										type="number" 
										id="numberOfTracks"
										className={`form-control ${this.state.numberOfTracks < 10 || this.state.numberOfTracks > 50 ? 'input-danger' : ''}`}
										min={10}
										max={50}
										value={this.state.numberOfTracks}
										onChange={e => this.setState({ numberOfTracks: e.target.value })}
									/>
									{(this.state.numberOfTracks < 10 || this.state.numberOfTracks > 50) && <div className="danger-info">Number of tracks must be between 10 and 50.</div>}
								</div>
							</div>
							<button className="btn btn-lg" onClick={() => this.createPlaylist()}>Create</button>
						</div>
					</div>
				);
			default:
				return (
					<div>
						<div className="site-title">Your Playlist</div>
						<div className="playlist__info">
							<div className="playlist__info__image">
								<img src={this.props.playlist.image} alt={this.props.playlist.name} />
							</div>
							<div className="playlist__info__text">
								<div className="playlist__info__text__name">{this.props.playlist.name}</div>
								Created by {this.props.auth.username}
								<div className="playlist__info__text__description">{this.props.playlist.description}</div>
								<div className="playlist__info__text__numberOfTracks"><span>{this.props.playlist.numberOfTracks}</span> Tracks</div>
								<div className="playlist__info__text__link">
									<a href={this.props.playlist.url} target="_blank">Open Playlist</a>
								</div>
							</div>
						</div>
					</div>
				);	
		}
	}

	render() {
		return (
			<div className="playlist container">
				{ this.renderContent() }
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		auth: state.auth,
		playlist: state.playlist
	};
}

export default connect(mapStateToProps, { createPlaylist })(CreatePlaylist);
