export const getUniqueValuesFromArr = (
  arr: { [key: string]: any }[],
  str: string
) => {
  const allResults = arr.map((wow) => wow[str]);
  const uniqueResults = [...new Set(allResults)];
  return uniqueResults;
};
