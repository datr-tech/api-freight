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
 * @returns { Promise<IProjectTypeControllerCreateProjectTypeOutputError> } ON ERROR: Promise<{ error: true, payload: { message }}>
 * @returns { Promise<IProjectTypeControllerCreateProjectTypeOutputSuccess> } ON SUCCESS: Promise<{ error: false, payload: { projectTypeModel }}>
 *
 * @author Datr.Tech Admin <admin@datr.tech>
 */
export const projectTypeControllerCreateProjectType: IProjectTypeControllerCreateProjectType =
  async ({ description, name, adminStatusId, adminUserId, createdAt, updatedAt }) => {
    const stat = { ...baseStat };

    try {
      /*
       * Populate the local 'modelParams' variable
       * with the received inputs.
       */
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

      /*
       * Use the populated 'modelParams' variable
       * to create a new instance of 'ProjectTypeModel'.
       * 'db-freight'.
       */
      const projectTypeModel = new ProjectTypeModel(modelParams);

      /*
       * The save the created model to the associated store: 'db-freight',
       */
      await projectTypeModel.save();

      /*
       * Use the standard controller response object,
       * 'stat', to return the found model.
       */
      stat.error = false;
      stat.payload = { projectTypeId: projectTypeModel.id };

      /*
       * Cast the response object to
       * 'IProjectTypeControllerCreateProjectTypeOutputSuccess',
       * where the casting interface is a component of
       * the binary union type
       * 'IProjectTypeControllerCreateProjectTypeOutput'.
       */
      return stat as IProjectTypeControllerCreateProjectTypeOutputSuccess;
    } catch (error) {
      /*
       * Use the standard controller response object,
       * 'stat', to return the error message.
       */
      const { message } = error;
      stat.payload = { message };

      /*
       * Cast the response object to 'IProjectTypeControllerCreateProjectTypeOutputError',
       */
      return stat as IProjectTypeControllerCreateProjectTypeOutputError;
    }
  };
