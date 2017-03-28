#!/bin/bash

export ProjectName=$(cat projectname)

docker-compose -f docker/docker-compose.yml down &&
docker-compose -f docker/docker-compose.yml up
