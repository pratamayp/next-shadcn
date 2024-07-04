export const bytesMB = (value: number, type: '>' | '<') => {
  return type === '>' ? value / (1024 * 1024) : value * (1024 * 1024);
};
