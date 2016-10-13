import fs from 'fs';
import path from 'path';
import ejs from 'ejs';

// Server rendering
const port = (process.env.NODE_ENV === 'development') ? 3001 : 3000;
const favicon = `http://localhost:${port}/static/favicon.ico`;
const scripts = [`http://localhost:${port}/static/app.bundle.js`];

if(process.env.NODE_ENV === 'development') {
  scripts.push(`http://localhost:${port}/static/dev.bundle.js`);
}

export function render(cb) {
  ejs.renderFile(path.resolve(__dirname + '/templates/index.ejs'), {
    favicon: favicon,
    scripts: scripts
  }, function(err, str) {
    typeof cb === 'function' && cb(null, str);
  });

}
