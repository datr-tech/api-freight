export interface ITemplateControllerReadTemplateOutputError {
  error: true;
  payload: {
    message: string;
    responseStatusCode: number;
  };
}
