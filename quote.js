const quotes = [
    "We ball - Yair Reyes-Lemus",
    "Be yourself; everyone else is already taken - Oscar Wilde",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "If you tell the truth, you don't have to remember anything. - Mark Twain",
    "A friend is someone who knows all about you and still loves you. - Elbert Hubbard",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment - Ralph Waldo Emerson",
    "That which does not kill us makes us stronger. - Friedrich Nietzsche",
    "We ball - Yair Reyes-Lemus",
    "Well done is better than well said. - Benjamin Franklin",
    "To be, or not to be, that is the question. - William Shakespeare",
    "The only thing we have to fear is fear itself. - Franklin D. Roosevelt",
    "Now I am become Death, the destroyer of worlds. - J. Robert Oppenheimer",
    "It does not matter how slowly you go as long as you do not stop. - Confucius",
    "We ball - Yair Reyes-Lemus",
    "Do what you can, with what you have, where you are. - Theodore Roosevelt",
    "Happiness depends upon ourselves. - Aristotle",
    "It is not length of life, but depth of life. - Ralph Waldo Emerson",
    "Act as if what you do makes a difference. It does. - William James",
    "Opportunities multiply as they are seized. - Sun Tzu",
    "He who opens a school door, closes a prison. - Victor Hugo",
    "There is nothing impossible to him who will try. - Alexander the Great",
    "We are what we repeatedly do. Excellence, then, is not an act, but a habit. - Aristotle",
    "Do not go where the path may lead, go instead where there is no path and leave a trail. - Ralph Waldo Emerson",
    "You cannot shake hands with a clenched fist. - Indira Gandhi",
    "It always seems impossible until it is done. - Nelson Mandela",
    "We ball - Yair Reyes-Lemus",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "Courage is resistance to fear, mastery of fear, not absence of fear. - Mark Twain",
    "Everything you can imagine is real. - Pablo Picasso",
    "We ball - Yair Reyes-Lemus",
    "We ball - Yair Reyes-Lemus",
    "You cannot choose your opponents. - Paolo Maldini",
    "I am not arguing, I'm just explaining why I'm right. - Unknown",
    "I used to think I was indecisive, but now I'm not too sure. - Unknown",
    "The road to success is dotted with many tempting parking spaces. - Will Rogers",
    "Some people graduate with honors, I am just honored to graduate. - John McEnroe",
    "Common sense is like deodorant. The people who need it most never use it. - Bill Murray",
    "Behind every great man is a woman rolling her eyes. - Jim Carrey",
    "I can resist everything except temptation. - Oscar Wilde",
    "A day without laughter is a day wasted. - Charlie Chaplin",
    "I told my wife the truth. I told her I was seeing a psychiatrist. Then she told me the truth: that she was seeing a psychiatrist, two plumbers, and a bartender. - Rodney Dangerfield",
    "Factos. - Cristiano Ronaldo"
];

let count = 0;
function getRandomQuote() {

    if (count === 0) {
        count++;
        return quotes[0];
        
    }
    else {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        return quotes[randomIndex];
    }
}

const quoteDisplay = document.getElementById('show-quote');
const quoteButton = document.getElementById('new-quote-button');

quoteButton.addEventListener('click', function () {
    quoteDisplay.textContent = getRandomQuote();
});
