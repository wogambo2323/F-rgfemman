const cards = [
"Jag har aldrig bajsat på mig.",
"Jag har aldrig varit i Finland.",
"Jag har aldrig velat kyssa min granne.",
"Jag har aldrig försökt pruta på ICA.",
"Jag har aldrig kysst en av samma kön.",
"Jag har druckit öl med en kändis.<br>🍺 Ta 1 shot.",
"Jag har tagit selfie med 5 kändisar.",
"Nämn 5 fotbollsspelare på 8 sekunder.",
"Nämn 5 länder på bokstaven S på 10 sekunder.",
"Jag har aldrig råkat skicka ett meddelande till fel person.<br>🍺 Ta en extra shot.",
"Nämn 10 svenska städer på 15 sekunder.<br>Misslyckas du? 🍺 Ta en extra shot.",
"Har du någon gång glömt bort en väns födelsedag? Svara ärligt.",
"Sjung första versen på Blinka lilla stjärna utan att skratta.",
"Jag har aldrig tappat min mobil i toaletten eller vatten.",
"Jag har aldrig somnat under en film.",
"Är du den som oftast kommer sent?",
"Säg fem djur på bokstaven S på 10 sekunder.",
"Jag har aldrig glömt var jag parkerade bilen eller cykeln.",
"Nämn tre filmer med samma skådespelare på 15 sekunder.",
"Har du någon gång brutit ett löfte?",
"Gör din bästa imitation av en höna.",
"Jag har aldrig gått vilse i en stad.",
"Säg alfabetet baklänges från Ö till T.",
"Tycker du att ananas hör hemma på pizza?",
"Jag har aldrig haft tröjan ut och in en hel dag.",
"Nämn fyra huvudstäder på 10 sekunder.",
"Berätta ditt mest pinsamma barndomsminne.",
"Gör en segerdans i fem sekunder.",
"Jag har aldrig glömt ett namn direkt efter en presentation.",
"Peka på personen med fulast garv."
];

const colors = [
"red","green","blue","yellow",
"blue","red","yellow","green",
"red","green","blue","yellow",
"red","green","blue","yellow",
"red","green","blue","yellow",
"red","green","blue","yellow",
"red","green","blue","yellow",
"red","green"
];


function createBoard(){

    const board = document.getElementById("board");
    board.innerHTML="";

    cards.forEach((text,index)=>{

        let card=document.createElement("div");
        card.className="card";

        card.innerHTML=`
        <div class="inner">
            <div class="side back">?</div>
            <div class="side front ${colors[index % colors.length]}">
                ${text}
            </div>
        </div>
        `;

        card.onclick=()=>{
            card.classList.toggle("open");
        };

        board.appendChild(card);

    });
}


function resetGame(){
    cards.sort(()=>Math.random()-0.5);
    createBoard();
}

createBoard();
