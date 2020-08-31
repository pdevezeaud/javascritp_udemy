

// let citations = [
//     ["La vie est un mystère qu'il faut vivre, et non un problème à résoudre.", "Gandhi"],
//     ["Le plus grand risque est de ne prendre aucun risque.", "Mark Zuckerberg"],
//     ["Méritez votre statut de leader chaque jour.", "Mickael Jordan"],
//     ["Soyez le changement que vous voulez voir dans le monde.", "Gandhi"],
//     ["A chaque fois que vous vous retrouvez du même côté que la majorité, il est temps de prendre du recul, et de réfléchir.", "Mark Twain"],
//     ["Seulement ceux qui prendront le risque d’aller trop loin découvriront jusqu’où on peut aller.", "T.S Elliot"],
//     ["Le succès c’est tomber sept fois, se relever huit.", "Proverbe japonais"],
//     ["Dans vingt ans vous serez plus déçus par les choses que vous n’avez pas faites que par celles que vous avez faites. Alors sortez des sentiers battus. Mettez les voiles. Explorez. Rêvez. Découvrez.", "Mark Twain"],
//     ["Si vous attendez pour agir, tout ce que vous gagnerez, avec le temps, c’est de l’âge.", "Brian Tracy"],
//     ["Quand on concentre son attention sur un seul projet, l’esprit suggère constamment des idées et des améliorations qui lui échapperaient s’il était occupé avec plusieurs projets en même temps.", "P.T. Barnum"],
//     ["Se dédier à faire tout ce que l’on peut pour aider les autres à obtenir ce qu’ils veulent, c’est la clé du succès.", "Brian Sher"],
//     ["Si vous pensez que vous êtes trop petit pour avoir de l’impact, essayez d’aller au lit avec un moustique.", "Anita Roddick"],
//     ["Ne jugez pas chaque jour sur ce que vous récoltez, mais sur les graines que vous semez.", "Robert Louis Stevenson"],
//     ["L’action est la clé fondamentale de tout succès.", "Pablo Picasso"],
//     ["Le succès, c’est se promener d’échecs en échecs tout en restant motivé.", "Winston Churchill"],
//     ["Votre avenir est créé par ce que vous faîtes aujourd’hui, pas demain.", "Robert T. Kiyosaki"],
//     ["Ne vous découragez pas, c’est souvent la dernière clef du trousseau qui ouvre la porte.", "Zig Ziglar"],
//     ["Pour gagner votre vie, apprenez à l’école. Pour gagner une fortune, apprenez par vous-même.", "Brian Tracy"],
//     ["Les gagnants trouvent des moyens, les perdants des excuses…", "F. D. Roosevelt"],
//     ["Vous n’êtes jamais trop vieux pour vous fixer de nouveaux buts, ou rendre vos rêves réalité.", "C.S. Lewis"],
//     ["Un pessimiste voit la difficulté dans chaque opportunité. Un optimiste voit une opportunité dans chaque difficulté.", "Winston Churchill"]
//   ];

// var table = new Array("Pierre","Paul","Jacque");
// table[5]= "Toto";
// table.sort();

// let chaine = "Le tableau contient :"; 

// for (let i = 0; i < citations.length; i++) {
//         chaine += "\n" + i + " --> " + citations[i] + "\n";
//         console.log(chaine); 
        
//  }


// CREATION D'UNE FONCTION POUR FAIRE UNE MOYENNE
// function moyenne(tableau)
// {
//            // nombre de valeurs
//         let somme = 0;
//         let moyenne = 0;
//         for(i=0; i<tableau.length; i++)
//         somme += tableau[i];
//         moyenne = somme / tableau.length;
//         return moyenne;  // somme divisee par le nombre de valeurs
// }

// let tableau = [10,12]; 

// console.log(moyenne(tableau));


// CREATION D UNE GRILLE DE 9 PAR 9

// let grille = new Array();
// // on crée les lignes vertes
// for (let i = 0; i < 9 ; i ++) {
//  grille[i] = new Array();
  
// } 

// //on parcourt les lignes
// for(let i = 0; i< 9; i++)

// for(let j=0;j<9;j++)
// grille[i][j] = 0;

// for(var i=0; i<9; i++)
// for(var j=0; j<9; j++)

// alert("Case "+ i + "-" + j +" : "+ grille[i][j]);
// console.log(grille);


// TABLEAU DE FONCTION

// var operation = new Array();
// operation['addition'] = function(x,y){ return x + y};
// operation['soustraction'] = function(x,y){ return x - y};
// operation['multiplication'] = function(x,y){ return x * y};
// operation['division'] = function(x,y){ return x / y};
// operation['moyenne'] = function(x,y){ return (x + y)/2};

// let nbrA = Number(prompt("Premier Nombre ? : "));
// let nbrB = Number(prompt("Deuxieme nombre ? : "));
// let fct = prompt("operande [soustraction - multiplicaton etc... : ");

// let resultat = operation[fct](nbrA,nbrB);
// alert("Resultat = " + resultat);


// on peut effectuer un test pour verifier qu'elle n'est pas en undefined
// if(y == undefined);




// function isDefine(variable) {
  
//   if(variable == undefined)
//     return false;
//   else
//     return true;
  
    

// }

// console.log(isDefine(y));


//  option ARGUMENT EXEMPLE DANS UNE ADDITION
// function addition() {
//   nb = addition.arguments;
//   let somme = 0;
//   for(let i = 0; i < nb.length; i++)
//     somme += nb[i];
//     return somme;
// }

// console.log(addition(10,15,10,10));



//CREATION D'OBJET simple
// let mybook = {
//     title: "L'histoire de Tao",
//     author: "Philippe devezeaud",
//     numberOfPages: 250,
//     isAvailable: true
// }

// let bookTitle = mybook.title;
// let bookPage = mybook.numberOfPages;

//  console.log(bookPage);


//CREATION D'OBJET PAR CLASSE (INSTANCIATION)

// class book {
//     constructor(newTitle,newAuthor,newPages){
//         this.title = newTitle;
//         this.author = newAuthor;
//         this.pages = newPages;
//     }
// }

// let monLibre = new book("L'histoire de Tao", "Will Alexander",250);
// let MaFeuilleDeChou = new book("L'histoire de Philippe", "Will Jamilloux",25);

// console.log(monLibre);

//STRUCTURE IF/ELSE

class Episode {
    constructor(title, duration, minutesWatched) {
      this.title = title;
      this.duration = duration;
      
      
      // Add conditions here
      // =================================
      
      if (duration == minutesWatched) {
        this.hasBeenWatched = true;
      } else if (duration < minutesWatched) {
        this.hasBeenWatched = false;
      }
      // =================================
    }
  }
  
  let firstEpisode = new Episode('Dark Beginnings', 45, 45);
  let secondEpisode = new Episode('The Mystery Continues', 45, 10);
  let thirdEpisode = new Episode('An Unexpected Climax', 60, 0);
  
  let episodes = [firstEpisode, secondEpisode, thirdEpisode];
  
  const body = document.querySelector('body');
  
  for(let i = 0; i < 3; i++) {
    let newDiv = document.createElement('div');
    newDiv.classList.add('series-frame');
    let newTitle = document.createElement('h2');
    newTitle.innerText = 'The Story of Tau';
    let newParagraph = document.createElement('p');
    newParagraph.innerText = `${episodes[i].title}
  ${episodes[i].duration} minutes
  ${episodes[i].hasBeenWatched ? 'Already been watched' : 'Not yet watched'}`;
    newDiv.append(newTitle);
    newDiv.append(newParagraph);
    body.append(newDiv);
  }
