

function generateQuote() {

    var quote = [


        `“ If you tell the truth, you don't have to remember anything.” ` ,


        `“Be yourself; everyone else is already taken.” `,

        `“In three words I can sum up everything I've learned about life: it goes on.”`,

        `“So many books, so little time.”`,

        `“A room without books is like a body without a soul.”`,

        `“Be the change that you wish to see in the world.”`,

        `“You only live once, but if you do it right, once is enough.”`


    ]


    var auther = [

        `― Mark Twain ` ,

        `― Oscar Wilde`,

        `― Robert Frost`,

        `― Frank Zappa`,

        `― Marcus Tullius Cicero`,

        `― Mahatma Gandhi`,

        `― Mae West`

    ]


    let x = Math.random() * 7;
    let a = Math.floor(x);
    console.log(x);
    console.log(a)
    console.log(quote[a])
    console.log( auther[a])

    document.getElementById('quoteOutput').innerHTML = quote[a]
    document.getElementById('autherOutput').innerHTML = auther[a];





}





