export interface IBlog {
    topic: string;
    image : string;
    desc: string; 
    content: string;
    createdAt?: string; 
    updatedAt?: string;
    _id : string,
    link : string,
}


export interface ICBlog {
  _id: string;
  title: string;
  content: string;
  excerpt: string;
  slug: string;
  author: string;
  image: string;
  published: boolean;
  createdAt: string;
  updatedAt: string;
}


