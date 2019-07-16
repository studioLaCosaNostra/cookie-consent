#!/bin/sh

set -x
# doc: https://www.gnu.org/software/bash/manual/html_node/The-Set-Builtin.html#The-Set-Builtin


setup_git() {
  git config --global user.email "travis@travis-ci.org"
  git config --global user.name "Travis CI"
}

change_to_master_branch() {
  git stash
  git checkout master
  git pull
  git stash pop
}

function commit_changes() {
  git add -A
  # Create a new commit with a custom message
  # with "[skip ci]" to avoid a build loop
  # and Travis build number for reference
  git commit -m "Travis update ($TRAVIS_BUILD_NUMBER)" -m "[skip ci]"
  return $?
}

function push_changes() {
  # Add new "origin" with access token in the git URL for authentication
  git push https://${GH_TOKEN}@github.com/$TRAVIS_REPO_SLUG master
  return $?
}

setup_git

change_to_master_branch

commit_changes

# Attempt to commit to git only if "git commit" succeeded
if [ $? -ne 0 ]; then
  echo "Cannot commit new version"
  exit $?
fi

echo "Push to GitHub"
push_changes