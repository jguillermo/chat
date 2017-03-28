#!/bin/bash

export ProjectName=$(cat projectname)

#cd docker && docker-compose -f docker-compose.yml run --rm node $@
cd docker && docker-compose -f docker-compose.yml run --rm --user $(id -u):$(id -g) node $@
