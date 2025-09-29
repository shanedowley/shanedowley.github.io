#!/bin/bash

# Exit on error
set -e

echo ">>> Installing rbenv and ruby-build..."
brew install rbenv ruby-build

echo ">>> Initializing rbenv in your shell..."
if ! grep -q 'rbenv init' ~/.zshrc; then
  echo 'eval "$(rbenv init - zsh)"' >> ~/.zshrc
  echo ">>> Added rbenv init to ~/.zshrc"
fi

# Load rbenv now without restarting shell
eval "$(rbenv init - zsh)"

echo ">>> Installing Ruby 3.3.3..."
rbenv install -s 3.3.3

echo ">>> Setting Ruby 3.3.3 locally for this project..."
rbenv local 3.3.3

echo ">>> Installing Bundler..."
gem install bundler

echo ">>> Installing project gems..."
bundle install

echo ">>> Done. To serve your site, run:"
echo "bundle exec jekyll serve"
