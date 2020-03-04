const Admin = use('App/Models/Admin');
class AdminController {
  async index({ request }) {
    const { page } = request.get();

    const admins = await Admin.query().paginate(page);
    return admins;
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

    const admin = await Admin.create({
      ...data,
      instituition_id: user.instituition_id,
    });

    return admin;
  }

  async show({ params }) {
    const admin = await Admin.findOrFail(params.id);

    return admin;
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

    const admin = await Admin.findOrFail(params.id);

    admin.merge(data);

    await admin.save();

    return admin;
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
    const admin = await Admin.findOrFail(params.id);
    await admin.delete();

    return response.ok();
  }
}

module.exports = AdminController;
