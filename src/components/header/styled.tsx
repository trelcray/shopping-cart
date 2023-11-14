import styled from "styled-components";

export const StyledHeader = styled.header`
  position: fixed;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 101px;
  z-index: 20;
  background-color: #0f52ba;
  color: white;

  div {
    display: flex;
    flex-direction: row;
    height: 2.75rem;
    align-items: center;
    margin-left: 1.5rem;
  }

  .title {
    display: flex;
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 600;
    font-size: 32px;
    line-height: 19px;
  }

  .subTitle {
    display: flex;
    align-items: end;
    height: 2rem;
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 19px;
    margin-left: 0.5rem;
  }

  button {
    display: flex;
    width: 52px;
    height: 26px;
    margin-right: 1.5rem;
    border-radius: 8px;

    p {
      margin-left: 0.2rem;
      font-family: "Montserrat";
      font-style: normal;
      font-weight: 700;
      font-size: 12px;
      line-height: 14.63px;
    }

    span {
      svg {
        width: 10.98px;
        height: 10.04px;
      }
    }
  }

  @media (min-width: 960px) {
    height: 6.313rem;

    div {
      height: 2.75rem;
    }

    .title {
      margin-left: 4.063rem;
      font-family: "Montserrat";
      font-style: normal;
      font-weight: 600;
      font-size: 40px;
      line-height: 19px;
    }

    .subTitle {
      height: 2rem;
      margin-left: 0.5rem;
      font-family: "Montserrat";
      font-style: normal;
      font-weight: 300;
      font-size: 20px;
      line-height: 19px;
    }

    button {
      height: 2.813rem;
      width: 5.625rem;
      margin-right: 5.5rem;
      border-radius: 8px;

      p {
        margin-left: 0.2rem;
        font-family: "Montserrat";
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        line-height: 22px;
      }

      span {
        svg {
          width: 18px;
          height: 18px;
          margin-bottom: 0.1px;
        }
      }
    }
  }
`;
