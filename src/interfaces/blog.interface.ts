export interface IBlog {
    topic: string;
    image : string;
    desc: string; 
    content: string;
    createdAt?: string; 
    updatedAt?: string;
    _id : string,
}


export interface ICBlog extends IBlog {
    link: string; 
}


