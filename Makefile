install:
	npm install

lint:
	npx eslint .

publish:
	npm publish --dry-run

brain-games:
	node bin/brain-games.js
