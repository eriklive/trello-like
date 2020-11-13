export class Comentario {
  user: string;
  comment: string;
  reply?: Array<Comentario> = [];
}

export class Item {
  title: string;
  comments?: Array<Comentario> = [];
}
