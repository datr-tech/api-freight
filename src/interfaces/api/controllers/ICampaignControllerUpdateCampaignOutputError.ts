export interface ICampaignControllerUpdateCampaignOutputError {
  error: true;
  payload: {
    message: string;
    responseStatusCode: number;
  };
}
