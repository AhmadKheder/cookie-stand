'use strict'

var timeArr = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var soldeCookiesPrHour = [0,0,0,0,0,0,0,0,0,0,0,0,0,0];
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
Locations.prototype.getrandomCustperHour = function () {
    var arr = []
    for (var i = 0; i < this.workingHours; i++) {

        var num = Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;// int number
        // this.randomCustperHour.push(Math.round(this.avgCks * num));
        arr[i] = Math.round(this.avgCks * num);//number of sold cookies per hour

    }


    return arr;

}

Locations.prototype.soledCookies = function () {
    var arr1 = [];
    for (var i = 0; i < this.workingHours; i++) {

        arr1.push(Math.round(this.randomCustperHour[i] * this.avgCks));
         soldeCookiesPrHour[i] += Math.round(this.randomCustperHour[i] * this.avgCks);
        }
        // console.log(soldeCookiesPrHour[0]);//NaN
    return arr1;
}
Locations.prototype.render = function () {


    var tableRow2 = document.createElement('tr');
    tableTag.appendChild(tableRow2);

    var tableData = document.createElement('td');

    tableRow2.appendChild(tableData);//<tr><td> </td> </tr>
    // tableData.textContent = objectsArr[objectsArrPointer].name;
    tableData.textContent = this.name;//<tr> <td>this.name </td></tr>
    var DailyLocationTotal = 0;

    for (var dataPointer = 0; dataPointer <= this.soledCookiesArr.length; dataPointer++) {

        var tableData2 = document.createElement('td');
        if (dataPointer < this.soledCookiesArr.length) {

            // console.log('test '+this.soledCookiesArr[dataPointer]);
            tableRow2.appendChild(tableData2);//<tr> <td>this.name </td> <td> </td></tr>
            tableData2.textContent = this.soledCookiesArr[dataPointer];//<tr> <td>this.name </td> <td>soledCookiesArr[i] </td></tr>
            DailyLocationTotal += this.soledCookiesArr[dataPointer];

            ///TEST SUM
            soldeCookiesPrHour[i] = DailyLocationTotal
        }
        else if (dataPointer === this.soledCookiesArr.length) {
            
            // var tableData2 = document.createElement('td');
            tableRow2.appendChild(tableData2);
            tableData2.textContent = DailyLocationTotal;
        }
    }
    console.log(soldeCookiesPrHour);
    
    // }
    
}
function totalForeachHourArr(){

    for (let index = 0; index < timeArr.length; index++) {
        var total = 0;
        var x = [];
        for (let i = 0; i < objectsArr.length; i++) {
            var num =  objectsArr[i].soledCookiesArr[index];
            total += num;

        }
x.push(total);
        
    }
    return x;
}





















function header(){

//////////////////////////


var tableRow = document.createElement('tr');
var tableHead = document.createElement('th');

container.appendChild(tableTag);//<table></table>

tableTag.appendChild(tableRow);//<table><tr></tr></table>
tableRow.appendChild(tableHead);
//<table><tr><th>Empty</th><th>6am</th> <th>	Daily Location Total</th> </tr></table>
tableHead.textContent = '';
for (var i = 0; i <= timeArr.length; i++) {
    var tableHead1 = document.createElement('th');

    if (i <= timeArr.length) {
        tableRow.appendChild(tableHead);//<table><tr><th>Empty</th><th>6am</th> <th>	Daily Location Total</th> </tr></table>
        tableHead = document.createElement('th');
        tableHead.textContent = timeArr[i];


    }


}
var tableHead = document.createElement('th');
tableRow.appendChild(tableHead);
tableHead.textContent = 'Daily Location Total';

}


function Footer(){
    var tableFooter = document.createElement('tr');//<tr></tr>
    tableTag.appendChild(tableFooter)//<table><tr></tr></table>
    var tableData = document.createElement('td');
    tableFooter.appendChild(tableData);//<table><tr><td></td></tr></table>
    tableData.textContent = 'Total'; 
    for(var fPointer = 0; fPointer < soldeCookiesPrHour.length;fPointer++){
        
        var fTableData = document.createElement('td');
        tableFooter.appendChild(fTableData);
        fTableData.textContent = soldeCookiesPrHour[fPointer];


    }



    
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
header();
for (var i = 0; i < objectsArr.length; i++) {
    objectsArr[i].randomCustperHour = objectsArr[i].getrandomCustperHour();// number of sold cookies per hour
    objectsArr[i].soledCookiesArr = objectsArr[i].soledCookies();
    objectsArr[i].render()
    
}

Footer();

















































/*
//6->8=14
var Seattle = {

    name: 'Seattle',
    workingHours: 14,
    minCust: 23,//minCust/h
    maxCust: 65,//maxCust/h
    avgCks: 6.3,//avgCks/Cust'
    purchasedCks: Math.floor(this.avgCks * this.getrandomCustperHour),//soled cookies
    randomCustperHour: [],
    soledCookiesArr: [],
    totalSoled : 0,
    getrandomCustperHour: function () {//generat randomNum of Cust/h

        for (var i = 0; i < this.workingHours; i++) {

            var num = Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;// int number
            // this.randomCustperHour.push(Math.round(this.avgCks * num));
            this.randomCustperHour[i] = Math.round(this.avgCks * num);

            // console.log('getrandomCustperHour func'+  this.randomCustperHour[i]);
        }

        // return num;
    }
    ,
    soledCookies: function () {
        for (var i = 0; i < this.randomCustperHour.length; i++) {
            this.soledCookiesArr.push(Math.round(this.randomCustperHour[i] * this.avgCks))
            // console.log('soledCookies'+ Math.round(this.randomCustperHour[i] * this.avgCks));
            // console.log(this.randomCustperHour[i]);

        }

    }
    ,
    render: function (location) {
        // var container = document.createElement('div');
        // container.setAttribute(location);
        var container = document.getElementById('Seattle');
        var header = document.createElement('h2');
        container.appendChild(header);
        header.textContent = this.name;

        var ulist = document.createElement('ul');
        container.appendChild(ulist);
        // this.workingHours
        for (var i = 0; i < timeArr.length; i++) {
            var listItem = document.createElement('li');
            ulist.appendChild(listItem);
            listItem.textContent = ` ${timeArr[i]}: ${this.soledCookiesArr[i]} Cookies`;
            // console.log("Pass this")
             this.totalSoled +=  this.soledCookiesArr[i];
        }
        ulist.appendChild(listItem);
        listItem.textContent = `Total: ${this.totalSoled} Cookies`;


    }


}
Seattle.getrandomCustperHour();
Seattle.soledCookies();

Lima.getrandomCustperHour();
Lima.soledCookies();

*/
// Seattle.soledCookies();
// Seattle.render();
// Tokyo.render();
// Dubai.render();
// Paris.render();
// Lima.render();
