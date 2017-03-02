export type Action = { type: string; }
export type ThunkAction = (dispatch: DispatchFunction, getState: () => GetStateFunction) => any;
export type DispatchFunction = (action: Action | ThunkAction) => any;
export type GetStateFunction = () => object;

type PayloadAction<Payload> = {
  type: string;
  payload: Payload;
  error?: boolean;
  meta?: any;
}
