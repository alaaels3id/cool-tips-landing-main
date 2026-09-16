import { Resource } from "@/types";
import { resources } from "@/data/resources";

export interface IResourceRepository {
  getAll(): Promise<Resource[]>;
  getByTechnology(technology: string): Promise<Resource[]>;
  getByType(type: string): Promise<Resource[]>;
}

export class StaticResourceRepository implements IResourceRepository {
  async getAll(): Promise<Resource[]> {
    return [...resources];
  }

  async getByTechnology(technology: string): Promise<Resource[]> {
    if (technology.toLowerCase() === "all") return [...resources];
    return resources.filter(
      (r) => r.technology.toLowerCase() === technology.toLowerCase()
    );
  }

  async getByType(type: string): Promise<Resource[]> {
    if (type.toLowerCase() === "all") return [...resources];
    return resources.filter(
      (r) => r.type.toLowerCase() === type.toLowerCase()
    );
  }
}

export const resourceRepository = new StaticResourceRepository();
