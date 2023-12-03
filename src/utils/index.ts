export const unique = <T>(arr: T[]): T[] => [...new Set(arr)];
export const decodeAmp = (str: string) => str.replace(/&amp;/g, "&");
