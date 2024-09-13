//=================
// Class menuDTO
//=================
export class MenuDTO {
  //===============
  // Constructor
  //================
  constructor(menu) {
    this.id = menu.id;
    this.picture = menu.picture;
    this.name = menu.name;
    this.description = menu.description;
    this.price = menu.price;
    this.category = menu.category;
    this.isActive = menu.isActive;
    this.permissions = menu.permissions;
    this.createdAt = menu.createdAt;
    this.updatedAt = menu.updatedAt;
  }

  //===========
  // Setters
  //===========
  setId(value) {
    this.id = value;
  }
  setPicture(value) {
    this.picture = value;
  }

  setName(value) {
    this.name = value;
  }

  setDescription(value) {
    this.description = value;
  }

  setPrice(value) {
    this.price = value;
  }

  setCategory(value) {
    this.category = value;
  }

  setAvailable(value) {
    this.available = value;
  }

  setRestaurant(value) {
    this.restaurant = value;
  }

  setCreatedAt(value) {
    this.createdAt = value;
  }

  setUpdatedAt(value) {
    this.updatedAt = value;
  }

  ///===========
  // Getters
  //===========
  getId() {
    return this.id;
  }

  getPicture() {
    return this.picture;
  }

  getName() {
    return this.name;
  }

  getDescription() {
    return this.description;
  }

  getPrice() {
    return this.price;
  }

  getCategory() {
    return this.category;
  }

  getAvailable() {
    return this.available;
  }

  getRestaurant() {
    return this.restaurant;
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
