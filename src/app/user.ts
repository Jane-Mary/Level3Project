export interface user {
    id: number;
    name: string;
    email: string;
    favourites:design[]
    password: string;
    created_at: string;
}
export interface design{
   name: string;
   price: string;
   location:string;
   image:string;
   description: string;
}