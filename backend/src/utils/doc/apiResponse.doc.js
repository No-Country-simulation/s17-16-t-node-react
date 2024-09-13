/**
 * @swagger
 * components:
 *  responses:
 *    apiResponse:
 *      description: The Api responde entity
 *      type: object
 *      properties:
 *        code:
 *          type: integer
 *          format: int32
 *          example: 200
 *        status:
 *          type: string
 *          example: success
 *        description:
 *          type: string
 *          example: ok
 *        endPoint:
 *          type: string
 *          example: getRouter
 *        limit:
 *          type: string
 *          example: You have 1500 requests every 15 minutes
 *        remaining:
 *          type: string
 *          example: You have 1480 remaining requests
 *        rest:
 *          type: string
 *          example: 4 minute and 46 seconds to reset
 *        data:
 *          type: object
 *          example: { }
 *    notFound:
 *      properties:
 *        code:
 *          type: integer
 *          format: int32
 *          example: 404
 *        status:
 *          type: string
 *          example: error
 *        description:
 *          type: string
 *          example: Not found
 *        endPoint:
 *          type: string
 *          example: getRouter
 *        limit:
 *          type: string
 *          example: You have 1500 requests every 15 minutes
 *        remaining:
 *          type: string
 *          example: You have 1480 remaining requests
 *        rest:
 *          type: string
 *          example: 4 minute and 46 seconds to reset
 *        data:
 *          type: object
 *          example: { }
 *    notServer:
 *      properties:
 *        code:
 *          type: integer
 *          format: int32
 *          example: 500
 *        status:
 *          type: string
 *          example: Error
 *        description:
 *          type: string
 *          example: Server error
 *        endPoint:
 *          type: string
 *          example: getRouter
 *        limit:
 *          type: string
 *          example: You have 1500 requests every 15 minutes
 *        remaining:
 *          type: string
 *          example: You have 1480 remaining requests
 *        rest:
 *          type: string
 *          example: 4 minute and 46 seconds to reset
 *        data:
 *          type: object
 *          example: { }
 */
