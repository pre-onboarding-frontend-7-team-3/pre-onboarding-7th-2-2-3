import styled from "@emotion/styled";
import HeaderNav from "components/HeaderNav";
import Lnb from "components/Lnb";

const DefaultTemplate = ({ children }) => {
  return (
    <Container>
      <Lnb />
      <PageWrapper>
        <HeaderNav />
        {/* // TODO: HEADER 추가해야함 */}
        {children}
      </PageWrapper>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  height: 100%;
`;

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background: #f6f7f8;
`;

export default DefaultTemplate;
