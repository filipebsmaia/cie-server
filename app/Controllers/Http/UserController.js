const User = use('App/Models/User');
class UserController {
  async index({ request, response, view }) {}

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

  async show({ params, request, response, view }) {}

  async update({ params, request, response }) {}

  async destroy({ params, request, response }) {}
}

module.exports = UserController;
