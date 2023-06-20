import styled from "styled-components";

export const StarRatingCountiner = styled.div`
  height: 5%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: ${(props) => props.direction};
  margin: 1vh auto;
`;
