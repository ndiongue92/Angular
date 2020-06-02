import { Deserializable } from './deserializable.model';

export class Contact implements Deserializable {
  id: number;
  nom: string;
  prenom: string;
  numero: string;
  favori: boolean;

  /*constructor(datas: any) {
    this.id = datas.id;
    this.nom = datas.nom;
    this.prenom = datas.prenom;
    this.favori = datas.favori;
  }*/
  deserialize(input: any): this {
    return Object.assign(this, input);
    // retourner un objet qui va assigner toutes les valeurs de input à l'objet this
  }
}
