import React from 'react';
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

export default function fadeCSSTransition(Component) {

	return class Fade extends React.Component {
	
		render() {
			return (
				<ReactCSSTransitionGroup
					transitionAppear
					transitionAppearTimeout={200}
					transitionEnterTimeout={200}
					transitionLeaveTimeout={200}
					transitionName='trans-modal'>
					<Component {...this.props} ref='child' />
				</ReactCSSTransitionGroup>
			);
		}
	}
}