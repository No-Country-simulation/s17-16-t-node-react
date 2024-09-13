/**
 * @swagger
 * components:
 *  schemas:
 *    roleEntity:
 *      description: Role entity.
 *      type: object
 *      required:
 *        - name
 *        - description
 *      properties:
 *        id:
 *          type: string
 *          format: cuid
 *          example: 123e4567-e89b-12d3-a456-426655440000
 *        name:
 *          type: string
 *          example: Nombre del rol.
 *        description:
 *          type: string
 *          example: Descripción del rol.
 *        permissions:
 *          type: string
 *          example: Id del premiso asignado al usuario.
 *        isActive:
 *          type: boolean
 *          default: true
 *          example: true
 *        createdAt:
 *          type: string
 *          format: dateTime
 *          example: 2020-01-01T00:00:00.000Z
 *        updateAt:
 *          type: string
 *          format: dateTime
 *          example: 2020-01-01T00:00:00.000Z
 */
