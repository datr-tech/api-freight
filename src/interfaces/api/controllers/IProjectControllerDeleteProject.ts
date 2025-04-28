import { IProjectControllerDeleteProjectInput } from './IProjectControllerDeleteProjectInput';
import { IProjectControllerDeleteProjectOutput } from './IProjectControllerDeleteProjectOutput';

export interface IProjectControllerDeleteProject {
  (
    args: IProjectControllerDeleteProjectInput,
  ): Promise<IProjectControllerDeleteProjectOutput>;
}
