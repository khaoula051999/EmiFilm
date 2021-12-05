export class Revue {
    idFilm: number;
    idUser: string;
    date: string;
    content: string;
    rate: number;


    constructor(idFilm:number,idUser: string,date: string,content:string,rate:number) {
        this.idFilm=idFilm;
        this.idUser=idUser;
        this.date=date;
        this.content=content;
        this.rate=rate;
    }
}
