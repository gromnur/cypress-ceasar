function cesarCrypt(text, decal){
    let constCrypt = "";
    [...text].forEach(char => {
        const charCode = char.charCodeAt(0);
        let cryptCharCode = charCode;
        switch(true){
            case (charCode>64 && charCode<91): 
            if(charCode + decal > 90){   
                cryptCharCode = 97 + ((charCode + decal) - 123);
            } else {
                cryptCharCode = charCode + decal;
            }
            break;
            case (charCode>96 && charCode<122):
                if(charCode + decal > 122){
                    cryptCharCode = 65 + ((charCode + decal) - 91);
                } else {
                    cryptCharCode = charCode + decal;
                }
                break;
        }
        constCrypt += String.fromCharCode(cryptCharCode);
    });
    return constCrypt;
}

function cesarDecrypt(text, decal){
    let constCrypt = "";
    [...text].forEach(char => {
        const charCode = char.charCodeAt(0);
        let cryptCharCode = charCode;
        switch(true){
            case (charCode>64 && charCode<91): 
            if(charCode - decal < 65){
                cryptCharCode = 90 - decal - (charCode - 64);
            } else {
                cryptCharCode = charCode - decal;
            }
            break;
            case (charCode>96 && charCode<122):
                if(charCode - decal < 96){
                    cryptCharCode = 122 - (decal - (charCode - 96));
                } else {
                    console.log("no depass");
                    cryptCharCode = charCode - decal;
                }
                break;
        }
        constCrypt += String.fromCharCode(cryptCharCode);
    });
    return constCrypt;
}

// console.log(cesarCrypt("A", 1));
// console.log(cesarDecrypt(cesarCrypt("A", 1), 1));
// console.log(cesarCrypt("Aunim", 21));
// console.log(cesarDecrypt(cesarCrypt("Aunim", 21), 21));

function clickCypherButton(){
    const key = parseInt(document.getElementById("key").value);
    const textToCrypt = document.getElementById("entry").value;
    const error = document.getElementById("error-key");
    error.style.visibility = "hidden";
    error.style.height = "0px"; 
    if(key && key>0 && key<27){
        document.getElementById("result-text").textContent = cesarCrypt(textToCrypt, key);
    } else {
        error.style.visibility = "visible";
        error.style.height = "30px";
    }
}