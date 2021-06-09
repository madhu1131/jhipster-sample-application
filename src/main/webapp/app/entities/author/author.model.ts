import { IBook } from 'app/entities/book/book.model';

export interface IAuthor {
  id?: number;
  name?: string | null;
  address?: string | null;
  names?: IBook[] | null;
}

export class Author implements IAuthor {
  constructor(public id?: number, public name?: string | null, public address?: string | null, public names?: IBook[] | null) {}
}

export function getAuthorIdentifier(author: IAuthor): number | undefined {
  return author.id;
}
