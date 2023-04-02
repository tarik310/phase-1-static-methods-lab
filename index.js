class Formatter {
  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  static sanitize(string) {
    // removes any non alpha-numeric characters except dash and single quotes (apostrophes)
    return string.replace(/[^a-zA-Z0-9\s'-]+/g, "");
  }
  static titleize(string){
    const excludedWords = ["the", "a", "an", "but", "of", "and", "for", "at", "by", "from"];

  const words = string.toLowerCase().split(" ");

  const capitalizedWords = words.map((word, index) => {
    if (index === 0 || !excludedWords.includes(word)) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    } else {
      return word;
    }
  });

  return capitalizedWords.join(" ");
  }
}