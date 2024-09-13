/**
 * @swagger
 * paths:
 *  /status:
 *    get:
 *      tags:
 *        - Statu Routes
 *      summary: Search status by value.
 *      description: Search status by value.
 *      operationId: getStatusByValue
 *      parameters:
 *        - $ref: '#/components/parameters/id'
 *        - $ref: '#/components/parameters/name'
 *        - $ref: '#/components/parameters/description'
 *        - $ref: '#/components/parameters/isActive'
 *      responses:
 *        200:
 *          description: Success
 *          content:
 *            application/json:
 *              schema:
 *                type: array
 *                items:
 *                  $ref: '#/components/responses/apiResponse'
 *        404:
 *          description: Not Found
 *          content:
 *            application/json:
 *              schema:
 *                type: array
 *                items:
 *                  $ref: '#/components/responses/notFound'
 *        500:
 *          description: Internal Server Error
 *          content:
 *            application/json:
 *              schema:
 *                type: array
 *                items:
 *                  $ref: '#/components/responses/notServer'
 *      security:
 *        - apiKeyAuth: []
 */
