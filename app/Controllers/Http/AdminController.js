const Admin = use('App/Models/Admin');
class AdminController {
  async index({ request, response, view }) {}

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

  async show({ params, request, response, view }) {}

  async update({ params, request, response }) {}

  async destroy({ params, request, response }) {}
}

module.exports = AdminController;
