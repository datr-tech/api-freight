export interface ICampaignControllerCreateCampaignOutputError {
  error: true;
  payload: {
    message: string;
    responseStatusCode: number;
  };
}
