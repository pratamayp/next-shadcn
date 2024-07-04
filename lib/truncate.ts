export const truncateFileName = (fileName: string, maxLength: number) => {
  const extension = fileName.split('.').pop();
  if (!extension) return fileName;

  const nameWithoutExtension = fileName.slice(0, -(extension.length + 1));
  if (fileName.length <= maxLength) {
    return fileName;
  }

  const charsToShow = maxLength - extension.length - 3;
  const frontChars = Math.ceil(charsToShow / 2);
  const backChars = Math.floor(charsToShow / 2);

  return `${nameWithoutExtension.slice(0, frontChars)}...${nameWithoutExtension.slice(-backChars)}.${extension}`;
};
