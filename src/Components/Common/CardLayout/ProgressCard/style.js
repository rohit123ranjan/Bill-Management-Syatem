import styled from "styled-components";
import COLORS from "../../../../lib/colors";

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 360px;
  width: 500px;
  max-width: 500px;
  margin: 20px;
  border-radius: 12px;
  background-color: ${COLORS.BLACK};
  cursor: pointer;
  box-shadow: 0px 20px 60px 0px #00000035;
  padding: 16px;

  @media only screen and (max-width: 1300px) {
    margin-top: 40px;
  }

  @media only screen and (max-width: 650px) {
    width: auto;
  }

  h3 {
    color: ${COLORS.WHITE} !important;
  }

  .price {
    font-size: 34px;
    font-weight: bold;
    color: ${COLORS.BLUE};
    margin: 10px 0 0 0;
  }

  .progress {
    h5 {
      color: ${COLORS.WHITE_75};
      margin-top: 22px;
    }
    .progress__bar {
      display: flex;
      flex-direction: column;

      span {
        color: ${COLORS.WHITE};
        font-weight: bold;
        font-size: 12px;
        position: relative;
      }

      .warning {
        position: absolute;
        right: -64px;
        top: -6px;
        color: ${COLORS.WARNING};
      }

      .bar {
        margin: 8px 12px 8px 0;
        height: 18px;
        display: flex;
      }

      .bar__fixed {
        width: 75%;
      }
      .bar__variable {
        width: 45%;
      }
      .bar__save {
        width: 35%;
      }
    }
  }
`;

export { CardWrapper };
