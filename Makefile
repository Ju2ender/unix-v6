install:
	npm install --save-dev rollup

build:
	npx rollup src/x.js -o dist/x.js -f cjs
