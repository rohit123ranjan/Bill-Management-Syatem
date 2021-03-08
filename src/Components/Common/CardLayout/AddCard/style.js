import styled from "styled-components";
import COLORS from "../../../../lib/colors";

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 150px;
  width: 200px;
  margin: 20px;
  border: 1px dashed ${COLORS.BLUE};
  border-radius: 12px;
  background-color: ${COLORS.WHITE};
  justify-content: center;
  align-items: center;
  cursor: pointer;
  // box-shadow: 0px 20px 60px 0px #00000015;

  @media only screen and (max-width: 600px) {
    margin: 0 auto;
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
    color: ${COLORS.TABLEGRAY};
  }
`;

export { CardWrapper };
