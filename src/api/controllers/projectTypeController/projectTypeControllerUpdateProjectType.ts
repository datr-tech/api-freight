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
 * @returns { Promise<IProjectTypeControllerUpdateProjectTypeOutputError> } ON ERROR: Promise<{ error: true, payload: { message }}>
 * @returns { Promise<IProjectTypeControllerUpdateProjectTypeOutputSuccess> } ON SUCCESS: Promise<{ error: false, payload: { projectTypeModel }}>
 *
 * @author Datr.Tech Admin <admin@datr.tech>
 */
export const projectTypeControllerUpdateProjectType: IProjectTypeControllerUpdateProjectType =
  async ({ projectTypeId, payload }) => {
    const stat = { ...baseStat };

    try {
      /*
       * Attempt to find an instance of 'ProjectTypeModel'
       * using the received 'projectTypeId' param.
       * When successful, update the found model using
       * the key value pairs (or fields) from within the
       * 'payload' param.
       */
      await ProjectTypeModel.findOneAndUpdate(
        {
          _id: projectTypeId,
        },
        payload,
        {
          includeResultMetadata: true,
        },
      );

      /*
       * Use the standard controller response object,
       * 'stat', to return the updated model's primary key.
       */
      stat.error = false;
      stat.payload = { projectTypeId };

      /*
       * Cast the response object to 'IProjectTypeControllerUpdateProjectTypeOutputSuccess',
       * where the casting interface is a component of the binary union type
       * 'IProjectTypeControllerUpdateProjectTypeOutput'.
       */
      return stat as IProjectTypeControllerUpdateProjectTypeOutputSuccess;
    } catch (error) {
      /*
       * Use the standard controller response object,
       * 'stat', to return the error message.
       */
      const { message } = error;
      stat.payload = { message };

      /*
       * Cast the response object to 'IProjectTypeControllerUpdateProjectTypeOutputError',
       */
      return stat as IProjectTypeControllerUpdateProjectTypeOutputError;
    }
  };
