import { Alert } from "@mui/material";

import { IToastProps } from "@/@types";

import { StyledToast } from "./styled";

export const Toast: React.FC<IToastProps> = ({
  isOpen,
  setIsOpen,
  message,
}) => {
  return (
    <StyledToast>
      {isOpen && <Alert onClose={() => setIsOpen(!isOpen)}>{message}</Alert>}
    </StyledToast>
  );
};
