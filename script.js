function firstChar(text) {
  // Loop through each character
  for (let i = 0; i < text.length; i++) {
    // Check if character is NOT a space
    if (text[i] !== ' ') {
      return text[i];
    }
  }
  // If no non-space character is found
  return '';
}

// Do not change the code below
// const text = prompt("Enter text:");
alert(firstChar(text));
