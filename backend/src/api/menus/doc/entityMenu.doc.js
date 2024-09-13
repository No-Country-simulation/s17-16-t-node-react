/**
 * @swagger
 * components:
 *  schemas:
 *    MenuEntity:
 *      description: Menu entity.
 *      type: object
 *      required:
 *        - name
 *        - price
 *        - restaurant
 *      properties:
 *        id:
 *          type: string
 *          format: cuid
 *          example: 123e4567-e89b-12d3-a456-426655440000
 *        picture:
 *          type: string
 *          example: Imagen del plato.
 *        name:
 *          type: string
 *          example: Nombre del plato.
 *        description:
 *          type: string
 *          example: Descripción del plato.
 *        price:
 *          type: string
 *          example: Precio del plato.
 *        category:
 *          type: string
 *          example: Categoría del plato.
 *        restaurant:
 *          type: string
 *          example: Restaurante de donde es el plato.
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
