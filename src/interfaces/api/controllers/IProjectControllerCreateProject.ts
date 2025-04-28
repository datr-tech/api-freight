import { IProjectControllerCreateProjectInput } from './IProjectControllerCreateProjectInput';
import { IProjectControllerCreateProjectOutput } from './IProjectControllerCreateProjectOutput';

export interface IProjectControllerCreateProject {
  (
    args: IProjectControllerCreateProjectInput,
  ): Promise<IProjectControllerCreateProjectOutput>;
}
