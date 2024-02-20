//------------------------------Initial event handler on page loading----------------------------------------------
window.onload = init;


function init(){
    
    //read current page and log the name to the console for confirmation
    var path = window.location.pathname;
    var page = path.split("/").pop();
    console.log(page);
    
    
    //----had to create a logic statement to run different programs based on the page currently in use
    //----kept breaking otherwise since all the js code is in one file
    if (page == "Plans.html") {
        var thisDay = new Date();
    
        startCal(thisDay);
    } else if (page == "Art.html") {
        var artArray = ["../../assets/images/cosplay1.JPG", "../../assets/images/cosplay2.JPG", "../../assets/images/cosplay3.PNG", "../../assets/images/cosplay4.JPG", "../../assets/images/cosplay5.JPG"];
        var artDesc = "Zagreus Cosplay from Hades Video Game <br> Created 2022 <br> Eva Foam, Acrylic Paint, Cardboard, Sewn Fabric";                
        var collabArray = ["../../assets/images/collab1.JPG", "../../assets/images/collab2.JPG", "../../assets/images/collab3.JPG", "../../assets/images/collab4.JPG", "../../assets/images/collab5.JPG", "../../assets/images/collab6.JPG", "../../assets/images/collab7.JPG", "../../assets/images/collab8.JPG", "../../assets/images/collab9.JPG", "../../assets/images/collab10.JPG", "../../assets/images/collab11.JPG", "../../assets/images/collab12.JPG"];
        var collabDesc1  = "Stranger Things themed Halloween <br> Created 2022 <br> Tempura Paint, Cardboard, Paper";
        var collabDesc2 = "Pokemon themed Halloween <br> Created 2023 <br> Tempura Paint, Cardboard, Paper";
        var collabDesc = [collabDesc1, collabDesc1, collabDesc1, collabDesc1, collabDesc1, collabDesc1, collabDesc1, collabDesc1, collabDesc2, collabDesc2, collabDesc2, collabDesc2];
        var commissArray = ["../../assets/images/commiss1.JPG", "../../assets/images/commiss2.JPG", "../../assets/images/commiss3.JPEG", "../../assets/images/commiss4.JPEG"];
        var commissDesc = "Bleach Painted Shirts <br> Created 2022 <br> Bleach, Black T-Shirts";
        buildArtGallery(artArray, artDesc, collabArray, collabDesc, commissArray, commissDesc);
    }

    



}

// ---------------------------Creating the calendar for the plans page------------------------------------
function startCal(calDate) {
    console.log("running the code for Plans.html");
    var calHTML = "<table id='calendar_table'>";
    calHTML += calCap(calDate);
    calHTML += calTopRow();
    calHTML += displayCalDays(calDate);
    calHTML += "</table>";
    document.getElementById("calendar").innerHTML = calHTML;
}

function calCap(calDate) {
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var thisMon = calDate.getMonth();
    var thisYr = calDate.getFullYear();
    var calDHTML = "<h1>" + months[thisMon] + " Plans</h1>";

    //setting logic for the calendar description at bottom saying the months plans
    if((thisMon === 2) && (thisYr === 2024) ){
        console.log("feb 2024");
        calDHTML += "<p>2/1-2/29: Working on Website. <br> 2/20-2/29: Working on graphics for Website. <br> 2/20-2/29: Working on AWS Certification.</p>";
        document.getElementById("calDescription").innerHTML = calDHTML;
    } else if((thisMon === 3) && (thisYr ===2024)) {
        console.log("march 2024");
        calDHTML += "<p>3/1-3/31: Working on Cosplay Projects. <br> 3/1-3/31: Working on AWS Certification.</p>";
        document.getElementById("calDescription").innerHTML = calDHTML;
    }
    return "<caption>" + months[thisMon] + " " + thisYr + "</caption>";
}

function calTopRow() {
    var days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
    var rowHTML = "<tr>";
    for(var i =0; i<days.length; i++) {
        rowHTML += "<th class='calDayNames'>" + days[i] + "</th>";
    }
    rowHTML += "</tr>";
    return rowHTML;
}

function calDays(calDate) {
    var numDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    var thisYr = calDate.getFullYear();
    var thisMon = calDate.getMonth();

    if(thisYr % 4 == 0){
        if((thisYr % 100 != 0) || (thisYr % 400 === 0)) {
            numDays[1] = 29;
        }
    }
    return numDays[thisMon];
}

function displayCalDays(calDate) {
    var day  = new Date(calDate.getFullYear(), calDate.getMonth(), 1);
    console.log(day);
    var weekDay = day.getDay();
    var dayHTML = "<tr>";
    for(var i=0; i<weekDay; i++) {
        dayHTML += "<td></td>";
    }
    var totDays = calDays(calDate);
    var selectDay = calDate.getDate();
    for(var i=1; i<=totDays; i++){
        day.setDate(i);
        weekDay = day.getDay();
        if(weekDay === 0) dayHTML += "<tr>";
        if (i === selectDay) {
            dayHTML += "<td class='calDays' id='calToday'>" + i + "</td>";
        }
        else {
            dayHTML += "<td class='calDays'>" + i + "</td>";
        }
        if (weekDay === 6) dayHTML += "</tr>";
    }

    return dayHTML;
}
//----------------------------------------------------------------------------------------
//-----------------------------Creating the image gallery---------------------------------
function buildArtGallery(artA, artD, collabA, collabD, commissA, commissD) {
    console.log("Running the code for Art.html");
    var artHTML = "";
    for(var i = 0; i < artA.length; i++) {
        console.log(artA[i]);
        artHTML += "<div class='galleryItem'>"
        artHTML += "<a target='_blank' href='" + artA[i] + "'>";
        artHTML += "<img src='" + artA[i] + "' alt='Image Gallery'></a><div><p>" + artD + "</p></div></div>";
        document.getElementById("artGallery").innerHTML = artHTML;
    }
    artHTML = "";
    for(var i = 0; i < collabA.length; i++) {
        artHTML += "<div class='galleryItem'>"
        artHTML += "<a target='_blank' href='" + collabA[i] + "'>";
        artHTML += "<img src='" + collabA[i] + "' alt='Image Gallery'></a><div><p>" + collabD[i] + "</p></div></div>";
        document.getElementById("collabGallery").innerHTML = artHTML;
    }
    artHTML = "";
    for(var i = 0; i < commissA.length; i++) {
        artHTML += "<div class='galleryItem'>"
        artHTML += "<a target='_blank' href='" + commissA[i] + "'>";
        artHTML += "<img src='" + commissA[i] + "' alt='Image Gallery'></a><div><p>" + commissD + "</p></div></div>";
        document.getElementById("commissGallery").innerHTML = artHTML;
    }
}
//--------------------------------------------------------------------------------------------