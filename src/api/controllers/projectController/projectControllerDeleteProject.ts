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
 *
 * @example On succcess returns: Promise<{ error: false, payload: { projectModel }}>
 * @example On failure returns: Promise<{ error: true, payload: { message }}> On failure
 */
export const projectControllerDeleteProject: IProjectControllerDeleteProject = async ({
  projectId,
}) => {
  const stat = { ...baseStat };

  try {
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

    stat.error = false;
    stat.payload = { projectId };
    return stat as IProjectControllerDeleteProjectOutputSuccess;
  } catch (error) {
    const { message } = error;
    stat.payload = { message };
    return stat as IProjectControllerDeleteProjectOutputError;
  }
};
