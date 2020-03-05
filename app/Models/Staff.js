/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

/** @type {import('@adonisjs/framework/src/Hash')} */
const Hash = use('Hash');

class Staff extends Model {
  static boot() {
    super.boot();

    this.addHook('beforeSave', async staffInstance => {
      if (staffInstance.dirty.password) {
        staffInstance.password = await Hash.make(staffInstance.password);
      }
    });
  }

  static get hidden() {
    return ['password'];
  }
}

module.exports = Staff;
