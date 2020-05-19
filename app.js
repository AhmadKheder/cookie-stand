'use strict'

var timeArr = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

function Locations(name, minCust, maxCust, avgCks, randomCustperHour, soledCookiesArr) {
    this.name = name;
    this.minCust = minCust;
    this.maxCust = maxCust;
    this.avgCks = avgCks;
    this.randomCustperHour = randomCustperHour;//arr
    this.soledCookiesArr = soledCookiesArr;
    this.totalSoled = 0;
    // this.timeArr = timeArr; 
}

Locations.prototype.getrandomCustperHour = function (minCust, maxCust) {
    for (var i = 0; i < this.workingHours; i++) {

        var num = Math.floor(Math.random() * (maxCust - minCust + 1)) + minCust;// int number
        // this.randomCustperHour.push(Math.round(this.avgCks * num));
        this.randomCustperHour[i] = Math.round(avgCks * num);

        // console.log('getrandomCustperHour func'+  this.randomCustperHour[i]);
    }
    return randomCustperHour;

}

Locations.prototype.soledCookies = function () {

    for (var i = 0; i < this.randomCustperHour.length; i++) {

        this.soledCookiesArr.push(Math.round(this.randomCustperHour[i] * this.avgCks))


    }
    return soledCookiesArr;
}

Locations.prototype.render = function () {
    var container = document.getElementById('table');//div
    // var header = document.createElement('h2');
    // container.appendChild(header);
    // header.textContent = this.name;
    var tableTag = document.createElement('table');
    var tableRow = document.createElement('tr');
    var tableHead = document.createElement('th');
    var tableData = document.createElement('td');

    container.appendChild(tableTag);//<table></table>

    tableTag.appendChild(tableRow);//<table><tr></tr></table>
    tableRow.appendChild(tableHead);
    //<table><tr><th>Empty</th><th>6am</th> <th>	Daily Location Total</th> </tr></table>
    tableHead.textContent = '';
    for (var i = 0; i <= timeArr.length; i++) {
        if (i < timeArr.length) {
            tableRow.appendChild(tableHead);//<table><tr><th>Empty</th><th>6am</th> <th>	Daily Location Total</th> </tr></table>
           var tableHead = document.createElement('th');
            tableHead.textContent =  timeArr[i];
            // console.log(timeArr[i]) //it works
           
        }else if (i === timeArr.length) {
            tableRow.appendChild(tableHead);//<table><tr><th>Empty</th><th>6am</th> <th>	Daily Location Total</th> </tr></table>
            // var tableHead = document.createElement('th');

            tableHead.textContent = 'Daily Location Total';
            // console.log('Daily Location Total')// it works
        }
    }

    var tableRow2 = document.createElement('tr');
    tableRow2.appendChild(tableData);
    tableData.textContent = this.name;
    var DailyLocationTotal = 0;
    for(var dataPointer = 0; dataPointer <= timeArr.length;dataPointer++){

        if(dataPointer < timeArr.length){
            
        var tableData2 = document.createElement('td');
        tableRow2.appendChild(tableData2);
        tableData2.textContent = this.soledCookiesArr[i];
        DailyLocationTotal += this.soledCookiesArr[i];
        }
        else if(dataPointer === timeArr.length){

            var tableData2 = document.createElement('td');
            tableRow2.appendChild(tableData2);
            tableData2.textContent = DailyLocationTotal;
        }
    }


    // var ulist = document.createElement('ul');
    // container.appendChild(ulist);
    // // this.workingHours
    // for (var i = 0; i < timeArr.length; i++) {

    //     var listItem = document.createElement('li');
    //     ulist.appendChild(listItem);
    //     console.log(i);
    //     listItem.textContent = ` ${timeArr[i]}: ${this.soledCookiesArr[i]} Cookies`;
    //     console.log(i);
    //     console.log('Pass here');
    //     // console.log("Pass this")
    //     this.totalSoled +=  this.soledCookiesArr[i];
    // }
    // ulist.appendChild(listItem);
    // listItem.textContent = `Total: ${this.totalSoled} Cookies`;


}
var Seattle = new Locations('Seattle', 23, 65, 6.3, this.getrandomCustperHour, this.soledCookies);
var Tokyo = new Locations('Tokyo', 3, 24, 1.2, this.getrandomCustperHour, this.soledCookies);
var Dubai = new Locations('Dubai', 11, 38, 3.7, this.getrandomCustperHour, this.soledCookies);
var Paris = new Locations('Paris', 20, 38, 2.3, this.getrandomCustperHour, this.soledCookies);
var Lima = new Locations('Lima', 2, 16, 4.6, this.getrandomCustperHour, this.soledCookies);
// console.log(Dubai)

Dubai.render();

console.log(Dubai.soledCookies());

/* 
Tokyo.render();
Dubai.render();
Paris.render();
Lima.render(); */

// Seattle.getrandomCustperHour();
// Seattle.soledCookies();
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
