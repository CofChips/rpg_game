let selectedChar = false;
let selectedOpp = false;

let Naruto = `
<div class="col-lg-3 col-md-6 m-auto">
                <div class="card character" id="Naruto">
                    <div class="card-body">
                      <h5 class="card-title">Card title</h5>
                      <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                      <img src="https://vignette.wikia.nocookie.net/naruto/images/0/09/Naruto_newshot.png/revision/latest/scale-to-width-down/300?cb=20170621101134" alt="Naruto" style="width: 100%"/>
                      <a href="#" class="card-link">Card link</a>
                      <a href="#" class="card-link">Another link</a>
                    </div>
                  </div>
        </div>

`

let Itachi = `
<div class="col-lg-3 col-md-6 m-auto">
                <div class="card character" id="Itachi">
                    <div class="card-body">
                      <h5 class="card-title">Card title</h5>
                      <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                      <img src="https://vignette.wikia.nocookie.net/naruto/images/b/bb/Itachi.png/revision/latest/scale-to-width-down/300?cb=20160125182202" alt="Itachi" style="width: 100%"/>
                      
                      <a href="#" class="card-link">Card link</a>
                      <a href="#" class="card-link">Another link</a>
                    </div>
                  </div>
            </div>
`

let Rock = `
<div class="col-lg-3 col-md-6 m-auto">
                <div class="card character" id="Rock">
                    <div class="card-body">
                      <h5 class="card-title">Card title</h5>
                      <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                      <img src="https://vignette.wikia.nocookie.net/naruto/images/9/97/Rock_Lee_Part_I.png/revision/latest/scale-to-width-down/300?cb=20181229065526" alt="Rock" style="width: 100%"/>
                      
                      <a href="#" class="card-link">Card link</a>
                      <a href="#" class="card-link">Another link</a>
                    </div>
                  </div>
            </div>
`

let Sakura = `
<div class="col-lg-3 col-md-6 m-auto">
                <div class="card character" id="Sakura">
                    <div class="card-body">
                      <h5 class="card-title">Card title</h5>
                      <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                      <img src="https://vignette.wikia.nocookie.net/naruto/images/6/64/Sakura_Part_1.png/revision/latest/scale-to-width-down/300?cb=20170726101444" alt="Sakura" style="width: 100%"/>
                      <a href="#" class="card-link">Card link</a>
                      <a href="#" class="card-link">Another link</a>
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
                break;
            case "Itachi":
                $("#selection").append(Itachi)
                break;
            case "Rock":
                $("#selection").append(Rock)
                break;
            case "Sakura":
                $("#selection").append(Sakura)
                break;
        }

        $("#yourName").text($(this).attr("id"))
        selectedChar = true
        $(this).attr("style", "visibility: hidden")
    }
    else if(selectedChar === true && selectedOpp === false) {
        switch ($(this).attr("id")) {
            case "Naruto":
                $("#selectionOpp").append(Naruto)
                break;
            case "Itachi":
                $("#selectionOpp").append(Itachi)
                break;
            case "Rock":
                $("#selectionOpp").append(Rock)
                break;
            case "Sakura":
                $("#selectionOpp").append(Sakura)
                break;
        }

        $("#yourOpp").text($(this).attr("id"))
        selectedOpp = true
        $(this).attr("style", "visibility: hidden")
    }

})



