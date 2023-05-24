export const jsonParse = <T = any>(value?: string | null): T | null => {
  if (!value) return null;

  try {
    return JSON.parse(value);
  } catch (error) {
    console.log(error);
    return null;
  }
};
