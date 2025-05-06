export interface ITemplateControllerDeleteTemplateOutputError {
  error: true;
  payload: {
    message: string;
    responseStatusCode: number;
  };
}
