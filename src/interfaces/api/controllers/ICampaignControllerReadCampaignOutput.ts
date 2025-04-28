import { ICampaignControllerReadCampaignOutputError } from './ICampaignControllerReadCampaignOutputError';
import { ICampaignControllerReadCampaignOutputSuccess } from './ICampaignControllerReadCampaignOutputSuccess';

export type ICampaignControllerReadCampaignOutput =
  | ICampaignControllerReadCampaignOutputSuccess
  | ICampaignControllerReadCampaignOutputError;
