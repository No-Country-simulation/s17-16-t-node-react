//====================
// Class StatusDTO
//====================
export class StatusDTO {
  //===============
  // Constructor
  //================
  constructor(statu) {
    this.id = statu.id;
    this.name = statu.name;
    this.description = statu.description;
    this.isActive = statu.isActive;
    this.createdAt = statu.createdAt;
    this.updatedAt = statu.updatedAt;
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
