    function kilometarK()
    {
    document.konverterduzine.metar.value = document.konverterduzine.kilometar.value * 1000
    document.konverterduzine.decimetar.value = document.konverterduzine.kilometar.value * 10000
    document.konverterduzine.centimetar.value = document.konverterduzine.kilometar.value * 100000
    document.konverterduzine.milimetar.value = document.konverterduzine.kilometar.value * 1000000
    document.konverterduzine.mikrometar.value = document.konverterduzine.kilometar.value * 1000000000
    }
    function metarK()
    {
        document.konverterduzine.kilometar.value = document.konverterduzine.metar.value / 1000
        document.konverterduzine.decimetar.value = document.konverterduzine.metar.value * 10
        document.konverterduzine.centimetar.value = document.konverterduzine.metar.value * 100
        document.konverterduzine.milimetar.value = document.konverterduzine.metar.value * 1000
        document.konverterduzine.mikrometar.value = document.konverterduzine.metar.value * 1000000
    }
    function decimetarK()
    {
        document.konverterduzine.metar.value = document.konverterduzine.decimetar.value / 10
        document.konverterduzine.kilometar.value = document.konverterduzine.decimetar.value / 100
        document.konverterduzine.centimetar.value = document.konverterduzine.decimetar.value * 10
        document.konverterduzine.milimetar.value = document.konverterduzine.decimetar.value * 100
        document.konverterduzine.mikrometar.value = document.konverterduzine.decimetar.value * 100000
    }
    function centimetarK()
    {
        document.konverterduzine.metar.value = document.konverterduzine.centimetar.value / 100
        document.konverterduzine.decimetar.value = document.konverterduzine.centimetar.value /10
        document.konverterduzine.kilometar.value = document.konverterduzine.centimetar.value / 100000
        document.konverterduzine.milimetar.value = document.konverterduzine.centimetar.value * 10
        document.konverterduzine.mikrometar.value = document.konverterduzine.centimetar.value * 10000
    }
    function milimetarK()
    {
        document.konverterduzine.metar.value = document.konverterduzine.milimetar.value / 1000
        document.konverterduzine.decimetar.value = document.konverterduzine.milimetar.value / 100
        document.konverterduzine.centimetar.value = document.konverterduzine.milimetar.value / 10
        document.konverterduzine.kilometar.value = document.konverterduzine.milimetar.value / 1000000
        document.konverterduzine.mikrometar.value = document.konverterduzine.milimetar.value * 1000
    }
    function mikrometarK()
    {
        document.konverterduzine.metar.value = document.konverterduzine.mikrometar.value / 1000000
        document.konverterduzine.decimetar.value = document.konverterduzine.mikrometar.value / 100000
        document.konverterduzine.centimetar.value = document.konverterduzine.mikrometar.value / 10000
        document.konverterduzine.milimetar.value = document.konverterduzine.mikrometar.value / 1000
        document.konverterduzine.kilometar.value = document.konverterduzine.mikrometar.value / 1000000000
    }


//----------------------------------------------------------------------------------------------------------------

function tonaK()
{
document.konvertermase.kvintal.value = document.konvertermase.tona.value * 10
document.konvertermase.kilogram.value = document.konvertermase.tona.value * 1000
document.konvertermase.dekagram.value = document.konvertermase.tona.value * 100000
document.konvertermase.gram.value = document.konvertermase.tona.value * 1000000
document.konvertermase.miligram.value = document.konvertermase.tona.value * 1000000000
}
function kvintalK()
{
    document.konvertermase.tona.value = document.konvertermase.kvintal.value / 10
    document.konvertermase.kilogram.value = document.konvertermase.kvintal.value * 100
    document.konvertermase.dekagram.value = document.konvertermase.kvintal.value * 10000
    document.konvertermase.gram.value = document.konvertermase.kvintal.value * 100000
    document.konvertermase.miligram.value = document.konvertermase.kvintal.value * 100000000
}
function kilogramK()
{
    document.konvertermase.tona.value = document.konvertermase.kilogram.value / 1000
    document.konvertermase.kvintal.value = document.konvertermase.kilogram.value / 100
    document.konvertermase.dekagram.value = document.konvertermase.kilogram.value * 100
    document.konvertermase.gram.value = document.konvertermase.kilogram.value * 1000
    document.konvertermase.miligram.value = document.konvertermase.kilogram.value * 1000000
}
function dekagramK()
{
    document.konvertermase.tona.value = document.konvertermase.dekagram.value / 100000
    document.konvertermase.kilogram.value = document.konvertermase.dekagram.value /100
    document.konvertermase.kvintal.value = document.konvertermase.dekagram.value / 10000
    document.konvertermase.gram.value = document.konvertermase.dekagram.value * 10
    document.konvertermase.miligram.value = document.konvertermase.dekagram.value * 10000
}
function gramK()
{
    document.konvertermase.tona.value = document.konvertermase.gram.value / 1000000
    document.konvertermase.kilogram.value = document.konvertermase.gram.value / 1000
    document.konvertermase.dekagram.value = document.konvertermase.gram.value / 10
    document.konvertermase.kvintal.value = document.konvertermase.gram.value / 100000
    document.konvertermase.miligram.value = document.konvertermase.gram.value * 1000
}
function miligramK()
{
    document.konvertermase.tona.value = document.konvertermase.miligram.value / 1000000000
    document.konvertermase.kilogram.value = document.konvertermase.miligram.value / 1000000
    document.konvertermase.dekagram.value = document.konvertermase.miligram.value / 10000
    document.konvertermase.gram.value = document.konvertermase.miligram.value / 1000
    document.konvertermase.kvintal.value = document.konvertermase.miligram.value / 100000000
}

function otvori(konverter, elemnt) {
    var i, tabhidden, tabstyle;
    tabhidden = document.getElementsByClassName("tabhidden");
    for (i=0;i<tabhidden.length;i++) {
      tabhidden[i].style.display = "none";
    }
    tabstyle = document.getElementsByClassName("tabstyle");
    for (i = 0; i < tabstyle.length; i++) {
      tabstyle[i].className = tabstyle[i].className.replace(" active", "");
    }
    document.getElementById(konverter).style.display = "block";
    elemnt.currentTarget.className += " active";
  }