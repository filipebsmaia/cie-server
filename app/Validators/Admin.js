const Antl = use('Antl');

class User {
  get validateAll() {
    return true;
  }

  get rules() {
    return {
      name: 'required|unique:staff',
      email: 'required|email|unique:staff|max:255',
      password: 'required|confirmed|max:60',
      instituition_id: 'required|integer|exists:instituitions,id',
    };
  }

  get messages() {
    return Antl.list('validation');
  }
}

module.exports = User;
