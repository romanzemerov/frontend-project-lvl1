install:
	npm install

lint:
	npx eslint .

pretty:
	npx prettier --write .

publish:
	npm publish --dry-run

brain-games:
	node bin/brain-games.js
