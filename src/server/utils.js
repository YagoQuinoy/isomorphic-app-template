/**
 * Get request origin
 * @param  {Request} req
 * @return {String}
 */
export function getOrigin(req) {
  return (req.isSecure()) ? 'https' : 'http' + '://' + req.headers.host
}

/**
 * Get request url
 * @param  {Request} req
 * @return {String}
 */
export function getUrl(req) {
  return getOrigin(req) + req.url
}
