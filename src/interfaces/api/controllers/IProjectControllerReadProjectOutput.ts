import { IProjectControllerReadProjectOutputError } from './IProjectControllerReadProjectOutputError';
import { IProjectControllerReadProjectOutputSuccess } from './IProjectControllerReadProjectOutputSuccess';

export type IProjectControllerReadProjectOutput =
  | IProjectControllerReadProjectOutputSuccess
  | IProjectControllerReadProjectOutputError;
