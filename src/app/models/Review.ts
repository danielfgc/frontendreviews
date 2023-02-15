import Category from "./Category";
import User from "./User";

export default interface Review{
    id?:number;
    title:string;
    body:string;
    valoration:number;
    user?:User;
    category?:Category;
    likes:number;
    dislikes:number;
}