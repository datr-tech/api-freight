import { IProjectTypeControllerReadProjectTypeOutputError } from './IProjectTypeControllerReadProjectTypeOutputError';
import { IProjectTypeControllerReadProjectTypeOutputSuccess } from './IProjectTypeControllerReadProjectTypeOutputSuccess';

export type IProjectTypeControllerReadProjectTypeOutput =
  | IProjectTypeControllerReadProjectTypeOutputSuccess
  | IProjectTypeControllerReadProjectTypeOutputError;
