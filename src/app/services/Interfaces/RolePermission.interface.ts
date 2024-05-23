export interface RolePermission {
    name: string;
    permissions: Array<{
      submodule: string;
      create: boolean;
      read: boolean;
      update: boolean;
      delete: boolean;
    }>;
  }