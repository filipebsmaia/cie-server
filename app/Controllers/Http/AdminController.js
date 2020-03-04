/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */
const Admin = use('App/Models/Admin');

/**
 * Resourceful controller for interacting with staff
 */
class AdminController {
  /**
   * Show a list of all staff.
   * GET staff
   */
  async index({ request, response, view }) {}

  /**
   * Create/save a new staff.
   * POST staff
   */
  async store({ request }) {
    const data = request.only([
      'name',
      'email',
      'password',
      'tel',
      'instituition_id',
      'avatar_id',
    ]);

    const admin = await Admin.create(data);

    return admin;
  }

  /**
   * Display a single staff.
   * GET staff/:id
   */
  async show({ params, request, response, view }) {}

  /**
   * Update staff details.
   * PUT or PATCH staff/:id
   */
  async update({ params, request, response }) {}

  /**
   * Delete a staff with id.
   * DELETE staff/:id
   */
  async destroy({ params, request, response }) {}
}

module.exports = AdminController;
