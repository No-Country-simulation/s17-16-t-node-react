/**
 * @swagger
 * components:
 *  schemas:
 *    entityRestaurant:
 *      description: Restaurant entity
 *      type: object
 *      required:
 *        - name
 *        - address
 *        - category
 *        - owner
 *      properties:
 *        name:
 *          type: string
 *          example: Restaurant Name
 *        address:
 *          type: string
 *          example: Restaurant Address
 *        category:
 *          type: string
 *          example: Italian
 *        logo:
 *          type: string
 *          example: /path/to/logo.png
 *        owner:
 *          type: string
 *          example: 60d0fe4f5311236168a109ca
 *        menus:
 *          type: array
 *          example: [60d0fe4f5311236168a109cb, 60d0fe4f5311236168a109cc]
 *        staff:
 *          type: array
 *          example: [60d0fe4f5311236168a109cd, 60d0fe4f5311236168a109ce]
 *        isActive:
 *          type: boolean
 *          example: true
 *        createdAt:
 *          type: string
 *          format: date-time
 *          example: 2021-06-22T14:48:00.000Z
 *        updatedAt:
 *          type: string
 *          format: date-time
 *          example: 2021-06-22T14:48:00.000Z
 */
