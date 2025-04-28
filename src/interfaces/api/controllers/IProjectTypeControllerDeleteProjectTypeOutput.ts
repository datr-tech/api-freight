import { IProjectTypeControllerDeleteProjectTypeOutputError } from './IProjectTypeControllerDeleteProjectTypeOutputError';
import { IProjectTypeControllerDeleteProjectTypeOutputSuccess } from './IProjectTypeControllerDeleteProjectTypeOutputSuccess';

export type IProjectTypeControllerDeleteProjectTypeOutput =
  | IProjectTypeControllerDeleteProjectTypeOutputSuccess
  | IProjectTypeControllerDeleteProjectTypeOutputError;
