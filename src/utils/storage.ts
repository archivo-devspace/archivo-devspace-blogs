/* eslint-disable */
// Utility functions for localStorage


export const saveString = (key:string, value:any) => {
  try {
    localStorage.setItem(key, value);
    return true;
  } catch (error) {
    return false;
  }
};

export const save = (key:string, value:any) => {
  return saveString(key, JSON.stringify(value));
};

export const get = (key:string) => {
  try {
    const itemString = localStorage.getItem(key);
    if (itemString) {
      return JSON.parse(itemString);
    } else {
      return null;
    }
  } catch (error) {
    return null;
  }
};

export default {
  saveString,
  save,
  get,
};
