import { Resource } from "@/types";
import { apiClient } from "@/lib/apiClient";

export interface IResourceRepository {
  getAll(): Promise<Resource[]>;
  getByTechnology(technology: string): Promise<Resource[]>;
  getByType(type: string): Promise<Resource[]>;
}

export class ApiResourceRepository implements IResourceRepository {
  async getAll(): Promise<Resource[]> {
    return await apiClient.getResources();
  }

  async getByTechnology(technology: string): Promise<Resource[]> {
    return await apiClient.getResources({ technology });
  }

  async getByType(type: string): Promise<Resource[]> {
    return await apiClient.getResources({ type });
  }
}

export const resourceRepository = new ApiResourceRepository();
