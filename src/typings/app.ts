interface FluxStandardAction<Payload> {
  type?: string;
  payload?: Payload;
  error?: boolean;
  meta?: any;
}
