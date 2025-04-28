import { IProjectTypeControllerCreateProjectTypeOutputError } from './IProjectTypeControllerCreateProjectTypeOutputError';
import { IProjectTypeControllerCreateProjectTypeOutputSuccess } from './IProjectTypeControllerCreateProjectTypeOutputSuccess';

export type IProjectTypeControllerCreateProjectTypeOutput =
  | IProjectTypeControllerCreateProjectTypeOutputSuccess
  | IProjectTypeControllerCreateProjectTypeOutputError;
