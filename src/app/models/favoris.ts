export class Favoris {
    idFilm: number;
    idUser: string;
    poster_path:string;
    title:string;



    constructor(idFilm:number,idUser: string,poster_path:string,title:string) {
        this.idFilm=idFilm;
        this.idUser=idUser;
        this.poster_path=poster_path;
        this.title=title;
    }
}
