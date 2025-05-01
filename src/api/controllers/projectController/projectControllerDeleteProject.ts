import { ProjectModel } from '@app-af/api/models';
import { baseStat } from '@app-af/api/util/baseStat';
import {
  IProjectControllerDeleteProject,
  IProjectControllerDeleteProjectOutputError,
  IProjectControllerDeleteProjectOutputSuccess,
} from '@app-af/interfaces/api/controllers';
import { Types } from 'mongoose';

/**
 * projectControllerDeleteProject
 *
 * The freight API delete project controller.
 *
 * @param { IProjectControllerDeleteProjectInput } params
 * @param { Types.ObjectId } params.projectId
 *
 * @returns { Promise<IProjectControllerDeleteProjectOutput> }
 * @returns { Promise<IProjectControllerDeleteProjectOutputError> } ON ERROR: Promise<{ error: true, payload: { message }}>
 * @returns { Promise<IProjectControllerDeleteProjectOutputSuccess> } ON SUCCESS: Promise<{ error: false, payload: { projectModel }}>
 *
 * @author Datr.Tech Admin <admin@datr.tech>
 */
export const projectControllerDeleteProject: IProjectControllerDeleteProject = async ({
  projectId,
}) => {
  const stat = { ...baseStat };

  try {
    /*
     * Attempt to find an instance of 'ProjectModel'
     * using the received 'projectId' param.
     * When successful, perform a "soft delete" upon the
     * found model by updating the value of the model's
     * 'adminStatusId' field.
     */
    await ProjectModel.findOneAndUpdate(
      {
        _id: projectId,
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
    stat.payload = { projectId };

    /*
     * Cast the response object to
     * 'IProjectControllerDeleteProjectOutputSuccess',
     * where the casting interface is a component of
     * the binary union type 'IProjectControllerDeleteProjectOutput'.
     */
    return stat as IProjectControllerDeleteProjectOutputSuccess;
  } catch (error) {
    /*
     * Use the standard controller response object,
     * 'stat', to return the error message.
     */
    const { message } = error;
    stat.payload = { message };

    /*
     * Cast the response object to 'IProjectControllerDeleteProjectOutputError',
     */
    return stat as IProjectControllerDeleteProjectOutputError;
  }
};
