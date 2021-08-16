function map(f, a) {
    var resultat = []; // Créer un nouveau tableau Array
    for (var i = 0; i != a.length; i++)
      resultat[i] = f(a[i]);
    return console.log(resultat);
  }
map(f,a);