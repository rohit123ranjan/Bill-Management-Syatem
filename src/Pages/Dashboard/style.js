import styled from "styled-components";
import COLORS from "../../lib/colors";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  .budget__wrapper {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  section {
    display: flex;
    flex-direction: column;
    padding: 80px 30px;
    padding-bottom: 150px;
    width: 100%;
    height: auto;
    background-color: ${COLORS.WHITE};

    .list__bills {
      margin-top: 60px;
    }

    .row {
      display: flex;
      justify-content: space-between;

      h3 {
        color: ${COLORS.DARKBLUETEXT};
      }
      .text {
        max-width: 500px;
        display: block;
        font-size: 14px;
        padding-top: 20px;
        color: ${COLORS.DARKBLUETEXT};
      }

      .col__card {
        display: flex;

        @media only screen and (max-width: 960px) {
          flex-direction: column;
        }
      }

      @media only screen and (max-width: 1300px) {
        flex-direction: column;
      }
    }
  }

  footer {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100px;
    line-height: 24px;
    background-color: #e4e4e4;

    @media only screen and (max-width: 600px) {
      display: block;
      padding: 12px;
    }

    span {
      font-weight: bold;
      font-style: italic;
    }
  }
`;

export { Wrapper, Container };
