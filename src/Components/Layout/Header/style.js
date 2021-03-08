import styled from "styled-components";
import COLORS from "../../../lib/colors";

const Wrapper = styled.div`
  display: flex;
  height: 64px;
  width: 100%;
  background-color: ${COLORS.WHITE};
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #c2cfe0;

  h2 {
    color: ${COLORS.DARKBLUETEXT};
  }
`;

export { Wrapper };
