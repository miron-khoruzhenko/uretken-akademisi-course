import React, { Component } from 'react'
import styled from 'styled-components'

export default class DegBlock2 extends Component {
	constructor(props) {
		super(props);

		this.state = {
		}
	}

	render() {
	return (
		<Box className="">
			<Heading className="">Kelvin</Heading>
			<div className="flex justify-center align-top">
				<span className="text-4xl text-slate-800">{this.props.value}</span>
				<span className="text-2xl text-slate-800">K</span>
			</div>
		</Box>
	)
	}
}

const Box = styled.div`
	display: inline-block;

	border: 2px solid rgb(71, 85, 105);
	/* border-radius: 1000px; */

	width: 15rem;

	padding: .75rem 1rem;
	margin: 0.5rem;

	text-align: center;
`

const Heading = styled.h2`
	font-size: 1.5rem;
	line-height: 2rem;
	text-align: center;

	color: rgb(51 65 85);

	&::after{
		content: '';
		display: block;

		width: 70%;
		height: 2px;

		margin: .5rem auto;
		background-color: rgb(51 65 85);
	}
`