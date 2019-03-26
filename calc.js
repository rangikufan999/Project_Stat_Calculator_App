//===============================//
/*
	[Application Name: Stat Calculator]
	[Application Description: Sandbox Calculator for Random Scaling in RPG Game]
	[Application Technologies: HTML, CSS, JavaScript]
	[Application Version: 1.0.0]
*/
//===============================//


//========[GLOBALS]========//

var btnDisabled = true;
var adjustDisabled = true;
var nonNumberFound = false;
var pointCounter = 0;
var currDivisor = 5;
var baseStats = {
	"hp": 25,
	"mp": 15,
	"atk": 5,
	"def": 3,
	"mag": 5,	
	"res": 2,
	"div": 5
}

//========[PLAYER]========//

/* playerObj represents the object and numbers within the Stat Calculator */
var playerObj = {

	"level": 1,
	"health": 200,
	"mana": 100,
	"attack": 50,
	"defense": 20,
	"magic": 35,
	"resistance": 5,

	"hpParam": 1,
	"mpParam": 1,
	"atkParam": 1,
	"defParam": 1,
	"magParam": 1,
	"resParam": 1,

	"alloHp": 0,
	"alloMp": 0,
	"alloAtk": 0,
	"alloDef": 0,
	"alloMag": 0,
	"alloRes": 0,

	"hasPoints": false,
	"availPoints": 0
}


//=======[FUNCTIONS]========//

//==========================//
/* function levelUp
	-Modifies playerObj stat properties and updates screen
	-Returns: nothing
*/
//==========================//
function levelUp(){
	var obj = playerObj;
	var hpScale = obj.hpParam / baseStats.div;
	var mpScale = obj.mpParam / baseStats.div;
	var atkScale = obj.atkParam / baseStats.div;
	var defScale = obj.defParam / baseStats.div;
	var magScale = obj.magParam / baseStats.div;
	var resScale = obj.resParam / baseStats.div;

	var scaleCheck = [hpScale, mpScale, atkScale, defScale, magScale, resScale];
	console.table(scaleCheck);

	obj.health = obj.health + Math.floor(baseStats["hp"] * scaleCheck[0]);
	obj.mana = obj.mana + Math.floor(baseStats["mp"] * scaleCheck[1]);
	obj.attack = obj.attack + Math.floor(baseStats["atk"] * scaleCheck[2]);
	obj.defense = obj.defense + Math.floor(baseStats["def"] * scaleCheck[3]);
	obj.magic = obj.magic + Math.floor(baseStats["mag"] * scaleCheck[4]);
	obj.resistance = obj.resistance + Math.floor(baseStats["res"] * scaleCheck[5]);
	obj.level = obj.level + 1;

	updateStats();
	updatePoints();
}

//==========================//
/* 
	function givePoints
	-increases the allocation points of the user.
	-returns: nothing
*/
//==========================//

function givePoints(){
	playerObj.availPoints = playerObj.availPoints + 20;
	playerObj.hasPoints = true;

	updateStats();
	updatePoints();
}

//==========================//
/*
	function updateData
	-Updates information on the screen
	-Returns: nothing

*/
//==========================//

function updateData(){
	var div = $("#dataDiv");

	var dHp = $("#dataHp");
	var dMp = $("#dataMp");
	var dAtk = $("#dataAtk");
	var dDef = $("#dataDef");
	var dMag = $("#dataMag");
	var dRes = $("#dataRes");

	var fHp = $("#formHp");
	var fMp = $("#formMp");
	var fAtk = $("#formAtk");
	var fDef = $("#formDef");
	var fMag = $("#formMag");
	var fRes = $("#formRes");

	dHp.html("HP: + " + Math.floor(baseStats["hp"] * (playerObj.hpParam / baseStats["div"])));
	dMp.html("MP: + " + Math.floor(baseStats["mp"] * (playerObj.mpParam / baseStats["div"])));
	dAtk.html("ATK: + " + Math.floor(baseStats["atk"] * (playerObj.atkParam / baseStats["div"])));
	dDef.html("DEF: + " + Math.floor(baseStats["def"] * (playerObj.defParam / baseStats["div"])));
	dMag.html("MAG: + " + Math.floor(baseStats["mag"] * (playerObj.magParam / baseStats["div"])));
	dRes.html("RES: + " + Math.floor(baseStats["res"] * (playerObj.resParam / baseStats["div"])));

	fHp.html("Formula: " + baseStats["hp"] + " x " + " ( " + playerObj.hpParam +  " / " + baseStats["div"] + " ) || " + (playerObj.hpParam / baseStats["div"]) + "%");
	fMp.html("Formula: " + baseStats["mp"] + " x " + " ( " + playerObj.mpParam +  " / " + baseStats["div"] + " ) || " + (playerObj.mpParam / baseStats["div"]) + "%");
	fAtk.html("Formula: " + baseStats["atk"] + " x " + " ( " + playerObj.atkParam +  " / " + baseStats["div"] + " ) || " + (playerObj.atkParam / baseStats["div"]) + "%");
	fDef.html("Formula: " + baseStats["def"] + " x " + " ( " + playerObj.defParam +  " / " + baseStats["div"] + " ) || " + (playerObj.defParam / baseStats["div"]) + "%");
	fMag.html("Formula: " + baseStats["mag"] + " x " + " ( " + playerObj.magParam +  " / " + baseStats["div"] + " ) || " + (playerObj.magParam / baseStats["div"]) + "%");
	fRes.html("Formula: " + baseStats["res"] + " x " + " ( " + playerObj.resParam +  " / " + baseStats["div"] + " ) || " + (playerObj.resParam / baseStats["div"]) + "%");

	div.html("The divisor is: " + baseStats["div"]);
}

//==========================//
/*
	function updateStats
	-Updates player stats on screen
	-Returns: nothing

*/
//==========================//

function updateStats(){
	var obj = playerObj;
	//Gather DOM span objects with 
	var hp = $("#hp");
	var mp = $("#mp");
	var atk = $("#atk");
	var def = $("#def");
	var mag = $("#mag");
	var res = $("#res");

	var hpPar = $("#healthParam");
	var mpPar = $("#manaParam");
	var atkPar = $("#attackParam");
	var defPar = $("#defenseParam");
	var magPar = $("#magicParam");
	var resPar = $("#resistanceParam");

	var lvl = $("#lvl");

	hp.html("HP: " + obj.health); 
	mp.html("MP: " + obj.mana);
	atk.html("ATK: " + obj.attack);
	def.html("DEF: " + obj.defense);
	mag.html("MAG: " + obj.magic);
	res.html("RES: " + obj.resistance);

	hpPar.html(obj.hpParam);
	mpPar.html(obj.mpParam);
	atkPar.html(obj.atkParam); 
	defPar.html(obj.defParam); 
	magPar.html(obj.magParam); 
	resPar.html(obj.resParam);

	lvl.html("LVL: " + obj.level);
}

//==========================//
/*
	function updatePoints
	-Updates allocation points
	-Returns: nothing

*/
//==========================//

function updatePoints(){
	var pts = playerObj.availPoints - pointCounter;

	if(pts < 0){
		pts = 0;
	}

	$("#availPoints").html("Available Points: " + pts);

}

//==========================//
/*
	function allocatePoints
	-Initializes the state of point allocation
	-Returns: nothing

*/
//==========================//

function allocatePoints(){

	if(playerObj.hasPoints == true){
		if(btnDisabled == true){
			$(".addBtn").prop("disabled", false);
			initializeAlloElems();
			btnDisabled = false;
		}else{
			$(".addBtn").prop("disabled", true);
			$(".subBtn").prop("disabled", true);
			pointCounter = 0;
			resetAlloElems();
			btnDisabled = true;
		}
	}else{
		alert("You do not have any points to allocate yet!");
	}
}

//==========================//
/*
	function changeFormula
	-Changes the formula style
	-Returns: nothing

*/
//==========================//

function changeFormula(){
	if(adjustDisabled == true){
		$("#adjustBtn").prop("disabled", false);
		adjustDisabled = false;
	}else if(adjustDisabled == false){
		$("#adjustBtn").prop("disabled", true);
		adjustDisabled = true;
	}
}

//==========================//
/*
	function adjustFormula
	-Actually modifies the data values of the current formula
	-Returns: nothing

*/
//==========================//

function adjustFormula(){
	var hp = document.getElementById("parAdjHp").value; 
	var mp = document.getElementById("parAdjMp").value;
	var atk = document.getElementById("parAdjAtk").value; 
	var def = document.getElementById("parAdjDef").value; 
	var mag = document.getElementById("parAdjMag").value; 
	var res = document.getElementById("parAdjRes").value; 
	var div = document.getElementById("parAdjDiv").value; 

	var arr = [hp, mp, atk, def, mag, res, div];

	for(var i = 0;i<arr.length;i++){
		if(/\D/.test(parseInt(arr[i]))){
			console.log("The index was: " + i);
			console.log(arr[i]);
			nonNumberFound = true;
			break;
		}
	}

	if(nonNumberFound == true){
		alert("Please check your inputs. Make certain only numbers are in the text boxes!");
	}else{
		baseStats["hp"] = parseInt(arr[0]);
		baseStats["mp"] = parseInt(arr[1]);
		baseStats["atk"] = parseInt(arr[2]);
		baseStats["def"] = parseInt(arr[3]);
		baseStats["mag"] = parseInt(arr[4]);
		baseStats["res"] = parseInt(arr[5]);
		baseStats["div"] = parseInt(arr[6]);

		updateData();
		alert("You're base values and division values have been modified!");
	}

	nonNumberFound = false;
	$("#adjustBtn").prop("disabled", true);
	adjustDisabled = true;
}

//==========================//
/*
	function resetAlloElems
	-Resets the innerHtml of the id'd elements
	-Returns: nothing

*/
//==========================//

function resetAlloElems(){
	$("#alloHp").html(" ");
	$("#alloMp").html(" ");
	$("#alloAtk").html(" ");
	$("#alloDef").html(" ");
	$("#alloMag").html(" ");
	$("#alloRes").html(" ");
}

//==========================//
/*
	function initializeAlloElems
	-Initializes the innerHtml of the id'd elements
	-Returns: nothing

*/
//==========================//

function initializeAlloElems(){
	$("#alloHp").html("+0");
	$("#alloMp").html("+0");
	$("#alloAtk").html("+0");
	$("#alloDef").html("+0");
	$("#alloMag").html("+0");
	$("#alloRes").html("+0");
}

//==========================//
/*
	function inputCheck
*/
//==========================//

// function inputCheck(val){
// 	var data = val.parseInt();
// }

//==========================//
/*
	function subStat
	-When Allocating, subtracts stat from id'd stat elements
	-Returns: nothing
	
*/
//==========================//

function subStat(stat){
	var obj = playerObj;

	if(pointCounter > 0){
		switch(stat){
			case "health":
				if(obj.alloHp > 0){ 
					pointCounter -= 1;
					if(pointCounter <= 0){
						$(".subBtn").prop("disabled", true);
					}
					obj.alloHp = obj.alloHp - 1;
					$("#alloHp").html("+" + obj.alloHp);
				}else{
					alert("You do not have any points set aside for this stat yet.");
				}
			break;

			case "mana":
				if(obj.alloMp > 0){ 
					pointCounter -= 1;
					if(pointCounter <= 0){
						$(".subBtn").prop("disabled", true);
					}
					obj.alloMp = obj.alloMp - 1;
					$("#alloMp").html("+" + obj.alloMp);
				}else{
					alert("You do not have any points set aside for this stat yet.");
				}			
			break;

			case "attack":
				if(obj.alloAtk > 0){ 
					pointCounter -= 1;
					if(pointCounter <= 0){
						$(".subBtn").prop("disabled", true);
					}
					obj.alloAtk = obj.alloAtk - 1;
					$("#alloAtk").html("+" + obj.alloAtk);
				}else{
					alert("You do not have any points set aside for this stat yet.");
				}
			break;

			case "defense":
				if(obj.alloDef > 0){
					pointCounter -= 1;
					if(pointCounter <= 0){
						$(".subBtn").prop("disabled", true);
					}
					obj.alloDef = obj.alloDef - 1;
					$("#alloDef").html("+" + obj.alloDef);
				}else{
					alert("You do not have any points set aside for this stat yet.");
				}
			break;

			case "magic":
				if(obj.alloMag > 0){
					pointCounter -= 1;
					if(pointCounter <= 0){
						$(".subBtn").prop("disabled", true);
					}
					obj.alloMag = obj.alloMag - 1;
					$("#alloMag").html("+" + obj.alloMag);
				}else{
					alert("You do not have any points set aside for this stat yet.");
				}
			break;

			case "resistance":
				if(obj.alloRes > 0){ 
					pointCounter -= 1;
					if(pointCounter <= 0){
						$(".subBtn").prop("disabled", true);
					}
					obj.alloRes = obj.alloRes - 1;
					$("#alloRes").html("+" + obj.alloRes);
				}else{
					alert("You do not have any points set aside for this stat yet.");
				}
			break;
		}

		updatePoints();
	}
}

//==========================//
/*
	function addStat
	-When Allocating Stats, adds to the id'd stat elements.
	-Returns: nothing

*/
//==========================//

function addStat(stat){
	var obj = playerObj;

	if(pointCounter < playerObj.availPoints){
		switch(stat){
			case "health": 
				pointCounter += 1;
				if(pointCounter >= 1){
					$(".subBtn").prop("disabled", false);
				}
				obj.alloHp = obj.alloHp + 1;
				$("#alloHp").html("+" + obj.alloHp);
			break;

			case "mana": 
				pointCounter += 1;
				if(pointCounter >= 1){
					$(".subBtn").prop("disabled", false);
				}
				obj.alloMp = obj.alloMp + 1;
				$("#alloMp").html("+" + obj.alloMp);			
			break;

			case "attack": 
				pointCounter += 1;
				if(pointCounter >= 1){
					$(".subBtn").prop("disabled", false);
				}
				obj.alloAtk = obj.alloAtk + 1;
				$("#alloAtk").html("+" + obj.alloAtk);
			break;

			case "defense":
				pointCounter += 1;
				if(pointCounter >= 1){
					$(".subBtn").prop("disabled", false);
				}
				obj.alloDef = obj.alloDef + 1;
				$("#alloDef").html("+" + obj.alloDef);
			break;

			case "magic":
				pointCounter += 1;
				if(pointCounter >= 1){
					$(".subBtn").prop("disabled", false);
				}
				obj.alloMag = obj.alloMag + 1;
				$("#alloMag").html("+" + obj.alloMag);
			break;

			case "resistance": 
				pointCounter += 1;
				if(pointCounter >= 1){
					$(".subBtn").prop("disabled", false);
				}
				obj.alloRes = obj.alloRes + 1;
				$("#alloRes").html("+" + obj.alloRes);
			break;
		}

		updatePoints();
	}
}

//==========================//
/*
	function confirmAllocation
	-Applies proposed stat allocations to playerObj stats
	-Returns: nothing

*/
//==========================//

function confirmAllocation(){
	var obj = playerObj;

	obj.hpParam = obj.hpParam + obj.alloHp;
	obj.alloHp = 0;

	obj.mpParam = obj.mpParam + obj.alloMp;
	obj.alloMp = 0;

	obj.atkParam = obj.atkParam + obj.alloAtk;
	obj.alloAtk = 0;

	obj.defParam = obj.defParam + obj.alloDef;
	obj.alloDef = 0;

	obj.magParam = obj.magParam + obj.alloMag;
	obj.alloMag = 0;

	obj.resParam = obj.resParam + obj.alloRes;
	obj.alloRes = 0;

	$(".addBtn").prop("disabled", true);
	$(".subBtn").prop("disabled", true);
	obj.availPoints = obj.availPoints - pointCounter;
	pointCounter = obj.availPoints;
	btnDisabled = true;
	resetAlloElems();
	updateStats();
	updatePoints();
	updateData();
}
