import { ICampaignTypeControllerReadCampaignTypeInput } from './ICampaignTypeControllerReadCampaignTypeInput';
import { ICampaignTypeControllerReadCampaignTypeOutput } from './ICampaignTypeControllerReadCampaignTypeOutput';

export interface ICampaignTypeControllerReadCampaignType {
  (
    args: ICampaignTypeControllerReadCampaignTypeInput,
  ): Promise<ICampaignTypeControllerReadCampaignTypeOutput>;
}
