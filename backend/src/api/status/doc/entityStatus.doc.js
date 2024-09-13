/**
 * @swagger
 * components:
 *  schemas:
 *    statuEntity:
 *      description: Status entity
 *      type: object
 *      required:
 *        - name
 *        - Description
 *      properties:
 *        id:
 *          type: string
 *          format: cuid
 *          example: 123e4567-e89b-12d3-a456-426655440000
 *        name:
 *          type: string
 *          example: Nombre del usuario.
 *        description:
 *          type: string
 *          example: User
 *        isActive:
 *          type: boolean
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
