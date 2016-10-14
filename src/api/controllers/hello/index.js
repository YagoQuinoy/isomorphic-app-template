/**
 * Hello controller. Returns a salute!
 * @param  {Request} req
 * @param  {Response} res
 */
 export function getHello(req, res, next) {
  res.send('Hello ' + req.params.name);
  next();
};
