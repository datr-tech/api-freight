import { IProjectControllerReadProjectInput } from './IProjectControllerReadProjectInput';
import { IProjectControllerReadProjectOutput } from './IProjectControllerReadProjectOutput';

export interface IProjectControllerReadProject {
  (
    args: IProjectControllerReadProjectInput,
  ): Promise<IProjectControllerReadProjectOutput>;
}
