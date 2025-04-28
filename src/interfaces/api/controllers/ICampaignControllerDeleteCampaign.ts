import { ICampaignControllerDeleteCampaignInput } from './ICampaignControllerDeleteCampaignInput';
import { ICampaignControllerDeleteCampaignOutput } from './ICampaignControllerDeleteCampaignOutput';

export interface ICampaignControllerDeleteCampaign {
  (
    args: ICampaignControllerDeleteCampaignInput,
  ): Promise<ICampaignControllerDeleteCampaignOutput>;
}
