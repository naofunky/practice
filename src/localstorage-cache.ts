import { Cache, State } from 'swr';

export function localStorageProvider(): Cache<string> {
  return {
    get: (key: string) => {
      const value = localStorage.getItem(key);
      if (value) {
        return JSON.parse(value);
      }
      return null;
    },
    set: (key: string, value: State<string>) => {
      localStorage.setItem(key, JSON.stringify(value));
    },
    delete: (key: string) => {
      localStorage.removeItem(key);
    },
    keys: () => {
      const keys: string[] = [];
      for (let i = 0; i < localStorage.length; i++) {
        keys.push(localStorage.key(i)!);
      }
      return keys[Symbol.iterator]();
    },
  };
}
