export const getStorage = (key, defaultValue) => {
  const stored = localStorage.getItem(key);
  return stored ? JSON.parse(stored) : defaultValue;
};

export const setStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};