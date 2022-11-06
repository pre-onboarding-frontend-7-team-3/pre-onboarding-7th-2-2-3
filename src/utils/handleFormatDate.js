import dayjs from "dayjs";

export const handleFormatDate = (startDate, endDate) => {
  const newStartDate = dayjs(startDate).format("YYYY년 MM월 DD일");
  const newEndDate = dayjs(endDate).format("YYYY년 MM월 DD일");

  const newDateRange = `${newStartDate} ~ ${newEndDate}`;

  return newDateRange;
};
