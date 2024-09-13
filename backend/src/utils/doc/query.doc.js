/**
 * @swagger
 * components:
 *  parameters:
 *    id:
 *      name: id
 *      in: query
 *      type: string
 *      default: ""
 *      description: Id .
 *    email:
 *      name: email
 *      in: query
 *      type: string
 *      format: email
 *      default: ""
 *      description: Email.
 *    name:
 *      name: name
 *      in: query
 *      type: string
 *      default: ""
 *      description: Name.
 *    description:
 *      name: description
 *      in: query
 *      type: string
 *      default: ""
 *      description: Description.
 *    permissions:
 *      name: description
 *      in: query
 *      type: string
 *      default: ""
 *      description: Permissions.
 *    isActive:
 *      name: isActive
 *      in: query
 *      type: string
 *      pattern: '^[a-zA-Z0-9]+$'
 *      nullable: true
 *      enum:
 *        - true
 *        - false
 *      default: true
 *      description: >
 *        isActive order:
 *         * `true` - active.
 *         * `false` - inactive.
 *    userId:
 *      name: userId
 *      in: query
 *      type: string
 *      default: ""
 *      description: Id User.
 *    roleId:
 *      name: roleId
 *      in: query
 *      type: string
 *      default: ""
 *      description: Id Role.
 */
