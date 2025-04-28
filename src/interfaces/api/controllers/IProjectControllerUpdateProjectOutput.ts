import { IProjectControllerUpdateProjectOutputError } from './IProjectControllerUpdateProjectOutputError';
import { IProjectControllerUpdateProjectOutputSuccess } from './IProjectControllerUpdateProjectOutputSuccess';

export type IProjectControllerUpdateProjectOutput =
  | IProjectControllerUpdateProjectOutputSuccess
  | IProjectControllerUpdateProjectOutputError;
