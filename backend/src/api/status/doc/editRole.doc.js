/**
 * @swagger
 * paths:
 *  /status:
 *    put:
 *      tags:
 *        - Status Routes
 *      summary: Edit status.
 *      description: Edit status.
 *      operationId: updateStatus
 *      parameters:
 *        - $ref: '#/components/parameters/id'
 *      requestBody:
 *        description: Edit status.
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/body/status'
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
