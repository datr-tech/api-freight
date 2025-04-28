import { ICampaignControllerCreateCampaignOutputError } from './ICampaignControllerCreateCampaignOutputError';
import { ICampaignControllerCreateCampaignOutputSuccess } from './ICampaignControllerCreateCampaignOutputSuccess';

export type ICampaignControllerCreateCampaignOutput =
  | ICampaignControllerCreateCampaignOutputSuccess
  | ICampaignControllerCreateCampaignOutputError;
