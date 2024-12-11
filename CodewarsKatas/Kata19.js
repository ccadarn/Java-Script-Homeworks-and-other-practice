/*
You're writing an excruciatingly detailed alternate history novel set in a world where Daniel Gabriel Fahrenheit was never born.

Since Fahrenheit never lived the world kept on using the Rømer scale, invented by fellow Dane Ole Rømer to this very day, skipping over the Fahrenheit and Celsius scales entirely.

Your magnum opus contains several thousand references to temperature, but those temperatures are all currently in degrees Celsius. You don't want to convert everything by hand, so you've decided to write a function that takes a temperature in degrees Celsius and returns the equivalent temperature in degrees Rømer. Fortunately, you remember that the function for converting is pretty simple and it looks like this:

*/

function celsiusToRomer(temp) {
    return (21/40)*temp+7.5;
  }