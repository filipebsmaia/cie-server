class SessionController {
  async store({ request, auth }) {
    const { email, password } = request.all();

    const userAuth = auth.authenticator('user');
    const token = await userAuth.attempt(email, password);

    return token;
  }
}

module.exports = SessionController;
