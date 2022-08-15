const path = require('path');
const fs = require('fs');

export function walkDocs(dir: string): string[] {
  const modulesFiles = requireContext(`../../${dir}`, true, /\.md$/);

  // you do not need `import app from './modules/app'`
  // it will auto require all vuex module from modules file
  return modulesFiles.keys().map(filePath => {
    return '/'+ dir + '/' + path.basename(filePath);
  });
}

function requireContext(base = '.', scanSubDirectories = false, regularExpression = /\.vue$/) {
  const files = {};

  function readDirectory(directory) {
    fs.readdirSync(directory).forEach((file) => {
      const fullPath = path.resolve(directory, file);

      if (fs.statSync(fullPath).isDirectory()) {
        if (scanSubDirectories) readDirectory(fullPath);
        return;
      }
      if (!regularExpression.test(fullPath)) return;

      files[fullPath] = true;
    });
  }

  readDirectory(path.resolve(__dirname, base));

  function Module(file) {
    return require(file);
  }

  Module.keys = () => Object.keys(files);
  return Module;
};