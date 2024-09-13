/**
 * @swagger
 * paths:
 *  /users/upload:
 *    put:
 *      tags:
 *        - User Routes
 *      summary: Edit User.
 *      description: Edit User.
 *      operationId: updateUser
 *      parameters:
 *        - $ref: '#/components/parameters/id'
 *      requestBody:
 *        description: Edit User.
 *        required: true
 *        content:
 *          multipart/form-data:
 *            schema:
 *              $ref: '#/components/schemas/uploadAvatar'
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
