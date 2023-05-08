function isPangram(sentence) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const letters = sentence.toLowerCase().replace(/[^a-z]/g, '');
  
    for (let char of alphabet) {
      if (letters.indexOf(char) === -1) {
        return false;
      }
    }
  
    return true;
  }
  
  const sentence = "The quick brown fox jumps over the lazy dog";
  console.log(isPangram(sentence));