import { ProjectTypeModel } from '@app-af/api/models';
import { baseStat } from '@app-af/api/util/baseStat';
import {
  IProjectTypeControllerUpdateProjectType,
  IProjectTypeControllerUpdateProjectTypeOutputError,
  IProjectTypeControllerUpdateProjectTypeOutputSuccess,
} from '@app-af/interfaces/api/controllers';

/**
 * projectTypeControllerUpdateProjectType
 *
 * The freight API update projectType controller.
 *
 * @param { IProjectTypeControllerUpdateProjectTypeInput } params
 * @param { Types.ObjectId } params.projectTypeId
 * @param { string } params.payload.description  (Optional)
 * @param { string } params.payload.name  (Optional)
 * @param { Types.ObjectId } params.payload.adminStatusId  (Optional)
 * @param { Types.ObjectId } params.payload.adminUserId  (Optional)
 * @param { number } params.payload.createdAt  (Optional)
 * @param { number } params.payload.updatedAt  (Optional)
 *
 * @returns { Promise<IProjectTypeControllerUpdateProjectTypeOutput> }
 *
 * @example On succcess returns: Promise<{ error: false, payload: { projectTypeModel }}>
 * @example On failure returns: Promise<{ error: true, payload: { message }}> On failure
 */
export const projectTypeControllerUpdateProjectType: IProjectTypeControllerUpdateProjectType =
  async ({ projectTypeId, payload }) => {
    const stat = { ...baseStat };

    try {
      await ProjectTypeModel.findOneAndUpdate(
        {
          _id: projectTypeId,
        },
        payload,
        {
          includeResultMetadata: true,
        },
      );

      stat.error = false;
      stat.payload = { projectTypeId };
      return stat as IProjectTypeControllerUpdateProjectTypeOutputSuccess;
    } catch (error) {
      const { message } = error;
      stat.payload = { message };
      return stat as IProjectTypeControllerUpdateProjectTypeOutputError;
    }
  };
