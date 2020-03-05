/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route');

Route.group(() => {
  Route.resource('users', 'UserController')
    .apiOnly()
    .except(['update', 'destroy'])
    .validator(new Map([[['users.store'], ['User']]]));

  Route.resource('users', 'UserController')
    .only(['update', 'destroy'])
    .middleware(['auth:user,admin,staff']);

  // Route.resource('admin/manage/users', 'UserController')
  //   .apiOnly()
  //   .only(['update', 'destroy'])
  //   .middleware(['auth:admin']);

  // Route.resource('staff/manage/users', 'UserController')
  //   .apiOnly()
  //   .only(['update', 'destroy'])
  //   .middleware(['auth:staff']);
}).middleware();

Route.group(() => {
  Route.resource('admin/users', 'AdminController')
    .apiOnly()
    .validator(new Map([[['admin/users.store'], ['Admin']]]));
}).middleware(['auth:admin']);

Route.group(() => {
  Route.resource('staff/users', 'StaffController')
    .apiOnly()
    .validator(
      new Map([
        [['staff/users.store'], ['Staff']],
        [['staff/users.update'], ['StaffUpdate']],
      ])
    );
}).middleware(['auth:staff']);

Route.group(() => {
  Route.post('sessions', 'SessionController.store').validator('Session');
  Route.post('admin/sessions', 'SessionAdminController.store').validator(
    'Session'
  );
  Route.post('staff/sessions', 'SessionStaffController.store').validator(
    'Session'
  );
}).namespace('Session');

Route.get('/', () => {
  return { status: 'online' };
});
