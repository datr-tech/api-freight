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
 * @returns { Promise<IProjectTypeControllerReadProjectTypeOutputError> } ON ERROR: Promise<{ error: true, payload: { message }}>
 * @returns { Promise<IProjectTypeControllerReadProjectTypeOutputSuccess> } ON SUCCESS: Promise<{ error: false, payload: { projectTypeModel }}>
 *
 * @author Datr.Tech Admin <admin@datr.tech>
 */
export const projectTypeControllerReadProjectType: IProjectTypeControllerReadProjectType =
  async ({ projectTypeId }) => {
    const stat = { ...baseStat };

    try {
      /*
       * Attempt to find an instance of 'ProjectTypeModel'
       * using the received 'projectTypeId' param.
       */
      const projectTypeModel = await ProjectTypeModel.findById(projectTypeId);

      /*
       * Use the standard controller response object,
       * 'stat', to return the found model.
       */
      stat.error = false;
      stat.payload = { projectTypeModel };

      /*
       * Cast the response object to
       * 'IProjectTypeControllerReadProjectTypeOutputSuccess',
       * where the casting interface is a component of
       * the binary union type 'IProjectTypeControllerReadProjectTypeOutput'.
       */
      return stat as IProjectTypeControllerReadProjectTypeOutputSuccess;
    } catch (error) {
      /*
       * Use the standard controller response object,
       * 'stat', to return the error message.
       */
      const { message } = error;
      stat.payload = { message };

      /*
       * Cast the response object to 'IProjectTypeControllerReadProjectTypeOutputError',
       */
      return stat as IProjectTypeControllerReadProjectTypeOutputError;
    }
  };
