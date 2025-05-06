export interface ICampaignControllerDeleteCampaignOutputError {
  error: true;
  payload: {
    message: string;
    responseStatusCode: number;
  };
}
