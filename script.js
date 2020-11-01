let selectedChar = false;
let selectedOpp = false;

let naruto = {
    health: 500,
    attack: 25,
    counter: 15,
}

let itachi = {
    health: 450,
    attack: 20,
    counter: 20,
}

let rock = {
    health: 350,
    attack: 18,
    counter: 15,
}

let sakura = {
    health: 300,
    attack: 30,
    counter: 25,
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

$(document).on("click", ".character", function () {
    console.log($(this).attr("id"))
    if (selectedChar === false) {
        switch ($(this).attr("id")) {
            case "Naruto":
                $("#selection").append(Naruto)
                $("#narutoHealth").text(naruto.health)
                $("#narutoAttack").attr("style","")
                break;
            case "Itachi":
                $("#selection").append(Itachi)
                $("#itachiHealth").text(itachi.health)
                $("#itachiAttack").attr("style","")
                break;
            case "Rock":
                $("#selection").append(Rock)
                $("#rockHealth").text(rock.health)
                $("#rockAttack").attr("style","")
                break;
            case "Sakura":
                $("#selection").append(Sakura)
                $("#sakuraHealth").text(sakura.health)
                $("#sakuraAttack").attr("style","")
                break;
        }

        $("#yourName").text($(this).attr("id"))
        selectedChar = true
        $(this).attr("style", "visibility: hidden")
    }
    else if (selectedChar === true && selectedOpp === false) {
        switch ($(this).attr("id")) {
            case "Naruto":
                $("#selectionOpp").append(Naruto);
                $("#yourOpp").text($(this).attr("id"));
                $("#narutoHealth").text(sakura.health)
                selectedOpp = true
                $(this).attr("style", "visibility: hidden")
                break;
            case "Itachi":
                $("#selectionOpp").append(Itachi);
                $("#yourOpp").text($(this).attr("id"));
                $("#itachiHealth").text(sakura.health)
                selectedOpp = true
                $(this).attr("style", "visibility: hidden")
                break;
            case "Rock":
                $("#selectionOpp").append(Rock)
                $("#yourOpp").text($(this).attr("id"))
                $("#rockHealth").text(sakura.health)
                selectedOpp = true
                $(this).attr("style", "visibility: hidden")
                break;
            case "Sakura":
                $("#selectionOpp").append(Sakura)
                $("#yourOpp").text($(this).attr("id"))
                $("#sakuraHealth").text(sakura.health)
                selectedOpp = true
                $(this).attr("style", "visibility: hidden")
                break;
        }

        // $("#yourOpp").text($(this).attr("id"))
        // selectedOpp = true
        // $(this).attr("style", "visibility: hidden")
    }

})



