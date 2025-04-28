import { ProjectModel } from '@app-af/api/models';
import { baseStat } from '@app-af/api/util/baseStat';
import {
  IProjectControllerReadProject,
  IProjectControllerReadProjectOutputError,
  IProjectControllerReadProjectOutputSuccess,
} from '@app-af/interfaces/api/controllers';

/**
 * projectControllerReadProject
 *
 * The freight API read project controller.
 *
 * @param { IProjectControllerReadProjectInput } params
 * @param { Types.ObjectId } params.projectId
 *
 * @returns { Promise<IProjectControllerReadProjectOutput> }
 * @returns { Promise<IProjectControllerReadProjectOutputError> } ON ERROR: Promise<{ error: true, payload: { message }}>
 * @returns { Promise<IProjectControllerReadProjectOutputSuccess> } ON SUCCESS: Promise<{ error: false, payload: { projectModel }}>
 *
 * @author Datr.Tech Admin <admin@datr.tech>
 */
export const projectControllerReadProject: IProjectControllerReadProject = async ({
  projectId,
}) => {
  const stat = { ...baseStat };

  try {
    /*
     * Attempt to find an instance of 'ProjectModel'
     * using the received 'projectId' param.
     */
    const projectModel = await ProjectModel.findById(projectId);

    /*
     * Use the standard controller response object,
     * 'stat', to return the found model.
     */
    stat.error = false;
    stat.payload = { projectModel };

    /*
     * Cast the response object to 'IProjectControllerReadProjectOutputSuccess',
     * where the casting interface is a component of the binary union type
     * 'IProjectControllerReadProjectOutput'.
     */
    return stat as IProjectControllerReadProjectOutputSuccess;
  } catch (error) {
    /*
     * Use the standard controller response object,
     * 'stat', to return the error message.
     */
    const { message } = error;
    stat.payload = { message };

    /*
     * Cast the response object to 'IProjectControllerReadProjectOutputError',
     */
    return stat as IProjectControllerReadProjectOutputError;
  }
};
