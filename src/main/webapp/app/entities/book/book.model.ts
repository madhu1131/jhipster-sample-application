import * as dayjs from 'dayjs';
import { IAuthor } from 'app/entities/author/author.model';

export interface IBook {
  id?: number;
  title?: string | null;
  publishDate?: dayjs.Dayjs | null;
  cost?: number | null;
  description?: string | null;
  author?: IAuthor | null;
}

export class Book implements IBook {
  constructor(
    public id?: number,
    public title?: string | null,
    public publishDate?: dayjs.Dayjs | null,
    public cost?: number | null,
    public description?: string | null,
    public author?: IAuthor | null
  ) {}
}

export function getBookIdentifier(book: IBook): number | undefined {
  return book.id;
}
