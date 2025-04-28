import { ICampaignControllerDeleteCampaignOutputError } from './ICampaignControllerDeleteCampaignOutputError';
import { ICampaignControllerDeleteCampaignOutputSuccess } from './ICampaignControllerDeleteCampaignOutputSuccess';

export type ICampaignControllerDeleteCampaignOutput =
  | ICampaignControllerDeleteCampaignOutputSuccess
  | ICampaignControllerDeleteCampaignOutputError;
