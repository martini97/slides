clean:
	@rm -rf _static

build:
	@yarn run reveal-md slides \
		--static \
		--static-dirs=assets \
		--glob '*.md'

serve:
	@npx serve _static

run: clean build serve

default: clean build

.DEFAULT_GOAL := default
