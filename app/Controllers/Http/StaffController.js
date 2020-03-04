/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */
const Staff = use('App/Models/Staff');

/**
 * Resourceful controller for interacting with staff
 */
class StaffController {
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
      'avatar_id',
    ]);

    const staff = await Staff.create(data);

    return staff;
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

module.exports = StaffController;
