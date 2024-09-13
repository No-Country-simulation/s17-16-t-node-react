/**
 * @swagger
 * paths:
 *  /menus/upload:
 *    put:
 *      tags:
 *        - Menu Routes
 *      summary: Edit Menu.
 *      description: Edit Menu.
 *      operationId: updateMenu
 *      parameters:
 *        - $ref: '#/components/parameters/id'
 *      requestBody:
 *        description: Edit Menu.
 *        required: true
 *        content:
 *          multipart/form-data:
 *            schema:
 *              $ref: '#/components/schemas/uploadPicture'
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
