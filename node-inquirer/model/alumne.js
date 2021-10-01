import { v4 as uuidv4 } from 'uuid';

class Alumne {
    id = null;
    nom = '';
    horesFetes = 0;

    constructor(nom, horesFetes){
        this.id = uuidv4()
        this.nom = nom;
        this.horesFetes = hores;
    }
}

module.exports{
    'Alumne'
}
