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
 *
 * @example On succcess returns: Promise<{ error: false, payload: { projectModel }}>
 * @example On failure returns: Promise<{ error: true, payload: { message }}> On failure
 */
export const projectControllerReadProject: IProjectControllerReadProject = async ({
  projectId,
}) => {
  const stat = { ...baseStat };

  try {
    const projectModel = await ProjectModel.findById(projectId);

    stat.error = false;
    stat.payload = { projectModel };
    return stat as IProjectControllerReadProjectOutputSuccess;
  } catch (error) {
    const { message } = error;
    stat.payload = { message };
    return stat as IProjectControllerReadProjectOutputError;
  }
};
