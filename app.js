//-------------- FUNCTIONS CHANGING BETWEEN WINDOWS ---------------//

//Shows the window for new user registry
function newUser(){
    document.getElementById('loginDiv').classList.add('hiddenDiv');
    document.getElementById('registerDiv').classList.remove('hiddenDiv');
}

//Shows the login window
function showLogin(currentWin){
    document.getElementById(currentWin).classList.add('hiddenDiv');
    document.getElementById('loginDiv').classList.remove('hiddenDiv');
}

//Shows the window for temperature registry
function showTempWin(currentWin){
    document.getElementById(currentWin).classList.add('hiddenDiv');
    document.getElementById('tempDiv').classList.remove('hiddenDiv');
}

//Shows the window for admin login
function showAdminWIn1(currentWin){
    document.getElementById(currentWin).classList.add('hiddenDiv');
    document.getElementById('adminWin1').classList.remove('hiddenDiv');
}

//Shows the window for admin features
function adminApp(){
    document.getElementById('adminWin1').classList.add('hiddenDiv');
    document.getElementById('adminWin2').classList.remove('hiddenDiv');
}

//Gets out from the admin feature window
function logoutAdmin(){
    document.getElementById('adminWin2').classList.add('hiddenDiv');
    document.getElementById('loginDiv').classList.remove('hiddenDiv');
}

//----------- FUNCTIONS CREATING USERS OR ADDING TEMPERATURE VALUES ------------//

//Registers a new user for the team specified
function registerUser(){
    console.log('New user registered.')
    showTempWin('registerDiv');
}

//Registers a temperature for a said user
function registerTemp(){
    let userVal = document.getElementById('idValue').value;
    let dateVal = document.getElementById('dateValue').value;
    let tempVal = document.getElementById('tempValue').value;
    console.log('Temperature registered');
    showLogin('tempDiv');
}

//Resets the inputs
function deleteInputs(){
    document.getElementById('idValue').value='';
    document.getElementById('dateValue').value='';
    document.getElementById('tempValue').value='';
    console.log('Inputs deleted.')
}

//-------------- FUNCTIONS FOR ADMIN FEATURES ---------------//