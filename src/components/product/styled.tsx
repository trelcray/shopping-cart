import styled from "styled-components";

export const StyledProduct = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background: white;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
  border-radius: 8px;
  width: 250.5px;
  height: 328px;

  img {
    width: 127.8px;
    height: 158.82px;
    margin-top: 20px;
    margin-left: 10px;
    margin-right: 10px;
  }

  section {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-left: 10px;
    margin-right: 10px;

    .title {
      color: #2c2c2c;
      width: 100%;
      max-height: 43.73px;
      max-width: 142.77px;
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 19px;
    }
    span {
      background-color: #373737;
      border-radius: 5px;
      padding: 5px 10px;
      .price {
        font-family: "Montserrat";
        font-style: normal;
        font-weight: 700;
        font-size: 15px;
        line-height: 15px;
        color: white;
      }
    }
  }

  .description {
    color: #2c2c2c;
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 300;
    font-size: 10px;
    line-height: 12px;
    margin-left: 10px;
    margin-right: 10px;
  }

  button {
    width: 100%;
    height: 36.72px;

    p {
      font-family: "Montserrat";
      font-style: normal;
      font-weight: 600;
      font-size: 14px;
      line-height: 18px;
    }
  }

  @media (min-width: 960px) {
    width: 217.56px;
    height: 285px;

    img {
      width: 124px;
      height: 138px;
    }

    section {
      margin: 0px 10px;
      gap: 5px;
      .title {
        width: 100%;
        max-height: 38px;
        max-width: 120px;
        font-family: "Montserrat";
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
      }

      .price {
        font-family: "Montserrat";
        font-style: normal;
        font-weight: 700;
        font-size: 15px;
        line-height: 15px;
      }
    }

    .description {
      font-family: "Montserrat";
      font-style: normal;
      font-weight: 300;
      font-size: 10px;
      line-height: 12px;
      margin-left: 10px;
      margin-right: 10px;
    }

    button {
      width: 100%;

      p {
        margin-top: 0.2rem;
      }
    }
  }
`;
