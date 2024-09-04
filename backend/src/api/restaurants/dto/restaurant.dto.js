class RestaurantDTO {
  constructor({
    name,
    address,
    category,
    logo,
    owner,
    menus = [],
    staff = [],
    isActive = true,
    createdAt = new Date(),
    updatedAt = new Date(),
  }) {
    this._name = name;
    this._address = address;
    this._category = category;
    this._logo = logo;
    this._owner = owner;
    this._menus = menus;
    this._staff = staff;
    this._isActive = isActive;
    this._createdAt = createdAt;
    this._updatedAt = updatedAt;
  }

  // Getters
  get name() {
    return this._name;
  }

  get address() {
    return this._address;
  }

  get category() {
    return this._category;
  }

  get logo() {
    return this._logo;
  }

  get owner() {
    return this._owner;
  }

  get menus() {
    return this._menus;
  }

  get staff() {
    return this._staff;
  }

  get isActive() {
    return this._isActive;
  }

  get createdAt() {
    return this._createdAt;
  }

  get updatedAt() {
    return this._updatedAt;
  }

  // Setters
  set name(value) {
    this._name = value.trim();
  }

  set address(value) {
    this._address = value.trim();
  }

  set category(value) {
    this._category = value.trim();
  }

  set logo(value) {
    this._logo = value.trim();
  }

  set owner(value) {
    this._owner = value;
  }

  set menus(value) {
    this._menus = value;
  }

  set staff(value) {
    this._staff = value;
  }

  set isActive(value) {
    this._isActive = value;
  }

  set createdAt(value) {
    this._createdAt = value;
  }

  set updatedAt(value) {
    this._updatedAt = value;
  }
}

module.exports = RestaurantDTO;
