const Antl = use('Antl');

class User {
  get validateAll() {
    return true;
  }

  get rules() {
    return {
      name: 'required|unique:users',
      email: 'required|email|unique:users|max:255',
      password: 'required|confirmed|max:60',
      instituition_id: 'required|integer|exists:instituitions,id',
      course_id: 'required|integer|exists:course,id',
      registration: 'required',
    };
  }

  get messages() {
    return Antl.list('validation');
  }
}

module.exports = User;
