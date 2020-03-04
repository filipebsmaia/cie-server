const Antl = use('Antl');

class User {
  get validateAll() {
    return true;
  }

  get rules() {
    const userId = this.ctx.params.id;
    return {
      name: 'string',
      email: `email|unique:staff,email,id,${userId}|max:255`,
      password: 'confirmed|max:60',
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
