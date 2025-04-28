import { IProjectControllerUpdateProjectInput } from './IProjectControllerUpdateProjectInput';
import { IProjectControllerUpdateProjectOutput } from './IProjectControllerUpdateProjectOutput';

export interface IProjectControllerUpdateProject {
  (
    args: IProjectControllerUpdateProjectInput,
  ): Promise<IProjectControllerUpdateProjectOutput>;
}
