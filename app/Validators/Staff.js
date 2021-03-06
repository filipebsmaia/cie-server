const Antl = use('Antl');

class User {
  get validateAll() {
    return true;
  }

  get rules() {
    return {
      name: 'required|string',
      email: 'required|email|unique:staff|max:255',
      password: 'required|confirmed|max:60',
      tel: 'string',
      root: 'boolean',
      avatar_id: 'integer|exists:files,id',
    };
  }

  get messages() {
    return Antl.list('validation');
  }
}

module.exports = User;
