// tslint:disable-next-line
export function logToConsole(...restParams: any[]) {
  if (!System.production) {
    console.log('>>> LOGGER:', ...restParams);
  }
}

export function logRejection(err: any) {
  console.log('Request Failed:', err);
};
