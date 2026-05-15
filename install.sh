#!/usr/bin/env bash
set -euo pipefail

REPO_URL="https://github.com/TheJeme/kakku.git"
INSTALL_DIR="${KAKKU_DIR:-$HOME/kakku}"

require_command() {
  if ! command -v "$1" >/dev/null 2>&1; then
    echo "Missing required command: $1" >&2
    exit 1
  fi
}

require_command git
require_command bash

if [ -d "$INSTALL_DIR/.git" ]; then
  echo "Updating existing Kakku checkout at $INSTALL_DIR"
  git -C "$INSTALL_DIR" pull --ff-only
elif [ -e "$INSTALL_DIR" ]; then
  echo "$INSTALL_DIR already exists and is not a Git checkout." >&2
  echo "Set KAKKU_DIR to another path or move the existing directory." >&2
  exit 1
else
  echo "Cloning KakkuOS into $INSTALL_DIR"
  git clone "$REPO_URL" "$INSTALL_DIR"
fi

chmod +x "$INSTALL_DIR/install.sh"
cd "$INSTALL_DIR"
exec bash ./install.sh
