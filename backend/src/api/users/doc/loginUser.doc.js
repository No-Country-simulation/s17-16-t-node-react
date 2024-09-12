/**
 *  @swagger
 * paths:
 *  /users/login:
 *    post:
 *      tags:
 *        - User Routes
 *      summary: Create User.
 *      description: Create User.
 *      operationId: addUser
 *      requestBody:
 *       description: Create User.
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             $ref: '#/components/schemas/uploadImage'
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/carEntity'
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
 *        - bearerAuth: []
 */
