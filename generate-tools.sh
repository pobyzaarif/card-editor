#!/bin/bash

# Path to the sidebar file
SIDEBAR_FILE="_sidebar.md"

# Path to the default template file
DEFAULT_FILE="tools/_default.md"

# Check if the default file exists
if [ ! -f "$DEFAULT_FILE" ]; then
  echo "Default file '$DEFAULT_FILE' does not exist. Exiting."
  exit 1
fi

# Extract all lines with 'tools/' from the sidebar file
grep -oE "tools/[a-zA-Z0-9_]+\.md" "$SIDEBAR_FILE" | while read -r file; do
  # Check if the file exists
  if [ ! -f "$file" ]; then
    # Create the directory if it doesn't exist
    mkdir -p "$(dirname "$file")"
    # Copy the default file to the new location
    cp "$DEFAULT_FILE" "$file"
    echo "Created file: $file"
  else
    echo "File already exists: $file"
  fi
done
