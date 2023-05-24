export function useLocalStorage() {
  const setItem = (key: string, data: any) => {
    if (typeof window === 'undefined') return;
    if (typeof data !== 'string') {
      data = JSON.stringify(data || '');
    }
    window.localStorage.setItem(key, data);
  };

  const getItem = (key: string) => {
    if (typeof window === 'undefined') return;
    return window.localStorage.getItem(key);
  };

  const removeItem = (key: string) => {
    if (typeof window === 'undefined') return;
    return window.localStorage.removeItem(key);
  };

  return Object.freeze({ setItem, getItem, removeItem });
}
