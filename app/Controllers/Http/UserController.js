/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */
const User = use('App/Models/User');

/**
 * Resourceful controller for interacting with user
 */
class UserController {
  /**
   * Show a list of all user.
   * GET user
   */
  async index({ request, response, view }) {}

  /**
   * Create/save a new user.
   * POST user
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request }) {
    const data = request.only([
      'name',
      'email',
      'password',
      'instituition_id',
      'course_id',
      'registration',
    ]);

    const user = await User.create(data);

    return user;
  }

  /**
   * Display a single user.
   * GET user/:id
   */
  async show({ params, request, response, view }) {}

  /**
   * Update user details.
   * PUT or PATCH user/:id
   */
  async update({ params, request, response }) {}

  /**
   * Delete a user with id.
   * DELETE user/:id
   */
  async destroy({ params, request, response }) {}
}

module.exports = UserController;
