// export interface productItems
// {
//     items: Array<Product>;
// }

export interface Product
{
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
        price: 160,
        img: 'assets/MBiryaniSingle.jpg',
        quantity: 1,
    },
    {
        id: 2,
        name: 'Chicken Biryani Full',
        price: 230,
        img: 'assets/CBiryaniFull.jpg',
        quantity: 1,
    },
    {
        id:3,
        name: 'Chicken Biryani Single',
        price: 130,
        img: '../assets/CBiryaniSingle.jpg',
        quantity: 1,
    },
    {
        id:4,
        name:'Mutton Biryani Full',
        price: 260,
        img: '../assets/MBiryaniFull.jpg',
        quantity: 1,
    },
    {
        id:5,
        name:'Chicken Biryani Family',
        price: 500,
        img: '../assets/CBiryaniFamily.jpg',
        quantity: 1,
    },
    {
        id:6,
        name:'Chicken Biryani Jumbo',
        price: 600,
        img: '../assets/CBiryaniJumbo.jpg',
        quantity: 1,
    },
    {
        id:7,
        name:'Mutton Biryani Family',
        price: 610,
        img: '../assets/MBiryaniFamily.jpg',
        quantity: 1,   
    },
    {
        id:8,
        name:'Mutton Biryani Jumbo',
        price: 740,
        img: '../assets/MBiryaniJumbo.jpg',
        quantity: 1,
    },
    {
        id:9,
        name:'Veg Biryani Single',
        price: 105,
        img: '../assets/VBiryaniSingle.jpg',
        quantity: 1, 
    },
    {
        id:10,
        name:'Double Ka Meetha',
        price: 70,
        img: '../assets/DKaMeetha.jpg',
        quantity: 1,
    },
    {
        id:11,
        name:'Kaddu Ka Kheer',
        price: 70,
        img: '../assets/KKaKheer.jpg',
        quantity : 1,
    },
    {
        id:12,
        name:'Khubani Ka Meetha',
        price: 70,
        img: '../assets/KKaMeetha.jpg',
        quantity: 1,
    }

]