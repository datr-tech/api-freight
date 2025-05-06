export interface ICampaignControllerReadCampaignOutputError {
  error: true;
  payload: {
    message: string;
    responseStatusCode: number;
  };
}
