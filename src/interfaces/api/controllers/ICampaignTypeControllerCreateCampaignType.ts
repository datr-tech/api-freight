import { ICampaignTypeControllerCreateCampaignTypeInput } from './ICampaignTypeControllerCreateCampaignTypeInput';
import { ICampaignTypeControllerCreateCampaignTypeOutput } from './ICampaignTypeControllerCreateCampaignTypeOutput';

export interface ICampaignTypeControllerCreateCampaignType {
  (
    args: ICampaignTypeControllerCreateCampaignTypeInput,
  ): Promise<ICampaignTypeControllerCreateCampaignTypeOutput>;
}
