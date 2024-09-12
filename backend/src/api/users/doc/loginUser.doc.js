/**
 *  @swagger
 * paths:
 *  /users/login:
 *    post:
 *      tags:
 *        - User Routes
 *      summary: Login User.
 *      description: Login User.
 *      operationId: login
 *      requestBody:
 *       description: Login User.
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/body/userLogin'
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
