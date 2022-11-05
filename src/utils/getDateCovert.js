// export function getDateConvert(getDate, symbol = "-") {
//   console.log(`지금 getDate 형식은 ?? >> ${typeof getDate}`);
//   let date = typeof getDate === Object ? getDate : new Date(getDate);
//   if (typeof symbol !== String) {
//     symbol = symbol.toString();
//   }

//   let year, month, day, hours, minutes, seconds;
//   year = date.getFullYear();
//   month = date.getMonth() + 1;
//   day = date.getDate();
//   hours = date.getHours();
//   minutes = date.getMinutes();
//   seconds = date.getSeconds();
//   let timeArr = [year, month, day, hours, minutes, seconds];

//   console.log(`timeArr에 들어있는 값 ${timeArr}`);

//   let stringDate = timeArr.reduce((addString, time) => {
//     console.log(`반복문 내의 현재 time 값 ${time}`);
//     if (time === year) {
//       console.log("if(time === year) 실행, 다음 값을 addString에 더해준다. >> ", time);
//       addString += time;
//     } else {
//       console.log("else 실행");
//       if (time < 10) {
//         console.log("time이 10미만이므로 ");
//       } else {
//         console.log("time이 10이상이므로 ");
//       }
//       console.log(
//         "다음 값을 addString에 더해준다. >> ",
//         (time < 10 ? symbol + "0" : symbol) + time,
//       );

//       addString += (time < 10 ? symbol + "0" : symbol) + time;
//     }

//     return addString;
//   }, "");

//   console.log("최종 반환된 시간 값", { stringDate, symbol });

//   return { stringDate, symbol };
// }
