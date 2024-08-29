/**
 * @swagger
 * components:
 *  schemas:
 *    carEntity:
 *      description: Car entity
 *      type: object
 *      required:
 *        - user
 *        - brand
 *        - model
 *        - color
 *        - seats
 *        - plateCode
 *        - isActive
 *      properties:
 *        user:
 *          type: string
 *          example: id_User
 *        brand:
 *          type: string
 *          example: Toyota
 *        model:
 *          type: string
 *          example: Corolla
 *        color:
 *          type: string
 *          example: blue
 *        seats:
 *          type: number
 *          example: 4
 *        plateCode:
 *          type: string
 *          example: 1234
 *        isActive:
 *          type: boolean
 *          example: true
 */