//=================
// Class RoleDTO
//=================
export class RoleDTO {
  //===============
  // Constructor
  //================
  constructor(role) {
    this.id = role.id;
    this.name = role.name;
    this.description = role.description;
    this.isActive = role.isActive;
    this.permissions = role.permissions;
    this.createdAt = role.createdAt;
    this.updatedAt = role.updatedAt;
  }

  //===========
  // Setters
  //===========
  setId(id) {
    this.id = id;
  }

  setName(name) {
    this.name = name;
  }

  setDescription(description) {
    this.description = description;
  }

  setIsActive(isActive) {
    this.isActive = isActive;
  }

  setPermissions(permissions) {
    this.permissions = permissions;
  }

  setCreatedAt(createdAt) {
    this.createdAt = createdAt;
  }

  setUpdatedAt(updatedAt) {
    this.updatedAt = updatedAt;
  }

  //===========
  // Getters
  //===========
  getId() {
    return this.id;
  }
  getName() {
    return this.name;
  }

  getDescription() {
    return this.description;
  }

  getIsActive() {
    return this.isActive;
  }

  getPermissions() {
    return this.permissions;
  }

  getCreatedAt() {
    return this.createdAt;
  }

  getUpdatedAt() {
    return this.updatedAt;
  }

  //============
  // Function
  //============
  toDTO(fieldsToShow) {
    const dto = {};
    fieldsToShow.forEach((field) => {
      if (this.hasOwnProperty(field)) {
        dto[field] = this[field];
      }
    });
    return dto;
  }
}
