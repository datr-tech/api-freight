import { ICampaignTypeControllerReadCampaignTypeOutputError } from './ICampaignTypeControllerReadCampaignTypeOutputError';
import { ICampaignTypeControllerReadCampaignTypeOutputSuccess } from './ICampaignTypeControllerReadCampaignTypeOutputSuccess';

export type ICampaignTypeControllerReadCampaignTypeOutput =
  | ICampaignTypeControllerReadCampaignTypeOutputSuccess
  | ICampaignTypeControllerReadCampaignTypeOutputError;
