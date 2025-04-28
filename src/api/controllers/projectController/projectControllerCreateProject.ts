import { ProjectModel } from '@app-af/api/models';
import { baseStat } from '@app-af/api/util/baseStat';
import {
  IProjectControllerCreateProject,
  IProjectControllerCreateProjectOutputError,
  IProjectControllerCreateProjectOutputSuccess,
} from '@app-af/interfaces/api/controllers';
import { Types } from 'mongoose';

/**
 * projectControllerCreateProject
 *
 * The freight API create project controller.
 *
 * @param { IProjectControllerCreateProjectInput } params
 * @param { Types.ObjectId } params.projectId
 * @param { Types.ObjectId } params.projectTypeId
 * @param { Types.ObjectId } params.organisationId
 * @param { Types.ObjectId } params.ownerUserId
 * @param { string } params.description  (Optional)
 * @param { string } params.name
 * @param { Types.ObjectId } params.adminStatusId
 * @param { Types.ObjectId } params.adminUserId
 * @param { number } params.createdAt  (Optional)
 * @param { number } params.updatedAt
 *
 * @returns { Promise<IProjectControllerCreateProjectOutput> }
 *
 * @example On succcess returns: Promise<{ error: false, payload: { projectModel }}>
 * @example On failure returns: Promise<{ error: true, payload: { message }}> On failure
 */
export const projectControllerCreateProject: IProjectControllerCreateProject = async ({
  projectTypeId,
  organisationId,
  ownerUserId,
  description,
  name,
  adminStatusId,
  adminUserId,
  createdAt,
  updatedAt,
}) => {
  const stat = { ...baseStat };

  try {
    const projectId = new Types.ObjectId();
    const modelParams = {
      projectId,
      projectTypeId,
      organisationId,
      ownerUserId,
      description,
      name,
      adminStatusId,
      adminUserId,
      createdAt,
      updatedAt,
    };

    const projectModel = new ProjectModel(modelParams);
    await projectModel.save();

    stat.error = false;
    stat.payload = { projectId };
    return stat as IProjectControllerCreateProjectOutputSuccess;
  } catch (error) {
    const { message } = error;
    stat.payload = { message };
    return stat as IProjectControllerCreateProjectOutputError;
  }
};
