/**
 * @swagger
 * /restaurants/create:
 *   post:
 *     tags:
 *       - Restaurant Routes
 *     summary: Create a new restaurant
 *     description: Create a new restaurant with image upload
 *     operationId: createRestaurant
 *     requestBody:
 *       description: Datos del nuevo restaurante
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/entityRestaurant'
 *     responses:
 *       201:
 *         description: Restaurante creado con éxito
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/responses/apiResponse'
 *       404:
 *         description: No encontrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Restaurant not found"
 *       500:
 *         description: Error interno del servidor
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Internal Server Error"
 *     security:
 *       - apiKeyAuth: []
 *       - bearerAuth: []
 */
