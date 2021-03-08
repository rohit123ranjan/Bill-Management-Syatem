import styled from "styled-components";
import COLORS from "../../../lib/colors";

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 300px;
  width: 500px;
  margin: 20px;
  border-radius: 8px;
  background-color: ${COLORS.WHITE};
  align-items: center;
  cursor: pointer;
  box-shadow: 0px 20px 60px 0px #00000015;

  h1 {
    font-size: 48px;
    margin-top: 20px;
    color: ${COLORS.TABLEBLACK};

    @media only screen and (max-width: 600px) {
      font-size: 32px;
    }
  }

  h4 {
    width: 80%;
    font-weight: normal;
    margin-top: 40px;
    color: ${COLORS.TABLEGRAY};
  }

  .budget {
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;

    input {
      width: 100%;
      height: 42px;
      font-size: 18px;
      border: 1px solid ${COLORS.TABLEBLACK};
      border-radius: 4px;
      padding: 6px 12px;
      margin: 12px;
    }

    .budget__error {
      width: 100%;
      color: ${COLORS.RED};
    }

    .budget__submit {
      width: 100%;
      text-align: center;
      height: 42px;
      border-radius: 4px;
      color: ${COLORS.WHITE};
      background-color: ${COLORS.DARKBLUETEXT};
      border: none;
      margin: 22px;
      font-size: 18px;
    }
  }
`;

export { CardWrapper };
