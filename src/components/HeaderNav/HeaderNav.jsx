import NavDatePicker from "components/NavDatePicker";
import PAGENAME from "constants/pageName";
import ROUTES from "constants/routes";
import { useLocation } from "react-router-dom";
import styled from "@emotion/styled";

const HeaderNav = () => {
  const { pathname } = useLocation();

  return (
    <Container>
      <span>{PAGENAME[pathname]}</span>
      {pathname === ROUTES.DASHBOARD && (
        <Wrapper>
          <NavDatePicker />
        </Wrapper>
      )}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 80px;
  word-break: keep-all;
  align-items: center;
  justify-content: space-between;
  padding: 40px;

  span {
    font-style: normal;
    font-weight: 900;
    font-size: 26px;
    line-height: 30px;
  }
`;

const Wrapper = styled.div`
  width: 270px;
  height: 24px;
`;

export default HeaderNav;
