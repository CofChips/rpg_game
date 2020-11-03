let selectedChar = false;
let selectedOpp = false;
let needNewOpp = false;
let oppRemain = 3;

let naruto = {
    health: 500,
    attack: 25,
    originalAttack: 25,
    counter: 50,
    image: "https://vignette.wikia.nocookie.net/naruto/images/0/09/Naruto_newshot.png/revision/latest/scale-to-width-down/300?cb=20170621101134",
    alt: "Naruto"
}

let itachi = {
    health: 450,
    attack: 20,
    originalAttack: 20,
    counter: 50,
    image: "https://vignette.wikia.nocookie.net/naruto/images/b/bb/Itachi.png/revision/latest/scale-to-width-down/300?cb=20160125182202",
    alt: "Itachi"
}

let rock = {
    health: 350,
    attack: 18,
    originalAttack: 18,
    counter: 36,
    image: "https://vignette.wikia.nocookie.net/naruto/images/9/97/Rock_Lee_Part_I.png/revision/latest/scale-to-width-down/300?cb=20181229065526",
    alt: "Rock"
}

let sakura = {
    health: 300,
    attack: 30,
    originalAttack: 30,
    counter: 60,
    image: "https://vignette.wikia.nocookie.net/naruto/images/6/64/Sakura_Part_1.png/revision/latest/scale-to-width-down/300?cb=20170726101444",
    alt: "Sakura"
}

let opponent;
let character;

function fillOpponent() {
    $("#opponent").remove();
    $("#selectionOpp").append(Opponent);
    $("#opponentImage").attr("src", opponent.image)
    $("#opponentImage").attr("alt", opponent.alt)
    $("#opponentHealth").text(opponent.health)
    needNewOpp = false;
    selectedOpp = true
}

function fillCharacter() {
    $("#selection").append(Character);
    $("#characterImage").attr("src", character.image)
    $("#characterImage").attr("alt", character.alt)
    $("#characterHealth").text(character.health)
    $("#characterAttack").attr("style", "")
    selectedChar = true
}

function updateHealthChar() {
    if (character.health <= 0) {
        $("#characterHealth").text("You're knocked out!")
        $("#characterCard").attr("class","card character border border-danger")
        needNewOpp = true
    }
    else {
        $("#characterHealth").text(character.health)
    }

}

function updateHealthOpp() {
    if (opponent.health <= 0) {
        needNewOpp = true;
        $("#opponentHealth").text("I need a break! Select someone else!")
        selectedOpp = false;
    }
    else {
        $("#opponentHealth").text(opponent.health)
    }


}

let Opponent = `
<div class="col-lg-3 col-md-6 m-auto" id="opponent">
                <div class="card character" >
                    <div class="card-body">
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
<div class="col-lg-3 col-md-6 m-auto" id="character">
<div class="card character" id="characterCard" >
    <div class="card-body">
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
        $("#charTitle").attr("style", "")
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
        $("#oppTitle").attr("style", "")
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
    }


})

$(document).on("click", "button", function () {
    console.log("attack: ", character.attack)
    if (needNewOpp === false) {
        opponent.health -= character.attack
        character.health -= opponent.counter
        character.attack += character.originalAttack
        updateHealthOpp();
        updateHealthChar();
    }

})



