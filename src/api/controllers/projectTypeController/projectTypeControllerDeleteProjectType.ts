import { ProjectTypeModel } from '@app-af/api/models';
import { baseStat } from '@app-af/api/util/baseStat';
import {
  IProjectTypeControllerDeleteProjectType,
  IProjectTypeControllerDeleteProjectTypeOutputError,
  IProjectTypeControllerDeleteProjectTypeOutputSuccess,
} from '@app-af/interfaces/api/controllers';
import { Types } from 'mongoose';

/**
 * projectTypeControllerDeleteProjectType
 *
 * The freight API delete projectType controller.
 *
 * @param { IProjectTypeControllerDeleteProjectTypeInput } params
 * @param { Types.ObjectId } params.projectTypeId
 *
 * @returns { Promise<IProjectTypeControllerDeleteProjectTypeOutput> }
 *
 * @example On succcess returns: Promise<{ error: false, payload: { projectTypeModel }}>
 * @example On failure returns: Promise<{ error: true, payload: { message }}> On failure
 */
export const projectTypeControllerDeleteProjectType: IProjectTypeControllerDeleteProjectType =
  async ({ projectTypeId }) => {
    const stat = { ...baseStat };

    try {
      await ProjectTypeModel.findOneAndUpdate(
        {
          _id: projectTypeId,
        },
        {
          adminStatusId: new Types.ObjectId(),
        },
        {
          includeResultMetadata: true,
        },
      );

      stat.error = false;
      stat.payload = { projectTypeId };
      return stat as IProjectTypeControllerDeleteProjectTypeOutputSuccess;
    } catch (error) {
      const { message } = error;
      stat.payload = { message };
      return stat as IProjectTypeControllerDeleteProjectTypeOutputError;
    }
  };
