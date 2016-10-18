export function getFullUrl(req ){
  return (req.isSecure()) ? 'https' : 'http' + '://' + req.headers.host + req.url;
}
