'use strict'

//6->8=14
var timeArr = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];
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

var Tokyo = {

    name: 'Tokyo',
    workingHours: 14,
    minCust: 3,//minCust/h
    maxCust: 24,//maxCust/h
    avgCks:1.2,//avgCks/Cust'
    purchasedCks: Math.floor(this.avgCks * this.getrandomCustperHour),//soled cookies
    randomCustperHour: [],
    soledCookiesArr: [],
    totalSoled : 0,
    getrandomCustperHour: function () {//generat randomNum of Cust/h

        for (var i = 0; i < this.workingHours; i++) {

            var num = Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;

            // this.randomCustperHour.push(Math.round(this.avgCks * num));
            this.randomCustperHour[i] = Math.round(this.avgCks * num);
        }

        // return num; 
    }
    ,
    soledCookies: function () {
        for (var i = 0; i < this.randomCustperHour.length; i++) {

            this.soledCookiesArr.push(Math.round(this.randomCustperHour[i] * this.avgCks))
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
Tokyo.getrandomCustperHour();
Tokyo.soledCookies();


var Dubai = {

    name: 'Dubai',
    workingHours: 14,
    minCust: 11,//minCust/h
    maxCust: 38,//maxCust/h
    avgCks: 3.7,//avgCks/Cust'
    purchasedCks: Math.floor(this.avgCks * this.getrandomCustperHour),//soled cookies
    randomCustperHour: [],
    soledCookiesArr: [],
    totalSoled : 0,
    getrandomCustperHour: function () {//generat randomNum of Cust/h

        for (var i = 0; i < this.workingHours; i++) {

            var num = Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;

            // this.randomCustperHour.push(Math.round(this.avgCks * num));
            this.randomCustperHour[i] = Math.round(this.avgCks * num);
        }

        // return num; 
    }
    ,
    soledCookies: function () {
        for (var i = 0; i < this.randomCustperHour.length; i++) {

            this.soledCookiesArr.push(Math.round(this.randomCustperHour[i] * this.avgCks))
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
Dubai.getrandomCustperHour();
Dubai.soledCookies();

var Paris = {

    name: 'Paris',
    workingHours: 14,
    minCust: 20,//minCust/h
    maxCust: 38,//maxCust/h
    avgCks: 2.3,//avgCks/Cust'
    purchasedCks: Math.floor(this.avgCks * this.getrandomCustperHour),//soled cookies
    randomCustperHour: [],
    soledCookiesArr: [],
    totalSoled : 0,
    getrandomCustperHour: function () {//generat randomNum of Cust/h

        for (var i = 0; i < this.workingHours; i++) {

            var num = Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;

            // this.randomCustperHour.push(Math.round(this.avgCks * num));
            this.randomCustperHour[i] = Math.round(this.avgCks * num);
        }

        // return num; 
    }
    ,
    soledCookies: function () {
        for (var i = 0; i < this.randomCustperHour.length; i++) {

            this.soledCookiesArr.push(Math.round(this.randomCustperHour[i] * this.avgCks))
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
Paris.getrandomCustperHour();
Paris.soledCookies();
var Lima = {

    name: 'Lima',
    workingHours: 14,
    minCust: 2,//minCust/h
    maxCust: 16,//maxCust/h
    avgCks: 4.6,//avgCks/Cust'
    purchasedCks: Math.floor(this.avgCks * this.getrandomCustperHour),//soled cookies
    randomCustperHour: [],
    soledCookiesArr: [],
    totalSoled : 0,
    getrandomCustperHour: function () {//generat randomNum of Cust/h

        for (var i = 0; i < this.workingHours; i++) {

            var num = Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;

            // this.randomCustperHour.push(Math.round(this.avgCks * num));
            this.randomCustperHour[i] = Math.round(this.avgCks * num);
        }

        // return num; 
    }
    ,
    soledCookies: function () {
        for (var i = 0; i < this.randomCustperHour.length; i++) {

            this.soledCookiesArr.push(Math.round(this.randomCustperHour[i] * this.avgCks))
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
Lima.getrandomCustperHour();
Lima.soledCookies();


// Seattle.soledCookies();
Seattle.render();
Tokyo.render();
Dubai.render();
Paris.render();
Lima.render();

// console.log(Seattle.soledCookiesArr[0]);
// Seattle.soledCookies();
// console.log(Seattle.soledCookiesArr);
// console.log(Seattle.randomCustperHour);




// addHtml(Seattle);
// addHtml(Tokyo);
// addHtml(Dubai);
// addHtml(Paris);
// addHtml(Lima);


// function addHtml(location) {






//     var container = document.createElement('div');

//     container.setAttribute(location.name);
//     var h2 = document.createElement('h2');//obj name
//     var ul = document.createElement('ul');
//     var li = document.createElement('li');

//     for (var i = 0; i < this.workingHours; i++) {
//         li.textContent = this.arr[i];
//         ul.append(li);

//     }


//     h2.textContent = this.name;
//     container.appendChild(h2);


// }

// Seattle.getrandomCustperHour();
// // console.log(Seattle.avgCks * Seattle.getrandomCustperHour());
// console.log(Seattle.getrandomCustperHour());
// console.log(Seattle.purchasedCks);
// console.log(Seattle.arr);







// function general(location){
//     var total = 0;
//         for(var i = 6 ; i < 12; i++ ){
//             var cookies = location.purchasedCks;


//             console.log(`${i}am: ${cookies} cookies`);

//             location.arr.push(cookies);
//             total += cookies;
//         }


//         for(var j = 1 ; j < 8; j++ ){
//             var cookies = location.purchasedCks;

//             console.log(`${j}pm: ${cookies} cookies`);

//             location.arr.push(cookies);
//             total += cookies;

//         }
//         console.log(`Total: ${total} cookies`);


//     }
// general(Seattle);
// general(Tokyo);
// general(Dubai);
// general(Paris);
// general(Lima);




// function getRandomNum(location) {
//     return Math.floor(Math.random() * (location.maxCust - location.minCust + 1)) + location.minCust;
// }

