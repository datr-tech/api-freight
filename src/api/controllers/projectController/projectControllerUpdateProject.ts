import { ProjectModel } from '@app-af/api/models';
import { baseStat } from '@app-af/api/util/baseStat';
import {
  IProjectControllerUpdateProject,
  IProjectControllerUpdateProjectOutputError,
  IProjectControllerUpdateProjectOutputSuccess,
} from '@app-af/interfaces/api/controllers';

/**
 * projectControllerUpdateProject
 *
 * The freight API update project controller.
 *
 * @param { IProjectControllerUpdateProjectInput } params
 * @param { Types.ObjectId } params.projectId
 * @param { Types.ObjectId } params.payload.projectTypeId  (Optional)
 * @param { Types.ObjectId } params.payload.organisationId  (Optional)
 * @param { Types.ObjectId } params.payload.ownerUserId  (Optional)
 * @param { string } params.payload.description  (Optional)
 * @param { string } params.payload.name  (Optional)
 * @param { Types.ObjectId } params.payload.adminStatusId  (Optional)
 * @param { Types.ObjectId } params.payload.adminUserId  (Optional)
 * @param { number } params.payload.createdAt  (Optional)
 * @param { number } params.payload.updatedAt  (Optional)
 *
 * @returns { Promise<IProjectControllerUpdateProjectOutput> }
 * @returns { Promise<IProjectControllerUpdateProjectOutputError> } ON ERROR: Promise<{ error: true, payload: { message }}>
 * @returns { Promise<IProjectControllerUpdateProjectOutputSuccess> } ON SUCCESS: Promise<{ error: false, payload: { projectModel }}>
 *
 * @author Datr.Tech Admin <admin@datr.tech>
 */
export const projectControllerUpdateProject: IProjectControllerUpdateProject = async ({
  projectId,
  payload,
}) => {
  const stat = { ...baseStat };

  try {
    /*
     * Attempt to find an instance of 'ProjectModel'
     * using the received 'projectId' param.
     * When successful, update the found model using
     * the key value pairs (or fields) from within the
     * 'payload' param.
     */
    await ProjectModel.findOneAndUpdate(
      {
        _id: projectId,
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
    stat.payload = {
      projectId,
      responseStatusCode: 200,
    };

    /*
     * Cast the response object to 'IProjectControllerUpdateProjectOutputSuccess',
     * where the casting interface is a component of the binary union type
     * 'IProjectControllerUpdateProjectOutput'.
     */
    return stat as IProjectControllerUpdateProjectOutputSuccess;
  } catch (error) {
    /*
     * Use the standard controller response object,
     * 'stat', to return the error message.
     */
    const { message } = error;
    stat.payload = {
      message,
      responseStatusCode: 404,
    };

    /*
     * Cast the response object to 'IProjectControllerUpdateProjectOutputError',
     */
    return stat as IProjectControllerUpdateProjectOutputError;
  }
};
