import { ICampaignTypeControllerUpdateCampaignTypeInput } from './ICampaignTypeControllerUpdateCampaignTypeInput';
import { ICampaignTypeControllerUpdateCampaignTypeOutput } from './ICampaignTypeControllerUpdateCampaignTypeOutput';

export interface ICampaignTypeControllerUpdateCampaignType {
  (
    args: ICampaignTypeControllerUpdateCampaignTypeInput,
  ): Promise<ICampaignTypeControllerUpdateCampaignTypeOutput>;
}
