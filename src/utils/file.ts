export const getPublicLocalMedia = (fileName: string) => {
  return process.env.NEXT_PUBLIC_BASE_PATH
    ? `/${process.env.NEXT_PUBLIC_BASE_PATH}/${fileName}`
    : `/${fileName}`;
};
