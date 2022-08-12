export function walkDocs(dir: string): string[] {
  const modulesFiles = require.context(`../../${dir}`, true, /\.md$/);

  // you do not need `import app from './modules/app'`
  // it will auto require all vuex module from modules file
  return modulesFiles.keys().reduce((modules, modulePath) => {
    // set './app.js' => 'app'
    const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1');
    const value = modulesFiles(modulePath);
    modules[moduleName] = value.default;
    return modules;
  }, '');
}