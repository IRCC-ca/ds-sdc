cd packages/ds/core
npm version patch
npm i
cd ../web
npm version patch
npm i
cd ../angular
npm version patch
npm i
cd ../react
npm version patch
npm i
cd ../../..
npm version patch
npm i
git add package-lock.json
git add package.json
git add packages/ds/angular/package-lock.json
git add packages/ds/angular/package.json
git add packages/ds/core/package-lock.json
git add packages/ds/core/package.json
git add packages/ds/react/package-lock.json
git add packages/ds/react/package.json
git add packages/ds/web/package-lock.json
git add packages/ds/web/package.json