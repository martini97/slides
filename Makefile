static_dir = _static

clean:
	@rm -rf ${static_dir}

build:
	@yarn run reveal-md slides \
		--static ${_static} \
		--static-dirs=assets \
		--glob '*.md'

serve:
	@npx serve ${static_dir}

run: clean build serve

default: clean build

deploy: clean build
	@yarn run gh-pages -d ${static_dir}

.DEFAULT_GOAL := default
