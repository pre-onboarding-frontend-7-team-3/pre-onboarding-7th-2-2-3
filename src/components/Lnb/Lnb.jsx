/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { useLocation, useNavigate } from "react-router-dom";
import AdManagementIcon from "components/Lnb/AdManagementIcon";
import DashboardIcon from "components/Lnb/DashboardIcon";
import ROUTES from "constants/routes";

const Lnb = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  return (
    <Container>
      <LogoWrapper>
        <img src={"/assests/images/logo.png"} alt="로고" style={{ logoStyle }} />
      </LogoWrapper>
      <Menu>
        <Label>서비스</Label>
        <Select>
          <option value="매드업" defaultValue="매드업">
            매드업
          </option>
          <option value="서비스 추가하기" disabled>
            서비스 추가하기
          </option>
        </Select>
      </Menu>
      <Menu>
        <Label>광고 센터</Label>
        <ItemButton
          isSelected={pathname === ROUTES.DASHBOARD ? true : false}
          onClick={() => {
            navigate(ROUTES.DASHBOARD);
          }}
        >
          <DashboardIcon fill={pathname === ROUTES.DASHBOARD ? "#586CF5" : "#3A474E"} />
          <span>대시보드</span>
        </ItemButton>
        <ItemButton
          isSelected={pathname === ROUTES.ADMANAGEMENT ? true : false}
          onClick={() => {
            navigate(ROUTES.ADMANAGEMENT);
          }}
        >
          <AdManagementIcon fill={pathname === ROUTES.ADMANAGEMENT ? "#586CF5" : "#3A474E"} />
          <span>광고관리</span>
        </ItemButton>
      </Menu>
    </Container>
  );
};

// TODO: 크기, 컬러 상수화해야함
const Container = styled.nav`
  width: 320px;
  height: 100%;
`;

const LogoWrapper = styled.div`
  border-bottom: 1px solid #edeff1;
  padding: 60px 0;
  margin-left: 40px;

  cursor: pointer;
`;

const logoStyle = css`
  height: 30px;
  width: 124px;
`;

const Menu = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 40px;
  margin-top: 40px;
`;

const Label = styled.label`
  padding: 13px 20px;
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 14px;
  color: #94a2ad;
`;

const defaultStyle = css`
  width: 240px;
  height: 60px;
  padding: 20px;
  border-radius: 10px;
`;

const Select = styled.select`
  ${defaultStyle}
  border: 1px solid #d1d8dc;
  appearance: none;
  background: url("/assests/images/arrow_select.png") no-repeat right 26px center;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
`;

const ItemButton = styled.button`
  ${defaultStyle}
  display: flex;
  gap: 12px;
  background: ${({ isSelected }) => (isSelected ? "#edeff1" : "#ffffff")};
  color: ${({ isSelected }) => (isSelected ? "#586CF5" : "#3A474E")};

  span {
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
  }
`;

export default Lnb;
