// export interface productItems
// {
//     items: Array<Product>;
// }

export interface Product
{
    [x: string]: number;
    id: number;
    name: string;
    price: number;
    img: string;
    quantity : number;
}


export const products= [
    {
        id: 1,
        name: 'Mutton Biryani single',
        Actualprice: 160,
        price: 160,
        img: 'assets/MBiryaniSingle.jpg',
        quantity: 1,
    },
    {
        id: 2,
        name: 'Chicken Biryani Full',
        Actualprice: 230,
        price: 230,
        img: 'assets/CBiryaniFull.jpg',
        quantity: 1,
    },
    {
        id:3,
        name: 'Chicken Biryani Single',
        Actualprice: 130,
        price: 130,
        img: '../assets/CBiryaniSingle.jpg',
        quantity: 1,
    },
    {
        id:4,
        name:'Mutton Biryani Full',
        Actualprice: 260,
        price: 260,
        img: '../assets/MBiryaniFull.jpg',
        quantity: 1,
    },
    {
        id:5,
        name:'Chicken Biryani Family',
        Actualprice: 500,
        price: 500,
        img: '../assets/CBiryaniFamily.jpg',
        quantity: 1,
    },
    {
        id:6,
        name:'Chicken Biryani Jumbo',
        Actualprice: 600,
        price: 600,
        img: '../assets/CBiryaniJumbo.jpg',
        quantity: 1,
    },
    {
        id:7,
        name:'Mutton Biryani Family',
        Actualprice: 610,
        price: 610,
        img: '../assets/MBiryaniFamily.jpg',
        quantity: 1,   
    },
    {
        id:8,
        name:'Mutton Biryani Jumbo',
        Actualprice: 740,
        price: 740,
        img: '../assets/MBiryaniJumbo.jpg',
        quantity: 1,
    },
    {
        id:9,
        name:'Veg Biryani Single',
        Actualprice: 105,
        price: 105,
        img: '../assets/VBiryaniSingle.jpg',
        quantity: 1, 
    },
    {
        id:10,
        name:'Double Ka Meetha',
        Actualprice: 70,
        price: 70,
        img: '../assets/DKaMeetha.jpg',
        quantity: 1,
    },
    {
        id:11,
        name:'Kaddu Ka Kheer',
        Actualprice: 70,
        price: 70,
        img: '../assets/KKaKheer.jpg',
        quantity : 1,
    },
    {
        id:12,
        name:'Khubani Ka Meetha',
        Actualprice: 70,
        price: 70,
        img: '../assets/KKaMeetha.jpg',
        quantity: 1,
    }

]