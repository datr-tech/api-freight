import { IProjectTypeControllerDeleteProjectTypeInput } from './IProjectTypeControllerDeleteProjectTypeInput';
import { IProjectTypeControllerDeleteProjectTypeOutput } from './IProjectTypeControllerDeleteProjectTypeOutput';

export interface IProjectTypeControllerDeleteProjectType {
  (
    args: IProjectTypeControllerDeleteProjectTypeInput,
  ): Promise<IProjectTypeControllerDeleteProjectTypeOutput>;
}
