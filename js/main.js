

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


    let array = Math.random() * (quote.length) ;
    let indexArray = Math.floor( array );

    document.getElementById('quoteOutput').innerHTML = quote[indexArray]
    document.getElementById('autherOutput').innerHTML = auther[indexArray];
    

    // console.log(array);
    // console.log(indexArray);
    // console.log(quote[indexArray])
    // console.log( auther[indexArray])




}





