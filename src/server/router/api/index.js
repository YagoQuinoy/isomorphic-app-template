import * as helloRouter from './hello.router';

/* NOTE: Import here more api controller routes */

/**
 * Import and routes all controller routers
 * @param  {Server} server
 */
export function route(server) {
 helloRouter.route(server);

 /* NOTE: Add here more api controller routes */
};
