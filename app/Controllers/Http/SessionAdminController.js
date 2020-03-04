class SessionAdminController {
  async store({ request, auth }) {
    const { email, password } = request.all();

    const adminAuth = auth.authenticator('admin');
    const token = await adminAuth.attempt(email, password);

    return token;
  }
}

module.exports = SessionAdminController;
