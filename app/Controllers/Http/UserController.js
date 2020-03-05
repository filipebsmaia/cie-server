const User = use('App/Models/User');
const Admin = use('App/Models/Admin');

const Staff = use('App/Models/Staff');
class UserController {
  async index({ request }) {
    const { page } = request.get();

    const users = await User.query().paginate(page);
    return users;
  }

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

  async show({ params }) {
    const user = await User.findOrFail(params.id);

    return user;
  }

  async update({ params, request, response, auth }) {
    const data = request.only(['name', 'email', 'password', 'avatar_id']);
    const { course_id, instituition_id } = request.all(); // eslint-disable-line camelcase

    const { user: authUser } = auth;

    console.log('----------------');
    console.log(authUser.name);
    console.log(authUser.id !== Number(params.id));

    if (
      !(authUser instanceof Admin) &&
      !(authUser instanceof Staff) &&
      authUser.id !== Number(params.id)
    ) {
      return response.unauthorized({
        error: {
          message: "You don't have permission for this.",
        },
      });
    }

    const finalData = () => {
      if (authUser instanceof Admin) {
        return { ...data, course_id };
      }
      if (authUser instanceof Staff) {
        return { ...data, course_id, instituition_id };
      }
      return data;
    };

    const user = await User.findOrFail(params.id);
    user.merge(finalData);

    await user.save();
    return user;
  }

  async destroy({ params, response, auth, properties }) {
    const { user: authUser } = auth;
    if (
      !(authUser instanceof Admin) &&
      !(authUser instanceof Staff) &&
      authUser.id !== params.id
    ) {
      return response.unauthorized({
        error: {
          message: "You don't have permission for this.",
        },
      });
    }

    const user = await User.findOrFail(params.id);
    await user.delete();

    return response.ok();
  }
}

module.exports = UserController;
