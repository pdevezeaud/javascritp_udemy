if(localStorage.getItem('Prenom')) {
    document.body.append('Bonjour ' + localStorage.getItem('prenom'));
}
else {
    let prenom = prompt('Quel est votre prénom ?');
    localStorage.setItem('prenom', prenom);
    document.body.append('Bonjour ' + prenom);
}