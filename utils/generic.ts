export const capitalizeFirstLetter = (str: string): string => str.charAt(0).toUpperCase() + str.slice(1);

export const identifierOfTheme = (str: string, mode: string): boolean => {
    const word: string = str.split('(currently')[1];
    return word.includes(mode);
}