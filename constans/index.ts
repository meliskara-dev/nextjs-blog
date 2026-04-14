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
        description:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
         Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
        image:"/blog/1.jpg",
        active:true,
    },
    {
        id:2,
        title:"Blog Title Page 2",
        description:`Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
        Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. 
        Donec eu libero sit amet quam egestas semper. 
        Aenean ultricies mi vitae est. Mauris placerat eleifend leo. 
        Quisque sit amet est et sapien ullamcorper pharetra.`,
        image:"/blog/2.jpg",
        active:true,
    },
    {
        id:3,
        title:"Blog Title Page 3",
        description:`Curabitur pretium tincidunt lacus. 
        Nulla gravida orci a odio. Nullam varius, turpis molestie dictum semper, enim libero condimentum odio, eget aliquet metus felis eu arcu. 
        Cras consequat, turpis et condimentum pharetra, metus enim feugiat lorem, at pulvinar risus enim id diam. 
        Integer blandit nisi id leo tincidunt, et gravida nisl interdum.`,
        image:"/blog/3.jpg",
        active:true,
    },
    {
        id:4,
        title:"Blog Title Page 4",
        description:`Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. 
        Cras mattis consectetur purus sit amet fermentum. 
        Cras justo odio, dapibus ac facilisis in, egestas eget quam. 
        Nullam quis risus eget urna mollis ornare vel eu leo. 
        Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.`,
        image:"/blog/4.jpg",
        active:true,
    },
    {
        id:5,
        title:"Blog Title Page 5",
        description:`Vestibulum id ligula porta felis euismod semper. 
        Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
        Donec ullamcorper nulla non metus auctor fringilla. 
        Nullam quis risus eget urna mollis ornare vel eu leo. 
        Aenean eu leo quam, pellentesque ornare sem lacinia quam venenatis vestibulum.`,
        image:"/blog/5.jpg",
        active:true,
    },
    {
        id:6,
        title:"Blog Title Page 6",
        description:`Maecenas faucibus mollis interdum. 
        Sed posuere consectetur est at lobortis. 
        Donec sed odio dui. 
        Donec ullamcorper nulla non metus auctor fringilla. 
        Cras mattis consectetur purus sit amet fermentum. 
        Aenean lacinia bibendum nulla sed consectetur. 
        Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
        image:"/blog/6.jpg",
        active:true,
    },
    {
        id:7,
        title:"Blog Title Page 7",
        description:`Integer posuere erat a ante venenatis dapibus posuere velit aliquet. 
        Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. 
        Praesent commodo cursus magna, vel scelerisque nisl consectetur et. 
        Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.`,
        image:"/blog/7.jpg",
        active:true,
    },
]