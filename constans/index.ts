export interface BlogType{
    id:number;
    title:string;
    description:string;
    image:string;
    active:boolean;
}

export const Blogs: BlogType[] = [
    {
        id:1,
        title:"Blog Title Page 1",
        description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        image:"/blog/1.jpg",
        active:true,
    },
    {
        id:2,
        title:"Blog Title Page 2",
        description:"Contrary to popular belief, Lorem Ipsum is not simply random text.",
        image:"/blog/2.jpg",
        active:true,
    },
    {
        id:3,
        title:"Blog Title Page 3",
        description:"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
        image:"/blog/3.jpg",
        active:true,
    },
    {
        id:4,
        title:"Blog Title Page 4",
        description:"Maecenas pellentesque vulputate sagittis.",
        image:"/blog/4.jpg",
        active:true,
    },
    {
        id:5,
        title:"Blog Title Page 5",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eu cursus diam, a sagittis ipsum.",
        image:"/blog/5.jpg",
        active:true,
    },
    {
        id:6,
        title:"Blog Title Page 6",
        description:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
        image:"/blog/6.jpg",
        active:true,
    },
    {
        id:7,
        title:"Blog Title Page 7",
        description:"It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
        image:"/blog/7.jpg",
        active:true,
    },
]