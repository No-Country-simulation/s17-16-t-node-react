/**
 * @swagger
 * paths:
 *  /roles:
 *    get:
 *      tags:
 *        - Role Routes
 *      summary: Search role by value.
 *      description: Search role by value.
 *      operationId: getRoleByValue
 *      parameters:
 *        - $ref: '#/components/parameters/id'
 *        - $ref: '#/components/parameters/name'
 *        - $ref: '#/components/parameters/description'
 *        - $ref: '#/components/parameters/permissions'
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
