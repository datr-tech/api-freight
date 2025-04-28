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
 *
 * @example On succcess returns: Promise<{ error: false, payload: { projectModel }}>
 * @example On failure returns: Promise<{ error: true, payload: { message }}> On failure
 */
export const projectControllerUpdateProject: IProjectControllerUpdateProject = async ({
  projectId,
  payload,
}) => {
  const stat = { ...baseStat };

  try {
    await ProjectModel.findOneAndUpdate(
      {
        _id: projectId,
      },
      payload,
      {
        includeResultMetadata: true,
      },
    );

    stat.error = false;
    stat.payload = { projectId };
    return stat as IProjectControllerUpdateProjectOutputSuccess;
  } catch (error) {
    const { message } = error;
    stat.payload = { message };
    return stat as IProjectControllerUpdateProjectOutputError;
  }
};
