//functions

function changeActions () {
return "Im inside change Actions function."
}

function buttonLayout () {
return "Im inside Button Layout function."
}

function keyBindings () {
return "Im inside Keybindings function."
}

function onEventScripts () {
return "Im inside OnEvent Scripts function."
}

function mainMenuBar () {
return "Im inside Main Menu Bar."
}

function miscOptions () {
return "Im inside Misc Options."
}

function unlockDragging () {
return "Im inside Unlock Dragging function."
}

function showButtonIDs () {
return "Im inside Show Button IDs function."
}

function showActionIDs () {
return "Im inside Show Action IDs function."
}

function copy () {
return "Im inside Copy function."
}

function paste () {
return "Im inside Paste function."
}

function end () {
return "The End!"
}

//Loop

do {

var noBREAK = Number(prompt("Menu \n 1-Change Actions \n 2-Button Layout \n 3-Key Bindings \n 4-OnEvent Scripts \n 5-Main Menu Bar \n 6-Misc Options \n 7-Unlock Dragging \n 8-Show Button IDs \n 9-Show Action IDs \n 10-COPY \n 11-Paste \n 0-Exit"));

if (isNaN(noBREAK) || noBREAK > 11) {
    console.log("Invalid entry");
} else {
    
    const selection = [ end(),changeActions(),buttonLayout(),keyBindings(),onEventScripts(),mainMenuBar(),miscOptions(),unlockDragging(),showButtonIDs(),showActionIDs(),copy(),paste()]
    console.log(selection[noBREAK])
    
}

} while (noBREAK != 0);
