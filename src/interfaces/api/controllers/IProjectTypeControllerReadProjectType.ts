import { IProjectTypeControllerReadProjectTypeInput } from './IProjectTypeControllerReadProjectTypeInput';
import { IProjectTypeControllerReadProjectTypeOutput } from './IProjectTypeControllerReadProjectTypeOutput';

export interface IProjectTypeControllerReadProjectType {
  (
    args: IProjectTypeControllerReadProjectTypeInput,
  ): Promise<IProjectTypeControllerReadProjectTypeOutput>;
}
