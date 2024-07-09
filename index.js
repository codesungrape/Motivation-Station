
//A message generator program using JavaScript Use Git version control Use command line that spits out positive motivational messages.

const motivationalQuotes = {
    quotes: [
        "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
        "Believe you can and you're halfway there. - Theodore Roosevelt",
        "It does not matter how slowly you go, as long as you do not stop. - Confucius",    
        "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
        "Start where you are. Use what you have. Do what you can. - Arthur Ashe",
        "You have power over your mind - not outside events. Realize this, and you will find strength. - Marcus Aurelius",
        "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
        "When you arise in the morning think of what a privilege it is to be alive, to think, to enjoy, to love... - Marcus Aurelius",
        "Everything we hear is an opinion, not a fact. Everything we see is a perspective, not the truth. - Marcus Aurelius" ,
        "Accept the things to which fate binds you, and love the people with whom fate brings you together, but do so with all your heart. - Marcus Aurelius",
        "The best revenge is to be unlike him who performed the injury. - Marcus Aurelius"
    ]};
    

function motivationalQuoteGenerator(motivationalQuotes){

    // generate random index
    const randomIndex = Math.floor(Math.random() * Object.values(motivationalQuotes.quotes).length);

    console.log(motivationalQuotes.quotes[randomIndex]);


}

motivationalQuoteGenerator(motivationalQuotes);

/*  Can also be written without the input parameter. I have included the input parameter for clarity purposes. Please see below. 


function motivationalQuoteGenerator(){

    // generate random index
    const randomIndex = Math.floor(Math.random() * Object.values(motivationalQuotes.quotes).length);

    console.log(motivationalQuotes.quotes[randomIndex]);


}

motivationalQuoteGenerator();
*/
