let selectedChar = false;
let selectedOpp = false;

let naruto = {
    health: 500,
    attack: 25,
    counter: 15,
    image: "https://vignette.wikia.nocookie.net/naruto/images/0/09/Naruto_newshot.png/revision/latest/scale-to-width-down/300?cb=20170621101134",
    alt: "Naruto"
}

let itachi = {
    health: 450,
    attack: 20,
    counter: 20,
    image: "https://vignette.wikia.nocookie.net/naruto/images/b/bb/Itachi.png/revision/latest/scale-to-width-down/300?cb=20160125182202",
    alt: "Itachi"
}

let rock = {
    health: 350,
    attack: 18,
    counter: 15,
    image: "https://vignette.wikia.nocookie.net/naruto/images/9/97/Rock_Lee_Part_I.png/revision/latest/scale-to-width-down/300?cb=20181229065526",
    alt: "Rock"
}

let sakura = {
    health: 300,
    attack: 30,
    counter: 25,
    image: "https://vignette.wikia.nocookie.net/naruto/images/6/64/Sakura_Part_1.png/revision/latest/scale-to-width-down/300?cb=20170726101444",
    alt: "Sakura"
}

let opponent;
let character;

function fillOpponent() {
    $("#selectionOpp").append(Opponent);
    $("#opponentImage").attr("src", opponent.image)
    $("#opponentImage").attr("alt", opponent.alt)
    $("#opponentHealth").text(opponent.health)
    selectedOpp = true
}

function fillCharacter(){
    $("#selection").append(Character);
    $("#characterImage").attr("src", character.image)
    $("#characterImage").attr("alt", character.alt)
    $("#characterHealth").text(character.health)
    $("#characterAttack").attr("style","")
    selectedChar = true
}

let Naruto = `
<div class="col-lg-3 col-md-6 m-auto">
                <div class="card character" id="NarutoSelect">
                    <div class="card-body">
                      <h5 class="card-title">Card title</h5>
                      <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                      <img src="https://vignette.wikia.nocookie.net/naruto/images/0/09/Naruto_newshot.png/revision/latest/scale-to-width-down/300?cb=20170621101134" alt="Naruto" style="width: 100%"/>
                      <p>Health: <span id="narutoHealth"></span></p>
                      <div>
                      <button type="button" class="btn btn-success" style="visibility: hidden" id="narutoAttack" >Attack</button>
                      </div>
                    </div>
                  </div>
        </div>

`

let Itachi = `
<div class="col-lg-3 col-md-6 m-auto">
                <div class="card character" id="ItachiSelect">
                    <div class="card-body">
                      <h5 class="card-title">Card title</h5>
                      <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                      <img src="https://vignette.wikia.nocookie.net/naruto/images/b/bb/Itachi.png/revision/latest/scale-to-width-down/300?cb=20160125182202" alt="Itachi" style="width: 100%"/>
                      
                      <p>Health: <span id="itachiHealth"></span></p>
                      <button type="button" class="btn btn-success" style="visibility: hidden" id="itachiAttack">Attack</button>
                    </div>
                  </div>
            </div>
`

let Rock = `
<div class="col-lg-3 col-md-6 m-auto">
                <div class="card character" id="RockSelect">
                    <div class="card-body">
                      <h5 class="card-title">Card title</h5>
                      <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                      <img src="https://vignette.wikia.nocookie.net/naruto/images/9/97/Rock_Lee_Part_I.png/revision/latest/scale-to-width-down/300?cb=20181229065526" alt="Rock" style="width: 100%"/>
                      
                      <p>Health: <span id="rockHealth"></span></p>
                      <button type="button" class="btn btn-success" style="visibility: hidden" id="rockAttack">Attack</button>
                    </div>
                  </div>
            </div>
`

let Sakura = `
<div class="col-lg-3 col-md-6 m-auto">
                <div class="card character" id="SakuraSelect">
                    <div class="card-body">
                      <h5 class="card-title">Card title</h5>
                      <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                      <img src="https://vignette.wikia.nocookie.net/naruto/images/6/64/Sakura_Part_1.png/revision/latest/scale-to-width-down/300?cb=20170726101444" alt="Sakura" style="width: 100%"/>
                      <p>Health: <span id="sakuraHealth"></span></p>
                      <button type="button" class="btn btn-success" style="visibility: hidden" id="sakuraAttack">Attack</button>
                    </div>
                  </div>
            </div>
`

let Opponent = `
<div class="col-lg-3 col-md-6 m-auto">
                <div class="card character" id="opponent">
                    <div class="card-body">
                      <h5 class="card-title">Card title</h5>
                      <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                      <img src="#" alt="#" style="width: 100%" id="opponentImage"/>
                      <p>Health: <span id="opponentHealth"></span></p>
                      <div>
                      <button type="button" class="btn btn-success" style="visibility: hidden" id="opponentAttack" >Attack</button>
                      </div>
                    </div>
                  </div>
        </div>

`
let Character = `
<div class="col-lg-3 col-md-6 m-auto">
<div class="card character" id="character">
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
      <img src="#" alt="#" style="width: 100%" id="characterImage"/>
      <p>Health: <span id="characterHealth"></span></p>
      <div>
      <button type="button" class="btn btn-success" style="visibility: hidden" id="characterAttack" >Attack</button>
      </div>
    </div>
  </div>
</div>

`

$(document).on("click", ".character", function () {
    console.log($(this).attr("id"))
    if (selectedChar === false) {
        switch ($(this).attr("id")) {
            case "Naruto":
                character = naruto
                fillCharacter();
                break;
            case "Itachi":
                character = itachi;
                fillCharacter();
                break;
            case "Rock":
                character = rock;
                fillCharacter();
                break;
            case "Sakura":
                character = sakura;
                fillCharacter();
                break;
        }

        $("#yourName").text($(this).attr("id"))
        selectedChar = true
        $(this).attr("style", "visibility: hidden")
    }
    else if (selectedChar === true && selectedOpp === false) {
        switch ($(this).attr("id")) {
            case "Naruto":
                opponent = naruto
                $("#yourOpp").text($(this).attr("id"));
                $(this).attr("style", "visibility: hidden")
                fillOpponent()
                break;
            case "Itachi":
                opponent = itachi
                $("#yourOpp").text($(this).attr("id"));
                $(this).attr("style", "visibility: hidden")
                fillOpponent()
                break;
            case "Rock":
                opponent = rock
                $("#yourOpp").text($(this).attr("id"));
                $(this).attr("style", "visibility: hidden")
                fillOpponent()
                break;
            case "Sakura":
                opponent = sakura
                $("#yourOpp").text($(this).attr("id"));
                $(this).attr("style", "visibility: hidden")
                fillOpponent()
                break;
        }

        // $("#yourOpp").text($(this).attr("id"))
        // selectedOpp = true
        // $(this).attr("style", "visibility: hidden")
    }

    $(document).on("click", "button", function () {
        console.log("Button")
    })
})



