import { getAllRoles, getRoleById, createRole, updateRole, deleteRole } from './role.controller';
import { getAllRoles as getAllRolesService, getRoleById as getRoleByIdService, createRole as createRoleService, updateRole as updateRoleService, deleteRole as deleteRoleService } from './role.service';
import { getAllRoles as getAllRolesDAO, getRoleById as getRoleByIdDAO, createRole as createRoleDAO, updateRole as updateRoleDAO, deleteRole as deleteRoleDAO } from './role.dao';
import RoleModel from './role.model';

describe('Role Tests', () => {
  describe('Controller Tests', () => {
    it('should get all roles', async () => {
      const req = { params: {} };
      const res = { json: jest.fn() };
      await getAllRoles(req, res);
      expect(res.json).toHaveBeenCalledTimes(1);
    });

    it('should get role by id', async () => {
      const req = { params: { id: '123' } };
      const res = { json: jest.fn() };
      await getRoleById(req, res);
      expect(res.json).toHaveBeenCalledTimes(1);
    });

    it('should create role', async () => {
      const req = { body: { name: 'Role 1', description: 'Description 1' } };
      const res = { json: jest.fn() };
      await createRole(req, res);
      expect(res.json).toHaveBeenCalledTimes(1);
    });

    it('should update role', async () => {
      const req = { params: { id: '123' }, body: { name: 'Role 1', description: 'Description 1' } };
      const res = { json: jest.fn() };
      await updateRole(req, res);
      expect(res.json).toHaveBeenCalledTimes(1);
    });

    it('should delete role', async () => {
      const req = { params: { id: '123' } };
      const res = { json: jest.fn() };
      await deleteRole(req, res);
      expect(res.json).toHaveBeenCalledTimes(1);
    });
  });

  describe('Service Tests', () => {
    it('should get all roles', async () => {
      const roles = await getAllRolesService();
      expect(roles).toBeInstanceOf(Array);
    });

    it('should get role by id', async () => {
      const role = await getRoleByIdService('123');
      expect(role).toBeInstanceOf(Object);
    });

    it('should create role', async () => {
      const role = await createRoleService({ name: 'Role 1', description: 'Description 1' });
      expect(role).toBeInstanceOf(Object);
    });

    it('should update role', async () => {
      const role = await updateRoleService('123', { name: 'Role 1', description: 'Description 1' });
      expect(role).toBeInstanceOf(Object);
    });

    it('should delete role', async () => {
      const role = await deleteRoleService('123');
      expect(role).toBeInstanceOf(Object);
    });
  });

  describe('DAO Tests', () => {
    it('should get all roles', async () => {
      const roles = await getAllRolesDAO();
      expect(roles).toBeInstanceOf(Array);
    });

    it('should get role by id', async () => {
      const role = await getRoleByIdDAO('123');
      expect(role).toBeInstanceOf(Object);
    });

    it('should create role', async () => {
      const role = await createRoleDAO({ name: 'Role 1', description: 'Description 1' });
      expect(role).toBeInstanceOf(Object);
    });

    it('should update role', async () => {
      const role = await updateRoleDAO('123', { name: 'Role 1', description: 'Description 1' });
      expect(role).toBeInstanceOf(Object);
    });

    it('should delete role', async () => {
      const role = await deleteRoleDAO('123');
      expect(role).toBeInstanceOf(Object);
    });
  });

  describe('Model Tests', () => {
    it('should create role', async () => {
      const role = new RoleModel({ name: 'Role 1', description: 'Description 1' });
      expect(role).toBeInstanceOf(Object);
    });

    it('should save role', async () => {
      const role = new RoleModel({ name: 'Role 1', description: 'Description 1' });
      await role.save();
      expect(role).toBeInstanceOf(Object);
    });
  });

  describe('CRUD Tests', () => {
    it('should create role', async () => {
      const role = await createRoleService({ name: 'Role 1', description: 'Description 1' });
      expect(role).toBeInstanceOf(Object);
    });

    it('should read role', async () => {
      const roleRead = await getRoleByIdService('123');
      expect(roleRead).toBeInstanceOf(Object);
    });

    it('should update role', async () => {
      const roleUpdated = await updateRoleService('123', { name: 'Role 2', description: 'Description 2' });
      expect(roleUpdated).toBeInstanceOf(Object);
    });

    it('should delete role', async () => {
      const roleDeleted = await deleteRoleService('123');
      expect(roleDeleted).toBeInstanceOf(Object);
    });
  });
});
