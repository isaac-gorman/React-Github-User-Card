import React from "react";
import styled from "styled-components";

const CardWrapper = styled.div`
  width: 200px;
  height: 400px;
  display: flex;
  flex-direction: column;
`;

const UserPhoto = styled.img`
  width: 100%;
`;

const UserName = styled.h2`
  font-size: 12px;
`;

const Followers = styled.h6`
  font-size: 11px;
`;
const Following = styled.h6`
  font-size: 11px;
`;

// I want to set it to just the state so all I have to do is just pass the state

function Card(props) {
  return (
    <div>
      <CardWrapper>
        <UserPhoto src={props.state.avatar_url} />
        <UserName>{props.state.name}</UserName>
        <Followers>Followers: {props.state.followers}</Followers>
        <Following>Following: {props.state.following}</Following>
      </CardWrapper>
    </div>
  );
}
export default Card;
