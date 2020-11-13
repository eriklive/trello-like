export class Comments {
  user: string;
  comment: string;
}

export class Item {
  title: string;
  comments: Array<Comments>;
}
