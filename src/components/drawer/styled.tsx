import { Box } from "@mui/material";
import styled from "styled-components";

export const StyledDrawer = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: #0f52ba;
  height: 100%;
  width: 340px;

  div.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 20px;
    min-width: 260px;
    margin-bottom: 30px;

    p {
      width: 178px;
      font-family: "Montserrat";
      font-style: normal;
      font-weight: 700;
      font-size: 27px;
      line-height: 33px;
      color: white;
    }

    button {
      background-color: black;
    }

    svg {
      color: #0f52ba;
    }

    button:hover svg {
      color: white;
    }
  }

  .scroll-y {
    max-height: 52vh;
    overflow-y: scroll;
  }

  div.price {
    display: flex;
    justify-content: space-between;
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 700;
    font-size: 28px;
    line-height: 15px;
    color: white;
    margin: 10px 40px 42px 40px;
  }

  .container {
    width: 100%;
  }

  .confirm {
    width: 100%;
    height: 97px;
    border-radius: 0;
  }

  .confirm > p {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 700;
    font-size: 28px;
    line-height: 15px;
    text-transform: capitalize;
  }

  .info {
    display: flex;

    .count {
      display: flex;
    }
  }

  div.content {
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
    align-items: center;
    text-align: center;

    p.empty {
      color: white;
      font-size: 24px;
      font-weight: 600;
    }
  }

  @media (min-width: 960px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-color: #0f52ba;
    height: 100%;
    width: 486px;

    div.header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-top: 20px;
      min-width: 395px;
      margin-bottom: 30px;

      p {
        width: 180px;
        font-family: "Montserrat";
        font-style: normal;
        font-weight: 700;
        font-size: 27px;
        line-height: 33px;
        color: white;
      }

      button {
        background-color: black;
      }

      svg {
        color: #0f52ba;
      }

      button:hover svg {
        color: white;
      }
    }

    .scroll-y {
      max-height: 52vh;
      overflow-y: scroll;
    }

    div.price {
      display: flex;
      justify-content: space-between;
      font-family: "Montserrat";
      font-style: normal;
      font-weight: 700;
      font-size: 28px;
      line-height: 15px;
      color: white;
      margin: 10px 40px 42px 40px;
    }

    .container {
      width: 100%;
    }

    .confirm {
      width: 100%;
      height: 97px;
      border-radius: 0;
    }

    .confirm > p {
      font-family: "Montserrat";
      font-style: normal;
      font-weight: 700;
      font-size: 28px;
      line-height: 15px;
      text-transform: capitalize;
    }

    .info {
      display: flex;

      .count {
        display: flex;
      }
    }
  }
`;
