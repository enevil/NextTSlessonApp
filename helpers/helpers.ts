import { Dispatch, SetStateAction } from 'react';

export const parsePrice = (price: number): string =>
  price
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
    .concat(' ₽');

export const applyDeclension = (num: number, declensions: [string, string, string]): string => {
  if ((num % 10 > 4 && num % 10 < 10) || num % 10 === 0 || (num > 9 && num < 21)) return declensions[2];
  if (num % 10 === 1) return declensions[0];
  return declensions[1];
};

export const useErrorMesage = (errorType: string | undefined): string | null => {
  if (!errorType) return null;
  switch (errorType) {
    case 'required':
      return 'Заполните поле';
    default:
      return null;
  }
};

export const throttleDispatch = <T>(f: Dispatch<SetStateAction<T>>, ms: number) => {
  let isCooldown = false;
  let lastArgs: T;
  const throttled = (value: T) => {
    lastArgs = value;
    if (isCooldown) return;
    isCooldown = true;
    const timer = setTimeout(() => {
      isCooldown = false;
      f(lastArgs);
      clearTimeout(timer);
    }, ms);
  };
  return throttled;
};
