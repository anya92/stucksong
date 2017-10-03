import React, { Component } from 'react';
import { connect } from 'react-redux';

export default function(ComposedComponent) {
	class Redirect extends Component {
		componentDidMount() {
			if (this.props.auth) {
				this.props.history.push('/top-tracks');
			}
		}
		render() {
			return <ComposedComponent {...this.props} />;
		}
	}

	function mapStateToProps(state) {
		return {
			auth: state.auth
		};
	}

	return connect(mapStateToProps)(Redirect);
}
