import { IProjectControllerCreateProjectOutputError } from './IProjectControllerCreateProjectOutputError';
import { IProjectControllerCreateProjectOutputSuccess } from './IProjectControllerCreateProjectOutputSuccess';

export type IProjectControllerCreateProjectOutput =
  | IProjectControllerCreateProjectOutputSuccess
  | IProjectControllerCreateProjectOutputError;
