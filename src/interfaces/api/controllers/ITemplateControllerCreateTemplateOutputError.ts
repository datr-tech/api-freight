export interface ITemplateControllerCreateTemplateOutputError {
  error: true;
  payload: {
    message: string;
    responseStatusCode: number;
  };
}
