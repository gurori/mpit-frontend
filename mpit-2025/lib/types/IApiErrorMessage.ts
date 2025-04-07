export interface IApiErrorMessage {
  detail: string;
  instance?: string;
  statusCode: number;
  title?: string;
  type?: string;
}
