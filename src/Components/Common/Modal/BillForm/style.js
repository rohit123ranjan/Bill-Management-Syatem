import styled from "styled-components";
import COLORS from "../../../../lib/colors";

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 90;
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  background-color: #00000065;
  align-items: center;
  justify-content: center;

  .modal {
    width: 600px;
    max-width: 600px;
    background-color: ${COLORS.WHITE};
    padding: 22px;
    position: relative;
    border-radius: 6px;

    @media only screen and (max-width: 700px) {
      width: auto;
    }

    .close {
      position: absolute;
      top: -14px;
      right: -14px;
      font-size: 36px;
      width: 42px;
      height: 42px;
      background-color: ${COLORS.WHITE_75};
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 100%;
      cursor: pointer;
      float: right;
    }
  }

  .budget {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 10px;

    h4 {
      width: 100%;
      color: ${COLORS.TABLEGRAY};
      margin-top: 20px;
    }

    select {
      width: 100%;
      height: 42px;
      font-size: 18px;
      border: 1px solid ${COLORS.TABLEBLACK};
      border-radius: 4px;
      padding: 6px 12px;
      margin: 12px;
    }

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

export { ModalWrapper };
