// 양수의 정수인지 확인
export const isPositiveInteger = (value) => {
  return /^[1-9][0-9]*$/.test(value);
};
