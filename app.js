function newUser(){
    document.getElementById('loginDiv').classList.add('hiddenDiv');
    document.getElementById('registerDiv').classList.remove('hiddenDiv');
}

function showLogin(currentWin){
    document.getElementById(currentWin).classList.add('hiddenDiv');
    document.getElementById('loginDiv').classList.remove('hiddenDiv');
}

function showTempWin(currentWin){
    document.getElementById(currentWin).classList.add('hiddenDiv');
    document.getElementById('tempDiv').classList.remove('hiddenDiv');
}

function registerUser(){
    console.log('New user registered.')
    showTempWin('registerDiv');
}

function registerTemp(){
    let userVal = document.getElementById('idValue').value;
    let dateVal = document.getElementById('dateValue').value;
    let tempVal = document.getElementById('tempValue').value;
    console.log('Temperature registered');
    showLogin('tempDiv');
}

function deleteInputs(){
    console.log('Inputs deleted.')
}