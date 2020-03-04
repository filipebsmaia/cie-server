const Staff = use('App/Models/Staff');
class StaffController {
  async index({ request, response, view }) {}

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

  async show({ params, request, response, view }) {}

  async update({ params, request, response }) {}

  async destroy({ params, request, response }) {}
}

module.exports = StaffController;
