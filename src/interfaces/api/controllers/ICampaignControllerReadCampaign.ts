import { ICampaignControllerReadCampaignInput } from './ICampaignControllerReadCampaignInput';
import { ICampaignControllerReadCampaignOutput } from './ICampaignControllerReadCampaignOutput';

export interface ICampaignControllerReadCampaign {
  (
    args: ICampaignControllerReadCampaignInput,
  ): Promise<ICampaignControllerReadCampaignOutput>;
}
