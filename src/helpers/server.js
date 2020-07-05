export const fakeServerRequest = (data) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(data), 3000);
  });
};
