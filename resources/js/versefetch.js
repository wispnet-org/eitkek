export async function loadVerseOfTheDay() {
  const res = await fetch('./resources/json/nkjverses.json');
  const verses = await res.json();

  const today = new Date();
  const dayOfYear = Math.floor((today - new Date(today.getFullYear(), 0, 0)) / 86400000);
  const verse = verses[dayOfYear % verses.length];

  const formattedText = verse.text.replace(/^(\d+)[.:]?\s?/gm, '<sup>$1</sup> ');
  
  document.getElementById('verse-text').innerHTML = formattedText;

  document.getElementById('verse-ref').textContent = verse.ref;
  document.getElementById('verse-image').src = verse.image;
}
