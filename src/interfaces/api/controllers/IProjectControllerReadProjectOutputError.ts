export interface IProjectControllerReadProjectOutputError {
  error: true;
  payload: {
    message: string;
    responseStatusCode: number;
  };
}
