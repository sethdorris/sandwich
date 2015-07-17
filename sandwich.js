var sandwhich = {
  pickle: false,
  lettuce: false,
  tomato: false,
  ketchup: false,
  mustard: false,
  mayo: false
};

function pickles(want) {
  if (want === 1) {
    sandwhich.pickle = true;
    return 1;
  }
}

function lettuces(want) {
  if (want === 1) {
    sandwhich.lettuce = true;
    return 1;
  }
}

function tomatos(want) {
  if (want === 1) {
    sandwhich.tomato = true;
    return 1;
  }
}

function makeMeASandwhich(pickle, lettuce, tomato, ketchup, mustard, mayo) {
  pickles(pickle)
  lettuces(lettuce)
  tomatos(tomato)
  
  var textForPickle;
  var textForLettuce;
  var textForTomato;
  var textForKetchup;
  var textForMustard;
  var textForMayo;
  
  if (ketchup === 1) {
    sandwhich.ketchup = true;
  }
  
  if (mustard === 1) {
    sandwhich.mustard = true;
  }
  
  if (mayo === 1) {
    sandwhich.mayo = true;
  }
  
  document.write("My sandwhich has ");
  
  if (sandwhich.pickle) {
    document.write("pickles ");
  }
  
  if (sandwhich.lettuce) {
    document.write("lettuce ");
  }
  
  if (sandwhich.tomato) {
    document.write("tomatoes ");
  }
  
  if (sandwhich.ketchup) {
    document.write("ketchup ")
  }
  
  if (sandwhich.mustard) {
    document.write("mustard ")
  }
  
  if (sandwhich.mayo) {
    document.write("mayo ")
  }
  
}

makeMeASandwhich(1, 0, 1, 0, 0, 1);