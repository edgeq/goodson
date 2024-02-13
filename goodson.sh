#!/bin/bash

# Define the string to print
string1="$1"

# Check if a string is provided
if [[ -z "$string1" ]]; then
  echo "Please provide a song title to print."
  exit 1
fi

# Define an array of fonts
fonts=(avatar starwars big chunky epic isometric3 weird tinker-toy threepoint slant ogre)

# Loop through the fonts array
for font in "${fonts[@]}"; do
  # Print the string using the current font
  figlet -f "$font" "good son"
  figlet -f "$font" "$string1"
  figlet -f "$font" " "
  sleep 0.90 # Add a delay between each font
done

# Print the string one last time in the standard font
#figlet "$string1"
#figlet "$string2"