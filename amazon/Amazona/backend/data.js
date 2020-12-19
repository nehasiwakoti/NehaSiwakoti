import bcrypt from 'bcryptjs';

const data = {
    users:[
        {
            name:'neha',
            email:'admin@example.com',
            password:bcrypt.hashSync('1234',8),
            isAdmin:true,

        },
        {
            name:'John',
            email:'user@example.com',
            password:bcrypt.hashSync('1234',8),
            isAdmin:false,

        }
    ],
    products :[
        {
            
            name:'Bridal Lehenga',
            category:'Lehenga',
            image:'/images/p1.jpg',
            price:140,
            countInStock:10,
            brand:'Sabyasachi',
            rating:4.5,
            numReviews:10,
            description:'High quality product',
        },
        {
            
            name:'Bridal Lehenga',
            category:'Lehenga',
            image:'/images/p1.jpg',
            price:16,
            countInStock:0,
            brand:'Sabyasachi',
            rating:4.5,
            numReviews:14,
            description:'High quality product',
        },
        {
            
            name:'Bridal Lehenga',
            category:'Lehenga',
            image:'/images/p1.jpg',
            price:120,
            countInStock:17,
            brand:'Sabyasachi',
            rating:4.5,
            numReviews:16,
            description:'High quality product',
        },
        {
            
            name:'Bridal Lehenga',
            category:'Lehenga',
            image:'/images/p1.jpg',
            price:110,
            countInStock:0,
            brand:'Sabyasachi',
            rating:4.5,
            numReviews:17,
            description:'High quality product',
        },
        {
            
            name:'Bridal Lehenga',
            category:'Lehenga',
            image:'/images/p1.jpg',
            price:120,
            countInStock:17,
            brand:'Sabyasachi',
            rating:4.5,
            numReviews:18,
            description:'High quality product',
        },
        {
            
            name:'Bridal Lehenga',
            category:'Lehenga',
            image:'/images/p1.jpg',
            price:130,
            countInStock:16,
            brand:'Sabyasachi',
            rating:4.5,
            numReviews:19,
            description:'High quality product',
        },

    ],
};

export default data;