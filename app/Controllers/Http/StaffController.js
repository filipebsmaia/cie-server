const Staff = use('App/Models/Staff');
class StaffController {
  async index({ request }) {
    const { page } = request.get();

    const staffs = await Staff.query().paginate(page);
    return staffs;
  }

  async store({ response, request, auth }) {
    const data = request.only([
      'name',
      'email',
      'password',
      'tel',
      'avatar_id',
    ]);

    const { user } = auth;
    if (!user.root) {
      return response.unauthorized({
        error: {
          message: "You don't have permission for this.",
        },
      });
    }

    const staff = await Staff.create(data);

    return staff;
  }

  async show({ params }) {
    const staff = await Staff.findOrFail(params.id);

    return staff;
  }

  async update({ params, request, response, auth }) {
    const data = request.only([
      'name',
      'email',
      'password',
      'tel',
      'root',
      'avatar_id',
    ]);

    const { user } = auth;

    if (
      (params.id !== user.id && !user.root) ||
      (data.root === true && !user.root)
    ) {
      return response.unauthorized({
        error: {
          message: "You don't have permission for this.",
        },
      });
    }

    const staff = await Staff.findOrFail(params.id);

    staff.merge(data);

    await staff.save();

    return staff;
  }

  async destroy({ params, response, auth }) {
    const { user } = auth;
    if (!user.root) {
      return response.unauthorized({
        error: {
          message: "You don't have permission for this.",
        },
      });
    }
    const staff = await Staff.findOrFail(params.id);
    await staff.delete();

    return response.ok();
  }
}

module.exports = StaffController;
