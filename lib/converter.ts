export const bytesMB = (value: number, type: '>' | '<') => {
  return type === '>' ? value / 1048576 : value * 1048576;
};
