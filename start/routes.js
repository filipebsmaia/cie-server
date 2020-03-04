/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route');

Route.post('users', 'UserController.store').validator('User');

Route.group(() => {
  Route.resource('admin/users', 'AdminController')
    .apiOnly()
    .validator(new Map([[['admin.users.store'], ['Admin']]]));
}).middleware(['auth:admin']);

Route.group(() => {
  Route.resource('staff/users', 'StaffController')
    .apiOnly()
    .validator(
      new Map([
        [['staff.users.store'], ['Staff']],
        [['staff.users.update'], ['StaffUpdate']],
      ])
    );
}).middleware(['auth:staff']);

Route.post('sessions', 'SessionController.store').validator('Session');
Route.post('admin/sessions', 'SessionAdminController.store').validator(
  'Session'
);
Route.post('staff/sessions', 'SessionAdminController.store').validator(
  'Session'
);

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' };
});
