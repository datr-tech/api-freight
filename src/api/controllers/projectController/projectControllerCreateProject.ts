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
 * @param { number } params.updatedAt  (Optional)
 *
 * @returns { Promise<IProjectControllerCreateProjectOutput> }
 * @returns { Promise<IProjectControllerCreateProjectOutputError> } ON ERROR: Promise<{ error: true, payload: { message }}>
 * @returns { Promise<IProjectControllerCreateProjectOutputSuccess> } ON SUCCESS: Promise<{ error: false, payload: { projectModel }}>
 *
 * @author Datr.Tech Admin <admin@datr.tech>
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
    /*
     * Populate the local 'modelParams' variable
     * with the received inputs.
     */
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

    /*
     * Use the populated 'modelParams' variable
     * to create a new instance of 'ProjectModel'.
     * 'db-freight'. Then save the created
     * model to the associated store: 'db-freight',
     */
    const projectModel = new ProjectModel(modelParams);
    await projectModel.save();

    /*
     * Use the standard controller response object,
     * 'stat', to return the found model's primary key.
     */
    stat.error = false;
    stat.payload = {
      projectId,
      responseStatusCode: 201,
    };

    /*
     * Cast the response object to
     * 'IProjectControllerCreateProjectOutputSuccess',
     * where the casting interface is a component of
     * the binary union type 'IProjectControllerCreateProjectOutput'.
     */
    return stat as IProjectControllerCreateProjectOutputSuccess;
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
     * Cast the response object to 'IProjectControllerCreateProjectOutputError',
     */
    return stat as IProjectControllerCreateProjectOutputError;
  }
};
