/**
 * @swagger
 * components:
 *  schemas:
 *    UserEntity:
 *      description: User entity
 *      type: object
 *      required:
 *        - email
 *        - password
 *      properties:
 *        id:
 *          type: string
 *          format: cuid
 *          example: 123e4567-e89b-12d3-a456-426655440000
 *        avatar:
 *          type: string
 *          example: Imagen del usuario.
 *        name:
 *          type: string
 *          example: Nombre del usuario.
 *        lastName:
 *          type: string
 *          example: Apellido del usuario.
 *        dni:
 *          type: string
 *          example: DNI del usuario.
 *        email:
 *          type: string
 *          example: email del usuario.
 *        password:
 *          type: string
 *          example: Password del usuario.
 *        phone:
 *          type: string
 *          example: Numero del usuario.
 *        role:
 *          type: string
 *          example: Id del rol asignado al usuario.
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
