export interface IProjectControllerCreateProjectOutputError {
  error: true;
  payload: {
    message: string;
    responseStatusCode: number;
  };
}
