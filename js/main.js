randomMotivationQuote();
function randomMotivationQuote(){
    const motivationQuotes = [
        "whauhwhauhwhauhwhauw en larissa wint goud!",
        "woohoohoo wat krijgen we nu? ooh jah jah jah Larissa staat nu eerste!",
        "klaar voor de start... PANG.... af!",
        "bling bling De gouden beker bling bling",
        "woehoe! Zet hem op vandaag!",
    ]

    const randomQuote = motivationQuotes[Math.floor(Math.random() * motivationQuotes.length)];
    console.log(randomQuote)

    const dagschema = document.getElementById('dagSchema');
    dagschema.insertAdjacentHTML("beforeend", `<li>${randomQuote}</li>`);

}