/**
 * @swagger
 * paths:
 *  /status:
 *    post:
 *      tags:
 *        - Statu Routes
 *      summary: Create Status.
 *      description: Create Status.
 *      operationId: addStatus
 *      requestBody:
 *        description: Create Status.
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/body/status'
 *      responses:
 *        201:
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
