// TODO 有Bug
import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
const Content = styled.div`
	width: 100%;
	overflow: hidden;
	position: relative;
	height: 32px;
`;
const Marquee = props => {
	const txt = useRef();
	const outer = useRef();
	useEffect(() => {
		const outerWidth = outer.current.offsetWidth;
		const txtWidth = txt.current.offsetWidth;
		let w = outerWidth;
		const inter = setInterval(() => {
			w = w + txtWidth === 0 ? outerWidth : w - 1;
			txt.current.style.transform = `translate(${w}px)`;
		}, 10);
		return () => {
			clearInterval(inter);
		};
	}, []);
	return <Content>{props.data}</Content>;
};
export default Marquee;
