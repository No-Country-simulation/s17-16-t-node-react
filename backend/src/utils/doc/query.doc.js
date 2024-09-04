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
 *    id2:
 *      name: id
 *      in: query
 *      description: ID of the object to fetch
 *      required: false
 *      schema:
 *        type: array
 *        items:
 *          type: string
 *      style: form
 *      explode: true
 *    id3:
 *      name: freeForm
 *      schema:
 *        type: object
 *        additionalProperties:
 *          type: integer
 *      style: form
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
 *         * `true` - Role active.
 *         * `false` - Role in active
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
