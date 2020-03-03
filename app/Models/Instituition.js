/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class Instituition extends Model {
  users() {
    return this.hasMany('App/Models/User');
  }

  courses() {
    return this.hasMany('App/Models/Course');
  }

  categories() {
    return this.hasMany('App/Models/Category');
  }
}

module.exports = Instituition;
