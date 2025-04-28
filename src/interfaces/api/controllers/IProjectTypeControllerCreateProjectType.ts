import { IProjectTypeControllerCreateProjectTypeInput } from './IProjectTypeControllerCreateProjectTypeInput';
import { IProjectTypeControllerCreateProjectTypeOutput } from './IProjectTypeControllerCreateProjectTypeOutput';

export interface IProjectTypeControllerCreateProjectType {
  (
    args: IProjectTypeControllerCreateProjectTypeInput,
  ): Promise<IProjectTypeControllerCreateProjectTypeOutput>;
}
