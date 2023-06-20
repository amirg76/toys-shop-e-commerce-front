import styled from "styled-components";
export const HomeWaveShapeContainer = styled.div`
  position: absolute;
  top: ${(props) => props.direction === "up" && 0};

  left: 0;
  bottom: ${(props) => props.direction === "down" && 0};
  width: 100%;
  overflow: hidden;
  line-height: 0;
  fill: ${(props) => props.color};
  transform: ${(props) => props.direction === "down" && "rotate(180deg)"};
`;

export const HomeWaveShapeSvg = styled.svg`
  position: relative;
  display: block;

  width: calc(148% + 1.3px);
  height: 397px;
`;
