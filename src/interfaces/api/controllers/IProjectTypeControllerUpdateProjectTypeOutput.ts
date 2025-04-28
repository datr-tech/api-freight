import { IProjectTypeControllerUpdateProjectTypeOutputError } from './IProjectTypeControllerUpdateProjectTypeOutputError';
import { IProjectTypeControllerUpdateProjectTypeOutputSuccess } from './IProjectTypeControllerUpdateProjectTypeOutputSuccess';

export type IProjectTypeControllerUpdateProjectTypeOutput =
  | IProjectTypeControllerUpdateProjectTypeOutputSuccess
  | IProjectTypeControllerUpdateProjectTypeOutputError;
