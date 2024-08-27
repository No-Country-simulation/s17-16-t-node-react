/**
 * @swagger
 * paths:
 *  /cars/{:id}:
 *    put:
 *      tags:
 *        - Car Routes
 *      summary: Edit Car.
 *      description: Edit Car.
 *      operationId: updateCar
 *      parameters:
 *        - $ref: '#/components/parameters/id'
 *      requestBody:
 *       description: Edit Car.
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/body/carEdit'
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
