// // utils.js
// export const restaurantData =

// {
//   "restaurants": [
//     {
//       "id": "1",
//       "categoryId":2,
//       "name": "Pizza Palace Wraps, Rolls & Shawrama",
//       "location": "New York",
//       "image": "https://th.bing.com/th/id/OIP.N_9t_ZqG642avdGrv_GICQHaDX?w=924&h=421&rs=1&pid=ImgDetMain",
//       "menu": [
//         {
//           "id": "1",
//           "name": "Margherita Pizza",
//           "category": "Pizza",
//           "categoryId":2,
//           "price": 12.99,
//           "image": "https://images.unsplash.com/photo-1512058554364-e26e32743e0e"
//         },
//         {
//           "id": "2",
//           "name": "Pepperoni Pizza",
//           "category": "Pizza",
//           "categoryId":2,
//           "price": 15.99,
//           "image": "https://images.unsplash.com/photo-1589935795684-35bfbf87de8b"
//         },
//         {
//           "id": "3",
//           "name": "Pasta Alfredo",
//           "category": "Pasta",
//           "price": 13.99,
//           "image": "https://images.unsplash.com/photo-1561601498-c9b88c5c40b3"
//         }
//       ]
//     },
//     {
//       "id": "2",
//       "categoryId":4,
//       "name": "Mr Burger Joint",
//       "location": "Los Angeles",
//       "image": "https://th.bing.com/th/id/OIP.adU8dLuqq_p-KkF6Ow5xVAHaE8?pid=ImgDet&w=178&h=118&c=7&dpr=1.5",
//       "menu": [
//         {
//           "id": "1",
//           "categoryId":4,
//           "name": "Cheeseburger",
//           "category": "Burger",
//           "price": 9.99,
//           "image": "https://images.unsplash.com/photo-1565077889-085c6b7d87b7"
//         },
//         {
//           "id": "2",
//           "categoryId":4,
//           "name": "Veggie Burger",
//           "category": "Burger",
//           "price": 8.99,
//           "image": "https://images.unsplash.com/photo-1565937055-6326a2bc6d25"
//         },
//         {
//           "id": "3",
//           "name": "Fries",
//           "category": "Sides",
//           "price": 3.99,
//           "image": "https://images.unsplash.com/photo-1574188506631-4d29a6b6ba83"
//         }
//       ]
//     },
//     {
//       "id": "3",
//       "name": "Roll mania Sushi Spot",
//       "location": "San Francisco",
//       "image": "https://th.bing.com/th/id/OIP.2wPOWRG9C3Dv7CNh7NR8BgHaE7?w=236&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
//       "menu": [
//         {
//           "id": "1",
//           "name": "California Roll",
//           "category": "Sushi",
//           "price": 10.99,
//           "image": "https://images.unsplash.com/photo-1556742581-b1ed24eab8f4"
//         },
//         {
//           "id": "2",
//           "name": "Tuna Sashimi",
//           "category": "Sushi",
//           "price": 18.99,
//           "image": "https://images.unsplash.com/photo-1594824465801-f1064f032c9d"
//         },
//         {
//           "id": "3",
//           "name": "Miso Soup",
//           "category": "Soup",
//           "price": 4.99,
//           "image": "https://images.unsplash.com/photo-1589927986089-35812388d1b2"
//         }
//       ]
//     },
//     {
//       "id": "4",
//       "categoryId":3,
//       "name": "Biryani Taco Haven",
//       "location": "Austin",
//       "image": "https://th.bing.com/th/id/OIP.W-fTbvxy2eY-tWhmWtStTAHaE8?w=281&h=187&c=7&r=0&o=5&dpr=1.5&pid=1.7",
//       "menu": [
//         {
//           "id": "1",
//           "name": "Chicken Tacos",
//           "category": "Tacos",
//           "price": 7.99,
//           "image": "https://images.unsplash.com/photo-1588736731095-37664c6f09f3"
//         },
//         {
//           "id": "2",
//           "name": "Beef Tacos",
//           "category": "Tacos",
//           "price": 8.99,
//           "image": "https://images.unsplash.com/photo-1598354250901-8c875a98d7ac"
//         }
//       ]
//     },
//     {
//       "id": "5",
//       "name": "Pasta Perfection",
//       "location": "Chicago",
//       "image": "https://th.bing.com/th/id/OIP.IVkXjROOPdYM9DjaA3cNAQHaE8?w=270&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
//       "menu": [
//         {
//           "id": "1",
//           "name": "Spaghetti Bolognese",
//           "category": "Pasta",
//           "price": 14.99,
//           "image": "https://images.unsplash.com/photo-1584312335794-b3fc21fce2ad"
//         },
//         {
//           "id": "2",
//           "name": "Fettuccine Alfredo",
//           "category": "Pasta",
//           "price": 15.99,
//           "image": "https://images.unsplash.com/photo-1571688980892-9466b0a45716"
//         }
//       ]
//     },
//     {
//       "id": "6",
//       "name": "Dim Sum Delights",
//       "location": "Seattle",
//       "image": "https://th.bing.com/th/id/OIP.N_9t_ZqG642avdGrv_GICQHaDX?w=924&h=421&rs=1&pid=ImgDetMain",
//       "menu": [
//         {
//           "id": "1",
//           "name": "Shrimp Dumplings",
//           "category": "Dim Sum",
//           "price": 8.99,
//           "image": "https://images.unsplash.com/photo-1601074216638-b3e3a55f6f5c"
//         },
//         {
//           "id": "2",
//           "name": "Pork Buns",
//           "category": "Dim Sum",
//           "price": 7.99,
//           "image": "https://images.unsplash.com/photo-1582617220207-226cc320abfe"
//         }
//       ]
//     },
//     {
//       "id": "7",
//       "name": "Vegan Paradise",
//       "location": "Portland",
//       "image": "https://th.bing.com/th/id/OIP.adU8dLuqq_p-KkF6Ow5xVAHaE8?pid=ImgDet&w=178&h=118&c=7&dpr=1.5",
//       "menu": [
//         {
//           "id": "1",
//           "name": "Vegan Burger",
//           "category": "Vegan",
//           "price": 11.99,
//           "image": "https://images.unsplash.com/photo-1605372906768-4bc18f98f051"
//         },
//         {
//           "id": "2",
//           "name": "Vegan Tacos",
//           "category": "Vegan",
//           "price": 9.99,
//           "image": "https://images.unsplash.com/photo-1593642634339-df8b8f52b1f4"
//         }
//       ]
//     },
//     {
//       "id": "8",
//       "name": "Barbecue Bliss",
//       "location": "Nashville",
//       "image": "https://th.bing.com/th/id/OIP.adU8dLuqq_p-KkF6Ow5xVAHaE8?pid=ImgDet&w=178&h=118&c=7&dpr=1.5",
//       "menu": [
//         {
//           "id": "1",
//           "name": "Pulled Pork Sandwich",
//           "category": "BBQ",
//           "price": 12.99,
//           "image": "https://images.unsplash.com/photo-1576471409677-e60210d8fc1d"
//         },
//         {
//           "id": "2",
//           "name": "Ribs",
//           "category": "BBQ",
//           "price": 16.99,
//           "image": "https://images.unsplash.com/photo-1574689202066-9c0a5b47b7d4"
//         }
//       ]
//     },
//     {
//       "id": "9",
//       "name": "Steakhouse Supreme",
//       "location": "Denver",
//       "image": "https://th.bing.com/th/id/OIP.adU8dLuqq_p-KkF6Ow5xVAHaE8?pid=ImgDet&w=178&h=118&c=7&dpr=1.5",
//       "menu": [
//         {
//           "id": "1",
//           "name": "Ribeye Steak",
//           "category": "Steak",
//           "price": 21.99,
//           "image": "https://images.unsplash.com/photo-1592194996308-7b43878e84a6"
//         },
//         {
//           "id": "2",
//           "name": "Filet Mignon",
//           "category": "Steak",
//           "price": 26.99,
//           "image": "https://images.unsplash.com/photo-1602676990554-2d7b498f2a72"
//         }
//       ]
//     },
//     {
//       "id": "10",
//       "name": "Cafe Corner",
//       "location": "Miami",
//       "image": "https://th.bing.com/th/id/OIP.adU8dLuqq_p-KkF6Ow5xVAHaE8?pid=ImgDet&w=178&h=118&c=7&dpr=1.5",
//       "menu": [
//         {
//           "id": "1",
//           "name": "Cappuccino",
//           "category": "Drinks",
//           "price": 3.99,
//           "image": "https://images.unsplash.com/photo-1536324167815-7d013b1c4c64"
//         },
//         {
//           "id": "2",
//           "name": "Croissant",
//           "category": "Bakery",
//           "price": 2.99,
//           "image": "https://images.unsplash.com/photo-1587195636069-d3a69c8b5732"
//         }
//       ]
//     }
//   ]
// }

