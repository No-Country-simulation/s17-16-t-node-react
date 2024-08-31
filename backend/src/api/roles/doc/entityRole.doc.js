/**
 * @swagger
 * components:
 *  schemas:
 *    roleEntity:
 *      description: Role entity.
 *      type: object
 *      required:
 *        - Description
 *      properties:
 *        description:
 *          type: string
 *          example: User
 *        isActive:
 *          type: boolean
 *          default: true
 *          example: true
 *        dateCreated:
 *          type: dateTime
 *          default: now()
 *          example: 2021-09-01T00:00:00.000Z
 */
