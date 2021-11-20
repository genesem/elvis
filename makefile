
SHELL=/bin/bash
export NO_COLOR=1

DIST=./dist/
# SRC_FILES=$(wildcard src/**/*.svelte) $(wildcard src/**/*.js) $(wildcard *.js) $(wildcard src/**/*.css) $(wildcard src/*.svelte) $(wildcard src/*.js) $(wildcard src/*.css)

export OUTDIR=$(DIST)
export INPUTDIR=./src/
export OUTMAPS=true
export NODE_ENV=development

default: build
clean:
	rm -fr $(DIST)** 

init:
	yarn init --yes

install:
	yarn install --yes

build: export NODE_ENV=production
build: export OUTMAPS=false
build:
	rm -fr $(DIST)** 
	npx vite build
	npx eleventy
	rm -rf $(DIST)manifest.json
	@cd $(DIST) && startweb.cmd

run: 
	npx dev

pages:
	npx eleventy

.PHONY: clean init install build run pages
