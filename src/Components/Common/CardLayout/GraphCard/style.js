import styled from "styled-components";
import COLORS from "../../../../lib/colors";

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 360px;
  width: 500px;
  max-width: 500px;
  margin: 20px;
  padding: 20px;
  border-radius: 12px;
  background-color: ${COLORS.WHITE};
  box-shadow: 0px 20px 60px 0px #00000035;
  cursor: pointer;

  @media only screen and (max-width: 1300px) {
    margin-top: 40px;
  }

  @media only screen and (max-width: 650px) {
    width: auto;
  }

  .chart {
    width: 300px;
  }

  .round__icon {
    width: 42px;
    height: 42px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100%;
    border: 2px solid ${COLORS.BLACK};
    margin-bottom: 16px;
  }

  h2 {
    margin: 12px;
    color: ${COLORS.TABLEGRAY};
  }
`;

export { CardWrapper };
