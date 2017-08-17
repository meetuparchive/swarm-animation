// uses a HOC (mixin replacement) for the animation
import React from 'react';
import fadeCSSTransition from './ModalAnimation';
import cx from 'classNames';

// constants etc {{{
	
export const BREAKPOINTS = {
	s: '440px',
	m: '640px',
	l: '840px',
	xl: '1024px',
};

export const MEDIA_QUERIES = {
	small: `screen and (min-width: ${BREAKPOINTS.s})`,
	medium: `screen and (min-width: ${BREAKPOINTS.m})`,
	large: `screen and (min-width: ${BREAKPOINTS.l})`,
	huge: `screen and (min-width: ${BREAKPOINTS.xl})`,
};

export const MEDIA_SIZES = {
	xxs: '12',
	xs: '16',
	s: '24',
	m: '36',
	l: '48',
	xl: '72',
	xxl: '120',
};

export const MODAL_CLOSE_BUTTON = "modal-closeButton";
export const DEFAULT_MARGIN_TOP = "10vh";
export const MARGIN_TOP_OFFSET = 36;

export const getModalPosition = (
	scrollPosition,
	viewportHeight,
	isFullScreen,
	isMobileSize
) => {
	// full screen dialogs should be flush with top of the viewport
	if (isFullScreen) {
		return "0px";
	}

	// for mobile-sized viewports, return the scroll position without a gutter
	if (isMobileSize) {
		return scrollPosition;
	}

	// set the margin-top based on scroll position unless user is above fold
	return scrollPosition > viewportHeight
		? scrollPosition + MARGIN_TOP_OFFSET
		: DEFAULT_MARGIN_TOP;
};
// }}} end constants

export const Modal = fadeCSSTransition(class extends React.Component {
	constructor(props) {
		super(props);
		this.onDismiss = this.onDismiss.bind(this);
		this.onKeyDown = this.onKeyDown.bind(this);

		this.state = {
			topPosition: DEFAULT_MARGIN_TOP // matches default margin-top in CSS
		};
	}

	onDismiss(e) {
		e.stopPropagation();

		if (this.props.onDismiss) {
			this.props.onDismiss(e);
		}
	}

	onKeyDown(e) {
		if (e.key === "Escape") {
			this.onDismiss(e);
		}
	}

	componentDidMount() {
		if (!this.props.fullscreen && typeof window.matchMedia != "undefined") {
			this.mediaQuery = window.matchMedia(MEDIA_QUERIES.medium);

			this.handleMediaChange = () => {
				this.setState({
					topPosition: getModalPosition(
						window.pageYOffset,
						Math.max(
							document.documentElement.clientHeight,
							window.innerHeight || 0
						),
						this.props.fullscreen,
						this.mediaQuery && !this.mediaQuery.matches
					)
				});
			};

			// fire on mount, _then_ listen for matchMedia changes
			this.handleMediaChange();
			this.mqListener = this.mediaQuery.addListener(
				this.handleMediaChange
			);
		}
	}

	componentWillUnmount() {
		this.mediaQuery &&
			this.mediaQuery.removeListener(this.handleMediaChange);
	}

	render() {
		const {
			className,
			children,
			fullscreen,
			heroBgColor,
			heroBgImage,
			heroContent,
			hideHeroScrim,
			inverted,
			closeArea,
			showModal,
			modalClassName,
			...other
		} = this.props;

		delete other.onDismiss; // onDismiss is consumed in this.onDismiss - do not pass it along to children

		const classNames = cx(className, "modal");

		const modalClasses = cx(`trans-modal view view--modal ${modalClassName}`, {
			"view--modalFull": fullscreen,
			"view--modalSnap": !fullscreen,
		});

		const dismissButtonClasses = cx(MODAL_CLOSE_BUTTON, "button--reset");

		const overlayShim = (
			<div className="overlayShim" onClick={this.onDismiss}>
				<div className="inverted" />
			</div>
		);

		const closeElement =
			closeArea &&
			<div className="padding--all">
				<a onClick={this.onDismiss}
					className={dismissButtonClasses} >
					X
				</a>
			</div>;

		return (
			<div
				role="dialog"
				tabIndex="0"
				onKeyDown={this.onKeyDown}
				className={classNames}
				{...other}>

				{!fullscreen && overlayShim}

				<div
					className={modalClasses}
					style={{ marginTop: this.state.topPosition }}
				>
					I am a modal

					{children}
				</div>
			</div>
		);
	}
});

Modal.defaultProps = {
	fullscreen: false,
	closeArea: true
};
