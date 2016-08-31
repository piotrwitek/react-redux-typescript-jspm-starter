export function logToConsole(...rest) {
  if (!System.production) {
    // tslint:disable-next-line
    console.log('>>> LOGGER:', ...rest);
  }
}

export function logRejection(err) {
  console.log('Request Failed:', err);
};
