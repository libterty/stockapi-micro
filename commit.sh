#!/bin/bash

# How to use
# commit.sh takes to args
# first is `commit`
# second is the branch name you want to push

echo 'Starting to Commit!'

if [ $1 = commit ]; then
  npm run test
  if [ $? = 0 ]; then
    echo Unit Test Pass and ready to start commit action
    git push origin $2
    exit 0
  else
    echo Unit Test Fail please checkt the result
    exit -1
  fi
else
  echo Wrong args detected
fi
