import { Stack } from "@mui/material";
import styled from "styled-components";

export const StyledToast = styled(Stack)`
  position: fixed;
  top: 10%;
  right: 10px;
  transform: translate(0, -20%);
  @media (min-width: 960px) {
    top: 20%;
    right: 20px;
    transform: translate(0, -20%);
  }
`;
