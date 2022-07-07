import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
	width: 360px;
	margin-bottom: 45px;
	cursor: pointer;
`;

const Image = styled.img`
	width: 100%;
	height: 202px;
	background-color: #999;
`;

const Details = styled.div`
	display: flex;
	margin-top: 16px;
	gap: 12px;
`;

const ChannelImage = styled.img`
	width: 36px;
	height: 36px;
	border-radius: 50%;
	background-color: #999;
`;

const Texts = styled.div``;

const Title = styled.h1`
	font-size: 16px;
	font-weight: 500;
	color: ${({ theme }) => theme.text};
`;

const ChannelName = styled.h2`
	font: 14px;
	color: ${({ theme }) => theme.textSoft};
	margin: 9px 0;
`;

const Info = styled.div`
	font-size: 14px;
	color: ${({ theme }) => theme.textSoft};
`;

const Card = () => {
	return (
		<Link to='/video/test' style={{ textDecoration: 'none' }}>
			<Container>
				<Image src='https://wallpapers.com/images/high/mini-youtube-logo-in-black-ts6y4jrcv80kkxxp.jpg' />
				<Details>
					<ChannelImage src='https://upload.wikimedia.org/wikipedia/commons/0/09/YouTube_full-color_icon_%282017%29.svg' />
					<Texts>
						<Title>Video Title</Title>
						<ChannelName>Channel Name</ChannelName>
						<Info>93K views | 1 day ago</Info>
					</Texts>
				</Details>
			</Container>
		</Link>
	);
};

export default Card;
