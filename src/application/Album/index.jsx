import React, { useState } from 'react';
import { Container } from './style';
import { CSSTransition } from 'react-transition-group';
import Header from './../../baseUI/header/index';

function Album(props) {
	const [showStatus, setShowStatus] = useState(true);
	const handleBack = () => {
		setShowStatus(false);
	};

	return (
		<CSSTransition
			in={showStatus}
			timeout={300}
			// classNames='appear'
			classNames='fly'
			appear={true}
			unmountOnExit
			onExited={props.history.goBack}
		>
			{/* <Container>Album</Container>; */}
			{/* <Container></Container>; */}
			{/* 上面这一行在CSSTransition组件下多一个分号都会导致报错 */}
			<Container>
				<Header title={'返回'} handleClick={handleBack}></Header>
			</Container>
			{/* <Container></Container> */}
		</CSSTransition>
	);
}

export default React.memo(Album);
