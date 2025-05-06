export interface IProjectControllerUpdateProjectOutputError {
  error: true;
  payload: {
    message: string;
    responseStatusCode: number;
  };
}
