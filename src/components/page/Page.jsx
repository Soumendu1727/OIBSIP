import React from 'react'
import {GiProgression} from 'react-icons/gi'
import {BiWifi2} from 'react-icons/bi'
import {BsBatteryFull} from 'react-icons/bs'
import './page.css'

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = mm + '/' + dd + '/' + yyyy;
window.onload = function() {
    what();
    function what(){
        document.getElementById('timec').innerHTML = today;
    };
}

const Page = () => {
  return (
    <section id='Page'>
        <div className='Outline'>
            <div className="header">
                <div className="time">
                    <h4 id='timec'> </h4>
                </div>
                <div className="icons">
                    <ul>
                        <li><GiProgression /></li>
                    </ul>
                    <ul>
                        <li><BiWifi2 /></li>
                    </ul>
                    <ul>
                        <li><BsBatteryFull /></li>
                    </ul>
                </div>
            </div>
            <h2> Temperature Converter</h2>
            <div className="options">

                <div>
                <h4>Type</h4>
                    <select name="Temperature" id="temp1" >
                        <option value="Celsius">Celsius</option>
                        <option value="Fahrenheit">Fahrenheit</option>
                        <option value="Kelvin">Kelvin</option>
                    </select>
                </div>


                <div className='temp2'>
                <h4>Convert To</h4>
                    <select name="cars" id="temp2" >
                        <option value="Celsius">Celsius</option>
                        <option value="Fahrenheit">Fahrenheit</option>
                        <option value="Kelvin">Kelvin</option>
                    </select>
                </div>
            </div>
            <div className="deg">
                <h4 className=''>Degrees</h4>
                <input type="text" id='degree' placeholder='Ex: 30'/>
            </div>
            <h4 className='res'>Result</h4>
            <div className="result">
                <h1 id='Result'>0.00</h1>
            </div>
            <div className="button">
            <button className='btn' type="button" onClick={convert}>Convert</button>
            </div>
            
            

        </div>
    </section>
    
  )
}

function convert()
{
    var degree = document.getElementById('degree');
    var a = degree.value;
    var temp1 = document.getElementById("temp1").value;
    var temp2 = document.getElementById("temp2").value;
    if (temp1 === "Celsius" )
    {
        if (temp2 === "Fahrenheit"){
            a = (a * 9/5) + 32 + '° F'
            document.getElementById("Result").innerHTML = a;
        }
        else if (temp2 === "Kelvin"){
            a = (a*1) + 273.15 + "K";
            document.getElementById("Result").innerHTML = a;
        }
        else{
            a = a + "°C";
            document.getElementById("Result").innerHTML = a;
        }
    }
    else if (temp1 === "Fahrenheit") {
        if(temp2 === "Celsius"){
            a = (a - 32) * 5/9 + '°C';
            document.getElementById("Result").innerHTML = a;
        }
        else if(temp2 === "Kelvin" ){
            a = ((a*1) + 459.67)* 5/9 + 'K'
            document.getElementById("Result").innerHTML = a;
        }
        else
        {
            a = a + "° F"
            document.getElementById("Result").innerHTML = a;
        }
    }
    else
    {
        if(temp2 === "Celsius")
        {
            a = a - 273.15 + '°C';
            document.getElementById("Result").innerHTML = a;
        }
        else if(temp2 === "Fahrenheit")
        {
            a = a * 9/5 - 459.67 + "° F";
            document.getElementById("Result").innerHTML = a;
        }

        else{
            a = a + 'K'
            document.getElementById("Result").innerHTML = a;
        }
    }
    
}


    



export default Page