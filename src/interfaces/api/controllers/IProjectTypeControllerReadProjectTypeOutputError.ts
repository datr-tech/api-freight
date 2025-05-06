export interface IProjectTypeControllerReadProjectTypeOutputError {
  error: true;
  payload: {
    message: string;
    responseStatusCode: number;
  };
}
