import { Drawer } from "../drawer";
import { StyledHeader } from "./styled";

export const Header = () => {
  return (
    <StyledHeader>
      <div>
        <p className="title">MKS</p>
        <p className="subTitle">Sistemas</p>
      </div>
      <Drawer />
    </StyledHeader>
  );
};
