
const selectionButton = document.getElementById("selection-button");

/* TEST FUNCTION */

selectionButton.addEventListener("click",function(){
    const inputValue = document.getElementById("select-input").value;
    console.log(inputValue);
})

/* PAGE VARIABLES FOR MAKE THEM VISIBLE/INVISIBLE */

const inputPage = document.getElementById("input-page");
const selectPage = document.getElementById("selection-page");
const nextButton = document.getElementById("selection-button");

/* INPUT VARIABLES */

const hideInput = document.getElementById("hide-input");
const polymerInput = document.getElementById("polymer-input");
const crystalInput = document.getElementById("crystal-input");
const blackPearlInput = document.getElementById("blackpearl-input");
const fiberInput = document.getElementById("fiber-input");
const metalInput = document.getElementById("metal-input");
const woodInput = document.getElementById("wood-input");
const elementInput = document.getElementById("element-input");
const chitinInput = document.getElementById("chitin-input");
const silicaInput = document.getElementById("silica-input");
const cementInput = document.getElementById("cement-input");
const countInput = document.getElementById("count-input");

/* LABEL VARIABLES */

const countLabel = document.getElementById("count-label");

const formPageInputs = document.getElementById("form-page-input");

/* FUNCTION FOR MAKE INPUTS VISIBLE/INVISIBLE */

nextButton.addEventListener("click", function(){
    selectPage.style.display = "none";
    inputPage.style.display = "flex";
    formPageInputs.style.flexDirection = "column";
    const inputValue = document.getElementById("select-input").value;
    if(inputValue == "2"){
        hideInput.style.display = "flex";
        fiberInput.style.display = "flex";
        chitinInput.style.display = "flex";
    }
    else if(inputValue == "3"){
        hideInput.style.display = "flex";
        fiberInput.style.display = "flex";
        woodInput.style.display = "flex";
    }
    else if(inputValue == "4"){
        hideInput.style.display = "flex";
        fiberInput.style.display = "flex";
        metalInput.style.display = "flex";
    }
    else if(inputValue == "5"){
        hideInput.style.display = "flex";
        fiberInput.style.display = "flex";
        cementInput.style.display = "flex";
    }
    else if(inputValue == "1"){
        countLabel.style.display = "none";
        polymerInput.style.display = "flex";
        metalInput.style.display = "flex";
        crystalInput.style.display = "flex";
        blackPearlInput.style.display = "flex";
        elementInput.style.display = "flex";
    }
    else if(inputValue == "6"){
        countLabel.style.display = "none";
        hideInput.style.display = "flex";
        fiberInput.style.display = "flex";
        metalInput.style.display = "flex";
        silicaInput.style.display = "flex";
        cementInput.style.display = "flex";
    }
});

/* FUNCTION FOR CALCULATE THE RESULT */

const calculateButton = document.getElementById("calculate-button");

calculateButton.addEventListener("click",function(){
    const inputValue = document.getElementById("select-input").value;
    const result = document.getElementById("result");
    if(inputValue == "1"){
        result.innerHTML = `You need ${Math.ceil(parseInt(metalInput.value)
        /300
        *parseInt(countInput.value))} slots of metal <br> 

        ${Math.ceil(parseInt(elementInput.value)
        /100
        *parseInt(countInput.value))} slots of element <br> 

        ${Math.ceil(parseInt(polymerInput.value)
        *parseInt(countInput.value))} of polymer <br> 

        ${Math.ceil(parseInt(crystalInput.value)
        /100
        *parseInt(countInput.value))} of slots of crystal <br>

        ${Math.ceil(parseInt(blackPearlInput.value)
        /200
        *parseInt(countInput.value))} slots of black pearl`;       
    }
    else if(inputValue == "2"){
        result.innerHTML = `${Math.ceil(parseInt(hideInput.value)
        /200
        *parseInt(countInput.value))} slots of hide <br>

        ${Math.ceil(parseInt(fiberInput.value)
        /300
        *parseInt(countInput.value))} slots of fiber <br>

        ${Math.ceil(parseInt(chitinInput.value)
        /100
        *parseInt(countInput.value))} slots of chitin/keratin`;
    }
    else if(inputValue == "3"){
        result.innerHTML = `${Math.ceil(parseInt(hideInput.value)
        /200
        *parseInt(countInput.value))} slots of hide <br>

        ${Math.ceil(parseInt(fiberInput.value)
        /300
        *parseInt(countInput.value))} slots of fiber <br>

        ${Math.ceil(parseInt(woodInput.value)
        /100
        *parseInt(countInput.value))} slots of wood`;
    }
    else if(inputValue == "4"){
        result.innerHTML = `${Math.ceil(parseInt(hideInput.value)
        /200
        *parseInt(countInput.value))} slots of hide <br>

        ${Math.ceil(parseInt(fiberInput.value)
        /300
        *parseInt(countInput.value))} slots of fiber <br>

        ${Math.ceil(parseInt(metalInput.value)
        /300
        *parseInt(countInput.value))} slots of metal`;
    }
    else if(inputValue == "5"){
        result.innerHTML = `${Math.ceil(parseInt(hideInput.value)
        /200
        *parseInt(countInput.value))} slots of hide <br>

        ${Math.ceil(parseInt(fiberInput.value)
        /300
        *parseInt(countInput.value))} slots of fiber <br>

        ${Math.ceil(parseInt(cementInput.value)
        /100
        *parseInt(countInput.value))} slots of cement paste`;
    }
    else if(inputValue == "6"){
        result.innerHTML = `${Math.ceil(parseInt(hideInput.value)
        /200
        *parseInt(countInput.value))} slots of hide <br>

        ${Math.ceil(parseInt(fiberInput.value)
        /300
        *parseInt(countInput.value))} slots of fiber <br>

        ${Math.ceil(parseInt(metalInput.value)
        /300
        *parseInt(countInput.value))} slots of metal <br>

        ${Math.ceil(parseInt(cementInput.value)
        /100
        *parseInt(countInput.value))} slots of cement paste <br>

        ${Math.ceil(parseInt(cementInput.value)
        /100
        *parseInt(countInput.value))} slots of cement paste`;
    }
})