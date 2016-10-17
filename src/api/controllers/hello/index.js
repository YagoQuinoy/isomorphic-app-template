import { sanitize, validate } from 'schema-inspector';

import helloSanitizationSchema from './schemas/hello.sanitization.schema';
import helloValidationSchema from './schemas/hello.validation.schema';

/**
 * Hello controller. Returns a salute!
 * @param  {Request} req
 * @param  {Response} res
 */
 export function getHello(req, res, next) {
  const params = sanitize(helloSanitizationSchema, req.params).data;
  const validated = validate(helloValidationSchema, params);

  if (!validated.valid) {
    res.send(422, validated.format());
    next();
    return;
  }

  res.send('Long time no see, ' + params.name);
  next();
};
