import { ProjectTypeModel } from '@app-af/api/models';
import { baseStat } from '@app-af/api/util/baseStat';
import {
  IProjectTypeControllerCreateProjectType,
  IProjectTypeControllerCreateProjectTypeOutputError,
  IProjectTypeControllerCreateProjectTypeOutputSuccess,
} from '@app-af/interfaces/api/controllers';
import { Types } from 'mongoose';

/**
 * projectTypeControllerCreateProjectType
 *
 * The freight API create projectType controller.
 *
 * @param { IProjectTypeControllerCreateProjectTypeInput } params
 * @param { Types.ObjectId } params.projectTypeId
 * @param { string } params.description  (Optional)
 * @param { string } params.name
 * @param { Types.ObjectId } params.adminStatusId
 * @param { Types.ObjectId } params.adminUserId
 * @param { number } params.createdAt  (Optional)
 * @param { number } params.updatedAt
 *
 * @returns { Promise<IProjectTypeControllerCreateProjectTypeOutput> }
 *
 * @example On succcess returns: Promise<{ error: false, payload: { projectTypeModel }}>
 * @example On failure returns: Promise<{ error: true, payload: { message }}> On failure
 */
export const projectTypeControllerCreateProjectType: IProjectTypeControllerCreateProjectType =
  async ({ description, name, adminStatusId, adminUserId, createdAt, updatedAt }) => {
    const stat = { ...baseStat };

    try {
      const projectTypeId = new Types.ObjectId();
      const modelParams = {
        projectTypeId,
        description,
        name,
        adminStatusId,
        adminUserId,
        createdAt,
        updatedAt,
      };

      const projectTypeModel = new ProjectTypeModel(modelParams);
      await projectTypeModel.save();

      stat.error = false;
      stat.payload = { projectTypeId };
      return stat as IProjectTypeControllerCreateProjectTypeOutputSuccess;
    } catch (error) {
      const { message } = error;
      stat.payload = { message };
      return stat as IProjectTypeControllerCreateProjectTypeOutputError;
    }
  };
