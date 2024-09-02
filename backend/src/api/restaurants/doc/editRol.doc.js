/**
 * @swagger
 * paths:
 *  /rols/{:id}:
 *    put:
 *      tags:
 *        - Rol Routes
 *      summary: Edit rol.
 *      description: Edit rol.
 *      operationId: updateRol
 *      parameters:
 *        - $ref: '#/components/parameters/id'
 *      requestBody:
 *       description: Edit rol.
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/body/rolEdit'
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
