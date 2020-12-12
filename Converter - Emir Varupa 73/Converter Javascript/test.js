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