// Tutrial: Binary Clock
// Autor: Adawo
// Data: 17.11.2007 20:09

var Clock = ''; //ciag zawierajacy godzine w binarnym systemie (zapisanej od tylu)
var ClockHandle = 0;

//Zamienia Liczbe n na Liczbe binarna zapisana na odwrot i dodaje do Clock;
function IntToBin(n) {
    switch (n) {
        case 0:
            Clock += '0000';
        break;
        case 1:
            Clock += '0001';
        break;
        case 2:
            Clock += '0010';
        break;
        case 3:
            Clock += '0011';
        break;
        case 4:
            Clock += '0100';
        break;
        case 5:
            Clock += '0101';
        break;
        case 6:
            Clock += '0110';
        break;
        case 7:
            Clock += '0111';
        break;
        case 8:
            Clock += '1000';
        break;
        case 9:
            Clock += '1001';
        break;
    }
}

//Ustawia zegar na godzine podana w Clock	
function SetClock() { 
    var ClockString = Clock;
    //Po koleji dzisiatki godzin, jednostki godzin, dziesiatki minut itd...
    for (var i = 0; i < 6; i++) { 
        for (var j = 0; j < 4; j++) {
            //sprawdzamy kolejne bity
            if (ClockString[j] == '0') { 		
                //jesli 0 zmieniamy klase na...
                document.getElementById("a" + ((j * 6) + i + 1)).className = 'hidden';
            }
            else {
                //jesli 1 zmeniamy klase na...
                document.getElementById("a" + ((j * 6) + i + 1)).className = 'normal'; 
            }
        }
        
        //Usuwamy przetqworzone bity
        ClockString = ClockString.slice(4, ClockString.length); 
    }
}

function WriteTime() {
    // czyscimy zmienna 
    Clock = ''; 
    // pobieramy date	
    var Czas = new Date();	

    //Przetwarzamy kolejne czesci aktualnego czasu	
    IntToBin(Math.floor(Czas.getHours() / 10));
    IntToBin(Czas.getHours() % 10);
    IntToBin(Math.floor(Czas.getMinutes() / 10));
    IntToBin(Czas.getMinutes() % 10);
    IntToBin(Math.floor(Czas.getSeconds() / 10));
    IntToBin(Czas.getSeconds() % 10);
    //Ustawiamy zegar 
    SetClock();	
}
;

//Inicjuje zegar
function InitClock() { 
    ClockHandle = setInterval('WriteTime();', 1000);
}

//Zatrzymuje zegar 
function DestroyClock() { 
    clearInterval(ClockHandle);
}