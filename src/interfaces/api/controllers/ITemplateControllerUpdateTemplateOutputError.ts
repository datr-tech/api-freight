export interface ITemplateControllerUpdateTemplateOutputError {
  error: true;
  payload: {
    message: string;
    responseStatusCode: number;
  };
}
