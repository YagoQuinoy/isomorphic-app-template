export default function apiMiddleware() {
  return next => action => {
    const { promise, type, ...rest } = action;

    if (!promise) {
      return next(action);
    }

    const SUCCESS = type;
    const REQUEST = type + '_REQUEST';
    const FAILURE = type + '_FAILURE';

    next({ ...rest, type: REQUEST });

    return promise
      .then((response) => {
        next({ ...rest, response, type: SUCCESS });

        return true;
      })
      .catch(error => {
        next({ ...rest, error, type: FAILURE });
        console.error(error); // NOTE: Esto se tiene que registrar en lugares como Opbeat

        return false;
      });
  };
}
