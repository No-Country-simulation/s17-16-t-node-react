/**
 *  @swagger
 * paths:
 *  /users/register:
 *    post:
 *      tags:
 *        - User Routes
 *      summary: Register User.
 *      description: Register User.
 *      operationId: addUser
 *      requestBody:
 *        description: Register User.
 *        required: true
 *        content:
 *          multipart/form-data:
 *            schema:
 *              $ref: '#/components/schemas/uploadAvatar'
 *          application/json:
 *            schema:
 *              $ref: '#/components/body/userEdit'
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
