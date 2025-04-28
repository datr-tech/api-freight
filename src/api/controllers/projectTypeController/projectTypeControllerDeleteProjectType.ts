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
 * @returns { Promise<IProjectTypeControllerDeleteProjectTypeOutputError> } ON ERROR: Promise<{ error: true, payload: { message }}>
 * @returns { Promise<IProjectTypeControllerDeleteProjectTypeOutputSuccess> } ON SUCCESS: Promise<{ error: false, payload: { projectTypeModel }}>
 *
 * @author Datr.Tech Admin <admin@datr.tech>
 */
export const projectTypeControllerDeleteProjectType: IProjectTypeControllerDeleteProjectType =
  async ({ projectTypeId }) => {
    const stat = { ...baseStat };

    try {
      /*
       * Attempt to find an instance of 'ProjectTypeModel'
       * using the received 'projectTypeId' param.
       * When successful, perform a "soft delete" upon the
       * found model by updating the value of the model's
       * 'adminStatusId' field.
       */
      const projectTypeModel = await ProjectTypeModel.findOneAndUpdate(
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

      /*
       * Use the standard controller response object,
       * 'stat', to return the primary key of the
       * "soft deleted" model.
       */
      stat.error = false;
      stat.payload = { projectTypeId: projectTypeModel.id };

      /*
       * Cast the response object to
       * 'IProjectTypeControllerDeleteProjectTypeOutputSuccess',
       * where the casting interface is a component of
       * the binary union type
       * 'IProjectTypeControllerDeleteProjectTypeOutput'.
       */
      return stat as IProjectTypeControllerDeleteProjectTypeOutputSuccess;
    } catch (error) {
      /*
       * Use the standard controller response object,
       * 'stat', to return the error message.
       */
      const { message } = error;
      stat.payload = { message };

      /*
       * Cast the response object to 'IProjectTypeControllerDeleteProjectTypeOutputError',
       */
      return stat as IProjectTypeControllerDeleteProjectTypeOutputError;
    }
  };
