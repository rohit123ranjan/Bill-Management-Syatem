import styled from "styled-components";
import COLORS from "../../../lib/colors";

const Wrapper = styled.div`
  height: auto;
  width: 100%;
  padding: 20px;
  background-color: ${COLORS.WHITE};

  h2 {
    margin-left: 12px;
    color: ${COLORS.DARKBLUETEXT};
  }

  .subtext {
    display: flex;
    align-items: center;
    font-size: 14px;
    margin-top: 12px;
    color: ${COLORS.BLACK};
  }

  .dot {
    display: block;
    width: 6px;
    height: 6px;
    border-radius: 100%;
    margin-right: 10px;
    background-color: rgb(100, 134, 255);
  }

  .category {
    display: flex;
    align-items: center;

    h3 {
      font-weight: normal;
      margin-left: 12px;
    }

    select {
      width: 280px;
      height: 42px;
      font-size: 18px;
      border: 1px solid #90a0b7;
      background-color: #f4f5f9;
      border-radius: 4px;
      padding: 6px 12px;
      margin: 20px;
    }
  }

  .table {
    overflow-x: auto;
    .table__box {
      width: 100%;
      border-collapse: collapse;
      border-spacing: 0;
      background-color: transparent;

      .table__header {
        background-color: ${COLORS.LIGHT};
        border: 6px solid ${COLORS.WHITE};
      }

      .action__icon {
        display: flex;
        justify-content: space-around;
        align-items: center;

        span {
          cursor: pointer;
        }
      }

      td,
      th {
        text-align: left;
        padding: 20px 10px;
      }

      .table_list {
        border: 6px solid ${COLORS.WHITE};
      }
    }
  }
`;

export { Wrapper };
