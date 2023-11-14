import { Box } from "@mui/material";
import styled from "styled-components";

export const StyledSkeleton = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background: white;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
  border-radius: 8px;
  width: 250.5px;
  height: 328px;

  .img {
    width: 127.8px;
    height: 158.82px;
    margin-top: 20px;
    margin-left: 10px;
    margin-right: 10px;
  }

  .section {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-left: 10px;
    margin-right: 10px;
    gap: 2px;
    .title {
      height: 43.73px;
      width: 142.77px;
    }
    .price {
      width: 73.69px;
      height: 29.92px;
    }
  }

  .description {
    width: 221.06px;
    height: 28.77px;
  }

  .button {
    width: 100%;
    height: 36.72px;
  }

  @media (min-width: 960px) {
    width: 217.56px;
    height: 285px;

    .img {
      width: 147.86px;
      height: 138px;
    }

    .section {
      .title {
        height: 43.73px;
        width: 142.77px;
      }
      .price {
        width: 64px;
        height: 26px;
      }
    }

    .description {
      width: 192px;
      height: 25px;
    }

    .button {
      width: 100%;
      height: 31.91px;
    }
  }
`;
