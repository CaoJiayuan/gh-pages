
set -e

npm run build

cd docs/.vuepress/dist

git init
git add -A
git commit -m 'deploy'
git push -f https://${GITHUB_TOKEN}@github.com/caojiayuan/caojiayuan.github.io.git gh-pages

cd -