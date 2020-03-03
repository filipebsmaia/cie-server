const User = use('App/Models/User');

class UserController {
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
}

module.exports = UserController;
