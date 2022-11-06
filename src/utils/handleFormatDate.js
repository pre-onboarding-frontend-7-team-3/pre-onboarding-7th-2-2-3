import dayjs from "dayjs";

export const dateConverterToKorean = (date, format) => dayjs(date).format(format);

export const handleFormatDate = (startDate, endDate) => {
  const newStartDate = dateConverterToKorean(startDate, "YYYY년 MM월 DD일");
  const newEndDate = dateConverterToKorean(endDate, "YYYY년 MM월 DD일");

  const newDateRange = `${newStartDate} ~ ${newEndDate}`;

  return newDateRange;
};
