export interface ICollection {
    title: string,
    description?: string,
    createdDate: string
}

export class Collection implements ICollection {
    title: string;
    description?: string;
    createdDate: string;

    constructor(){}
}