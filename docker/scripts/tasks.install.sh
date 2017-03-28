#!/bin/bash

ProjectName="MYAPP"
echo -n "Project name ($ProjectName)? "
read answer
if [ $answer ]; then
  ProjectName="$answer"
fi

mkdir ~/nodecache && chmod 777 ~/nodecache

echo "$ProjectName" > projectname

cd docker && mkdir ../$ProjectName && docker-compose -f docker-compose.install.yml run --rm --user $(id -u):$(id -g) node ng new $ProjectName
