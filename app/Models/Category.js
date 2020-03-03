/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class Category extends Model {
  courses() {
    return this.belongsToMany('App/Models/Course').pivotTable(
      'course_category'
    );
  }
}

module.exports = Category;
