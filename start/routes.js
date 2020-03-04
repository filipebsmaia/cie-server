/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route');

Route.post('users', 'UserController.store').validator('User');
Route.post('admin/users', 'AdminController.store').validator('Admin');
Route.post('staff/users', 'StaffController.store').validator('Staff');

Route.post('sessions', 'SessionController.store').validator('Session');

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' };
});
