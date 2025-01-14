export type Tproduct={
    brand: string;
    name: string;
    desc: string;
    price: number;
    discount: number;
    images: {
        src: string;
        alt: string;
        thumbnailSrc: string;
    }[];
}


const product: Tproduct = {
    brand: 'Sneaker Company',
    name: 'Fall Limited Edition Sneakers',
    desc: 'These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.',
    price: 250,
    discount: 50,
    images: [
        {
            src: 'image-product-1.jpg',
            alt: 'product 1',
            thumbnailSrc: 'image-product-1-thumbnailSrc.jpg'
        },
        {
            src: 'image-product-2.jpg',
            alt: 'product 2',
            thumbnailSrc: 'image-product-2-thumbnailSrc.jpg'
        },
        {
            src: 'image-product-3.jpg',
            alt: 'product 3',
            thumbnailSrc: 'image-product-3-thumbnailSrc.jpg'
        },
        {
            src: 'image-product-4.jpg',
            alt: 'product 4',
            thumbnailSrc: 'image-product-4-thumbnailSrc.jpg'
        }
    ]

}


export default product