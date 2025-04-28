import { ICampaignControllerUpdateCampaignOutputError } from './ICampaignControllerUpdateCampaignOutputError';
import { ICampaignControllerUpdateCampaignOutputSuccess } from './ICampaignControllerUpdateCampaignOutputSuccess';

export type ICampaignControllerUpdateCampaignOutput =
  | ICampaignControllerUpdateCampaignOutputSuccess
  | ICampaignControllerUpdateCampaignOutputError;
