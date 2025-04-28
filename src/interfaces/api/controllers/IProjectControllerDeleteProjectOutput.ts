import { IProjectControllerDeleteProjectOutputError } from './IProjectControllerDeleteProjectOutputError';
import { IProjectControllerDeleteProjectOutputSuccess } from './IProjectControllerDeleteProjectOutputSuccess';

export type IProjectControllerDeleteProjectOutput =
  | IProjectControllerDeleteProjectOutputSuccess
  | IProjectControllerDeleteProjectOutputError;
