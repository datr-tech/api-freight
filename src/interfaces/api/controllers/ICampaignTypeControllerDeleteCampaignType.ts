import { ICampaignTypeControllerDeleteCampaignTypeInput } from './ICampaignTypeControllerDeleteCampaignTypeInput';
import { ICampaignTypeControllerDeleteCampaignTypeOutput } from './ICampaignTypeControllerDeleteCampaignTypeOutput';

export interface ICampaignTypeControllerDeleteCampaignType {
  (
    args: ICampaignTypeControllerDeleteCampaignTypeInput,
  ): Promise<ICampaignTypeControllerDeleteCampaignTypeOutput>;
}
