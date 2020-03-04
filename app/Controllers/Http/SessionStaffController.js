class SessionStaffController {
  async store({ request, auth }) {
    const { email, password } = request.all();

    const staffAuth = auth.authenticator('staff');
    const token = await staffAuth.attempt(email, password);

    return token;
  }
}

module.exports = SessionStaffController;
