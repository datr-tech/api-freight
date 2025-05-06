export interface IProjectControllerDeleteProjectOutputError {
  error: true;
  payload: {
    message: string;
    responseStatusCode: number;
  };
}
