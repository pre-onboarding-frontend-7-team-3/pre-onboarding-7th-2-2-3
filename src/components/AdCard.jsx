import styled from "styled-components";

const AdCard = ({ res }) => {
  const splitDate = (date) => {
    const res = date.split("T", 1);
    return res;
  };

  const endday = (startDate, endDate) => {
    const start = startDate.split("T", 1);
    const end = endDate.split("T", 1);
    return start, end;
  };

  const unit = (budget) => {
    const won = budget.toString();
    const sliceWon = won.slice(-4);
    const manwon = won.replace(sliceWon, "만원");
    return manwon;
  };

  const sales = (convValue) => {
    const won = `${convValue}`.slice(-4);
    const sale = won.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
    return sale;
  };

  return (
    <CardContainer>
      <Title>
        {res?.adType === "app"
          ? "앱광고_" + splitDate(res?.startDate)
          : "웹광고_" + splitDate(res?.startDate)}
      </Title>
      <InfoContainer>
        <InfoWrap>
          <span>상태</span>
          <p>{res?.status === "active" ? "진행중" : "종료"}</p>
        </InfoWrap>
        <InfoWrap>
          <span>광고 생성일</span>
          <p>
            {res?.status === "active"
              ? splitDate(res?.startDate)
              : splitDate(res?.startDate) + "(" + endday(res?.startDate, res?.endDate) + ")"}
          </p>
        </InfoWrap>
        <InfoWrap>
          <span>일 희망 예산</span>
          <p>{unit(res?.budget)}</p>
        </InfoWrap>
        <InfoWrap>
          <span>광고 수익률</span>
          <p>{res?.report?.roas}%</p>
        </InfoWrap>
        <InfoWrap>
          <span>매출</span>
          <p>{sales(res?.report?.convValue) + " 만원"}</p>
        </InfoWrap>
        <InfoWrap>
          <span>광고 비용</span>
          <p>{sales(res?.report?.cost) + " 만원"}</p>
        </InfoWrap>
      </InfoContainer>
    </CardContainer>
  );
};

export default AdCard;

const CardContainer = styled.div`
  width: 350px;
  height: 500px;
  /* background-color: green; */
  padding: 10px;
  margin: 30px;
  border-radius: 20px;
  border: 1px solid #94a2ad;
`;

const InfoContainer = styled.div`
  width: 320px;
  margin: 70px auto auto auto;
  border-bottom: 1px solid #94a2ad;
`;

const Title = styled.h3`
  width: 180px;
  height: 19px;
  margin: 20px auto 40px auto; ;
`;

const InfoWrap = styled.div`
  display: inline-flex;
  padding: 5px;
  width: 310px;
  height: 30px;
  border-top: 1px solid #94a2ad;
  font-size: 15px;
  span {
    text-align: left;
    color: #94a2ad;
    margin: 8px;
    margin-left: 20px;
  }

  p {
    /* position: absolute;
    left: 200px;
    margin-top: 8px; */
  }
`;
