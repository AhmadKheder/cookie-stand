'use strict'

var timeArr = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var soldeCookiesPrHour = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
function Locations(name, minCust, maxCust, avgCks, randomCustperHour, soledCookiesArr) {
    this.name = name;
    this.minCust = minCust;
    this.maxCust = maxCust;
    this.avgCks = avgCks;
    this.randomCustperHour = randomCustperHour;//arr //number of sold cookies per hour //getrandomCustperHour()

    this.soledCookiesArr = soledCookiesArr;
    this.totalSoled = 0;
    this.workingHours = 14;


}

Locations.prototype.getrandomCustperHour = function () {//wrong func name // it returns arr[sold cookies per hour]
    var arr = []
    for (var i = 0; i < this.workingHours; i++) {

        var num = Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;// int number
        // this.randomCustperHour.push(Math.round(this.avgCks * num));

        // arr[i] = Math.round(this.avgCks * num);//number of sold cookies per hour
        arr.push(num);
    }
    return arr;
}

Locations.prototype.soledCookies = function () {
    var arr1 = [];
    for (var i = 0; i < this.workingHours; i++) {

        arr1.push(Math.round(this.randomCustperHour[i] * this.avgCks));//sold at 6am * avgcks 
        // arr1.push(Math.round(this.randomCustperHour[i]));

        soldeCookiesPrHour[i] += Math.round(this.randomCustperHour[i] * this.avgCks);//daily total for row 
    }
    // console.log(soldeCookiesPrHour[0]);//NaN
    return arr1;
}


var temp11 = 0;
Locations.prototype.render = function () {

    //creat row for passed obj
    var tableRow2 = document.createElement('tr');
    tableTag.appendChild(tableRow2);

    // append td with obj name
    var tableData = document.createElement('td');
    tableRow2.appendChild(tableData);
    tableData.textContent = this.name;

    var DailyLocationTotal = 0;//total for row

    for (var dataPointer = 0; dataPointer <= this.soledCookiesArr.length + 1; dataPointer++) {
        // append td with sold cookies in an hour
        var tableData2 = document.createElement('td');
        // console.log( this.soledCookiesArr)
        if (dataPointer < this.soledCookiesArr.length) {

            tableRow2.appendChild(tableData2);
            tableData2.textContent = this.soledCookiesArr[dataPointer];//<tr> <td>this.name </td> <td>soledCookiesArr[i] </td></tr>
            //total for row
            DailyLocationTotal += this.soledCookiesArr[dataPointer];


        }
        //append last td with total
        else if (dataPointer === this.soledCookiesArr.length) {


            tableRow2.appendChild(tableData2);
            tableData2.textContent = DailyLocationTotal;
            // console.log(DailyLocationTotal);


        }
    }
    temp11 += DailyLocationTotal;

    console.log(temp11);
    // }

    // tableData2.textContent = temp11; 



    ///////////////********//////////// */


}

function totalForeachHourArr() {
    var x = [];

    for (let index = 0; index <= timeArr.length; index++) {
        var total = 0;
        for (let i2 = 0; i2 < objectsArr.length; i2++) {
            var num = objectsArr[i2].soledCookiesArr[index];
            total += num;
            // console.log(total);
        }
        x.push(total);
        // x[index]=total;

    }
    //     var num1 = objectsArr[objectsArr.length].soledCookiesArr[13];
    // console.log('sdassa'+num1);


    return x;
}









function header() {

    //////////////////////////


    var tableRow = document.createElement('tr');
    var tableHead = document.createElement('th');

    container.appendChild(tableTag);//<table></table>

    tableTag.appendChild(tableRow);//<table><tr></tr></table>
    tableRow.appendChild(tableHead);
    //<table><tr><th>Empty</th><th>6am</th> <th>	Daily Location Total</th> </tr></table>
    tableHead.textContent = '';//first th of first tr
    for (var i = 0; i <= timeArr.length; i++) {// 0 to 14


        if (i <= timeArr.length) {// 0 to 14, overwrite empty th with (3am/timeArr[i] ), saves memory

            tableRow.appendChild(tableHead);
            tableHead = document.createElement('th');
            tableHead.textContent = timeArr[i];


        }

    }
    //index 15 or the header row
    tableRow.appendChild(tableHead);
    tableHead.textContent = 'Daily Location Total';

}


function Footer() {
    var tableFooter = document.createElement('tr');
    tableFooter.setAttribute("id", "FootRow");
    tableTag.appendChild(tableFooter)
    var tableData = document.createElement('td');
    tableFooter.appendChild(tableData);
    tableData.textContent = 'Total';//newLoc name

    var totalColumn = totalForeachHourArr();

    for (var fPointer = 0; fPointer < totalColumn.length; fPointer++) {

        var fTableData = document.createElement('td');
        tableFooter.appendChild(fTableData);
        fTableData.textContent = totalColumn[fPointer];//if totalColumn 


    }
    fTableData.textContent = temp11;

   

}


var objectsArr = [];

var Seattle = new Locations('Seattle', 23, 65, 6.3);
objectsArr.push(Seattle);
var Tokyo = new Locations('Tokyo', 3, 24, 1.2);
objectsArr.push(Tokyo);
var Dubai = new Locations('Dubai', 11, 38, 3.7);
objectsArr.push(Dubai);
var Paris = new Locations('Paris', 20, 38, 2.3);
objectsArr.push(Paris);
var Lima = new Locations('Lima', 2, 16, 4.6);
objectsArr.push(Lima);
// console.log(Dubai)


var container = document.getElementById('table');//div
var tableTag = document.createElement('table');
function loopThroughObjectArr() {
    if (objectsArr.length > 5) {

        objectsArr[objectsArr.length - 1].randomCustperHour = objectsArr[objectsArr.length - 1].getrandomCustperHour();// randomCustperHour[] contains randomcustNum per hout
        objectsArr[objectsArr.length - 1].soledCookiesArr = objectsArr[objectsArr.length - 1].soledCookies();// soledCookiesArr[] contains sold cookies per hour
        objectsArr[objectsArr.length - 1].render()
    }
    else {
        for (var i = 0; i < objectsArr.length; i++) {
            objectsArr[i].randomCustperHour = objectsArr[i].getrandomCustperHour();// randomCustperHour[] contains randomcustNum per hout
            objectsArr[i].soledCookiesArr = objectsArr[i].soledCookies();// soledCookiesArr[] contains sold cookies per hour
            objectsArr[i].render()

        }
    }

    Footer();
}
header();
loopThroughObjectArr();


// loopThroughObjectArr();

// Footer();


//////////////LAB09


// function renderNewLoc() {



var locFrom = document.getElementById('CookiesLocations');

locFrom.addEventListener('submit', function (e) {

    e.preventDefault();
    console.log(e);
    var LocName = e.target.LocName.value;
    var minCustValue = e.target.minCust.value;
    var maxCustValue = e.target.maxCust.value;
    var avgCksValue = e.target.avgCks.value;



    var newLoc = new Locations(LocName, minCustValue, maxCustValue, avgCksValue);
    objectsArr.push(newLoc);
    var tempArr = []
    locFrom.reset();
    document.getElementById("FootRow").remove();

    loopThroughObjectArr();





})


// Footer();


