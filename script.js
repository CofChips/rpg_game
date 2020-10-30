let selectedChar = false;

let Naruto = `
<div class="col-lg-3 col-md-6">
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

$(document).on("click", ".character", function () {
    console.log($(this).attr("id"))
    if(selectedChar === false){
        $("#selection").append(Naruto)
        selectedChar = true
        $(this).attr("style","visibility: hidden")
    }

})



