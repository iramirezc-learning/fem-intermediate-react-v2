clean-up:
	rm -rf .cache coverage dist node_modules

install:
	npm install

dev:
	npm run dev

format:
	npm run format

lint:
	npm run lint

test:
	npm run test

test-c:
	npm run test:coverage

test-u:
	npm run test:update

test-w:
	npm run test:watch

