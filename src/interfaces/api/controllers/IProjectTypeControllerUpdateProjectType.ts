import { IProjectTypeControllerUpdateProjectTypeInput } from './IProjectTypeControllerUpdateProjectTypeInput';
import { IProjectTypeControllerUpdateProjectTypeOutput } from './IProjectTypeControllerUpdateProjectTypeOutput';

export interface IProjectTypeControllerUpdateProjectType {
  (
    args: IProjectTypeControllerUpdateProjectTypeInput,
  ): Promise<IProjectTypeControllerUpdateProjectTypeOutput>;
}
