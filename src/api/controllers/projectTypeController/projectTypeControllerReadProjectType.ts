import { ProjectTypeModel } from '@app-af/api/models';
import { baseStat } from '@app-af/api/util/baseStat';
import {
  IProjectTypeControllerReadProjectType,
  IProjectTypeControllerReadProjectTypeOutputError,
  IProjectTypeControllerReadProjectTypeOutputSuccess,
} from '@app-af/interfaces/api/controllers';

/**
 * projectTypeControllerReadProjectType
 *
 * The freight API read projectType controller.
 *
 * @param { IProjectTypeControllerReadProjectTypeInput } params
 * @param { Types.ObjectId } params.projectTypeId
 *
 * @returns { Promise<IProjectTypeControllerReadProjectTypeOutput> }
 *
 * @example On succcess returns: Promise<{ error: false, payload: { projectTypeModel }}>
 * @example On failure returns: Promise<{ error: true, payload: { message }}> On failure
 */
export const projectTypeControllerReadProjectType: IProjectTypeControllerReadProjectType =
  async ({ projectTypeId }) => {
    const stat = { ...baseStat };

    try {
      const projectTypeModel = await ProjectTypeModel.findById(projectTypeId);

      stat.error = false;
      stat.payload = { projectTypeModel };
      return stat as IProjectTypeControllerReadProjectTypeOutputSuccess;
    } catch (error) {
      const { message } = error;
      stat.payload = { message };
      return stat as IProjectTypeControllerReadProjectTypeOutputError;
    }
  };
