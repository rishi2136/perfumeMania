const imageArr = ['https://img.freepik.com/free-vector/vector-3d-realistic-poster-banner-with-perfume-bottle_33099-1147.jpg?t=st=1730041885~exp=1730045485~hmac=a261a164ced18c0bc81a2cf573ea1ff4d54a47cc157e9614b72a7d4b78ff787b&w=740', "https://img.freepik.com/free-vector/beautiful-cosmetic-ad_23-2148471067.jpg?t=st=1730041922~exp=1730045522~hmac=2956d1db8dd372d584dedeeda99c58dd52be3494c833a8cc4749c1ac3421af06&w=740", "https://img.freepik.com/premium-vector/perfume-product-vector-background_53562-3812.jpg?w=740", "https://img.freepik.com/premium-photo/perfume-generative-ai_784890-15411.jpg?w=740"];



export const products = [
    {
      name: 'Velvet Rose Hrad Rock',
      description: ' Velvet Rose Hrad Rock is a delicate blend of fresh rose petals and warm vanilla, exuding an air of romance and elegance. The initial impression is one of timeless beauty, evoking images of blooming gardens and soft, loving gestures. As the fragrance settles, the rich vanilla adds a comforting warmth that envelops the senses, creating a harmonious balance between floral freshness and sweet coziness.This fragrance is perfect for special occasions or whenever you want to feel a touch of sophistication. Available in 125ml and 250ml sizes, it offers versatility for both everyday use and more significant moments. With a price of $52 and a substantial quantity of 160 in stock, Velvet Rose Hrad Rock is an accessible luxury that invites you to indulge in its enchanting embrace.',
      price: 52,
      available_sizes: [ '125ml', '250ml' ],
      quantity: 160,
      created_at: '2023-07-08T13:15:00Z',
      review: [],
      images: ['https://images.unsplash.com/photo-1637336698223-0d5f048b09ee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHBlcmZ1bWVzfGVufDB8fDB8fHww',
        ...imageArr
      ]
    },
    {
      name: 'Midnight Musk',
      description: 'Midnight Musk is a deep, mysterious fragrance that combines the sensuality of musk with the earthy richness of patchouli, making it ideal for evening wear. The scent opens with a captivating intensity that draws you into a world of intrigue and allure. The musk provides a smooth, velvety base, while the patchouli adds depth and complexity, creating a layered fragrance experience.This sophisticated blend is perfect for nights out or intimate gatherings, where its alluring scent can leave a lasting impression. Available in sizes ranging from 250ml to 750ml, Midnight Musk offers options for those who want to indulge in its mystery for longer periods. Priced at $80 and with a stock quantity of 110, it’s a premium choice for those who appreciate the darker, more enigmatic side of fragrance.',
      price: 80,
      available_sizes: [ '250ml', '400ml', '750ml' ],
      quantity: 110,
      created_at: '2024-02-28T21:45:00Z',
      review: [],
      images: ['https://images.unsplash.com/photo-1664198891866-8a35b73bb95f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBlcmZ1bWVzfGVufDB8fDB8fHww',
        ...imageArr]
    },
    {
      name: 'Lemon Verbena',
      description: ' Lemon Verbena is a bright and uplifting scent that combines the zestiness of lemon verbena with the subtle notes of green tea, making it ideal for daily wear. The initial burst of citrus is invigorating and refreshing, perfect for starting your day with a boost of energy. As it settles, the green tea adds a calming, soothing layer that balances the vibrancy of the lemon, resulting in a harmonious, well-rounded fragrance.This delightful blend is perfect for casual, everyday use, bringing a touch of sunshine to your daily routine. Available in 125ml and 250ml sizes, Lemon Verbena is priced at $38, making it an affordable yet luxurious addition to your fragrance collection. With a generous stock quantity of 190, it’s readily available for those who want to enjoy its fresh, uplifting aroma.',
      price: 38,
      available_sizes: [ '125ml', '250ml' ],
      quantity: 190,
      created_at: '2023-09-15T10:20:00Z',
      review: [],
      images: ['https://images.unsplash.com/photo-1724157073080-fcffb8d6c956?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHBlcmZ1bWVzfGVufDB8fDB8fHww',
        ...imageArr]
    },
    {
      name: 'Amber Sun',
      description: 'Amber Sun captures the essence of a warm, spicy sunset with its enchanting notes of amber and saffron. The fragrance opens with a rich, golden amber that instantly warms the senses, reminiscent of the fading light of day. The saffron adds a touch of exotic spice, enhancing the fragrances complexity and depth, creating a sensory journey that is both captivating and comforting.This fragrance is perfect for those who love the warmth and richness of amber and the unique twist that saffron brings. Available in 125ml, 250ml, and 400ml sizes, Amber Sun is priced at $72.5, offering a range of options for different preferences and needs. With a stock quantity of 105, it’s a luxurious choice that invites you to bask in its golden glow.',
      price: 72.5,
      available_sizes: [ '125ml', '250ml', '400ml' ],
      quantity: 105,
      created_at: '2023-11-05T16:00:00Z',
      review: [],
      images: ['https://images.unsplash.com/photo-1676139412671-00742a9920a8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHBlcmZ1bWVzfGVufDB8fDB8fHww',
        ...imageArr]
    },
    {
      name: 'Frosted Lavender',
      description: 'Frosted Lavender is a calming, floral aroma that combines the soothing properties of lavender with the gentle touch of chamomile. The fragrance opens with the relaxing scent of lavender, known for its calming effects on the mind and body. As it develops, the chamomile adds a subtle, floral sweetness that enhances the overall tranquility of the fragrance, making it perfect for both day and night use.This serene blend is ideal for unwinding after a long day or creating a peaceful atmosphere anytime you need it. Available in 125ml and 250ml sizes, Frosted Lavender is priced at $55, making it a moderately priced option for those seeking relaxation in a bottle. With a stock quantity of 140, it’s a readily available choice for anyone looking to bring a sense of calm into their lives.',
      price: 55,
      available_sizes: [ '125ml', '250ml' ],
      quantity: 140,
      created_at: '2024-03-14T09:00:00Z',
      review: [],
      images: ['https://images.unsplash.com/photo-1700665053090-e64274eeba84?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHBlcmZ1bWVzfGVufDB8fDB8fHww',
        ...imageArr]
    },
    {
      name: 'Exotic Oud',
      description: 'Exotic Oud is an intense, exotic scent that combines the richness of oud with the smoothness of sandalwood, designed for those who love bold and unique aromas. The fragrance opens with a powerful burst of oud, a highly prized ingredient known for its deep, woody scent. As it develops, the sandalwood adds a creamy, velvety layer that balances the intensity of the oud, creating a sophisticated and memorable fragrance experience.This bold blend is perfect for those special occasions when you want to make a statement with your scent. Available in 250ml, 400ml, and 750ml sizes, Exotic Oud is priced at $95, reflecting its premium quality and luxurious nature. With a stock quantity of 85, it’s a limited but highly coveted choice for fragrance enthusiasts who appreciate the allure of exotic scents',
      price: 95,
      available_sizes: [ '250ml', '400ml', '750ml' ],
      quantity: 85,
      created_at: '2023-10-25T20:30:00Z',
      review: [],
      images: ['https://images.unsplash.com/photo-1716978499366-d5a84bf1fe70?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHBlcmZ1bWVzfGVufDB8fDB8fHww',
        ...imageArr]
    },
    {
      name: 'Fresh Meadow',
      description: 'Fresh Meadow is a refreshing blend of green grass, white flowers, and citrus, designed to evoke the feeling of a spring morning. The fragrance opens with the crisp scent of green grass, instantly bringing to mind the freshness of a new day. The white flowers add a delicate floral note, while the citrus provides a zesty, invigorating touch, creating a balanced and uplifting aroma.This invigorating blend is perfect for those who love the natural, clean scents of the outdoors. Available in 125ml and 250ml sizes, Fresh Meadow is priced at $43, making it an accessible option for those looking to bring a touch of nature into their daily routine. With a stock quantity of 170, it’s a widely available choice for anyone who wants to enjoy the essence of a fresh spring morning',
      price: 43,
      available_sizes: [ '125ml', '250ml' ],
      quantity: 170,
      created_at: '2024-04-02T11:45:00Z',
      review: [],
      images: ['https://images.unsplash.com/photo-1673443143036-ef6eec48c595?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBlcmZ1bWVzfGVufDB8fDB8fHww',
        ...imageArr]
    },
    {
      name: 'Dark Forest',
      description: 'Dark Forest is a rich, earthy fragrance that combines the deep, woody scents of cedarwood and pine with the mossy undertones of a dense forest. The fragrance opens with the bold, aromatic notes of cedarwood, evoking the sense of a walk through an ancient woodland. As it settles, the pine adds a crisp, refreshing touch, while the moss provides a grounding, earthy base, creating a complex and immersive scent experience.This earthy blend is perfect for those who love the outdoors and want to bring the essence of a forest into their daily lives. Available in 125ml and 400ml sizes, Dark Forest is priced at $68.99, offering a premium yet accessible fragrance option. With a stock quantity of 130, it’s a substantial choice for anyone looking to immerse themselves in the rich, natural scents of the forest',
      price: 68.99,
      available_sizes: [ '125ml', '400ml' ],
      quantity: 130,
      created_at: '2024-06-12T15:20:00Z',
      review: [],
      images: ['https://images.unsplash.com/photo-1672060752214-33a3e7326177?q=80&w=1946&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',,
        ...imageArr]
    },
    {
      name: 'Spicy Citrus',
      description: 'Spicy Citrus is a zesty blend of orange, pepper, and cinnamon, designed to create an invigorating fragrance experience. The scent opens with a burst of fresh orange, providing an immediate hit of energy and zest. As it develops, the pepper adds a spicy kick, while the cinnamon brings a warm, sweet undertone, creating a dynamic and captivating aroma.This energizing blend is perfect for those who love bold, vibrant fragrances that make a statement. Available in 125ml and 250ml sizes, Spicy Citrus is priced at $49.99, making it a moderately priced option for those looking to add a bit of spice to their fragrance collection. With a stock quantity of 155, it’s a readily available choice for anyone who wants to enjoy the invigorating scent of citrus with a spicy twist',
      price: 49.99,
      available_sizes: [ '125ml', '250ml' ],
      quantity: 155,
      created_at: '2023-12-20T12:00:00Z',
      review: [],
      images: ['https://images.unsplash.com/photo-1673443143036-ef6eec48c595?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        ...imageArr]
    },
    {
      name: 'Silk Jasmine',
      description: 'Silk Jasmine is a light, delicate fragrance that combines the floral notes of jasmine with the creamy smoothness of musk. The scent opens with the gentle, sweet aroma of jasmine, creating a sense of elegance and grace. As it settles, the creamy musk adds a subtle, velvety layer that enhances the overall softness of the fragrance, making it perfect for everyday elegance.',
      price: 60,
      available_sizes: [ '125ml', '250ml', '400ml' ],
      quantity: 145,
      created_at: '2023-08-18T07:00:00Z',
      review: [],
      images: ['https://images.unsplash.com/photo-1672848700942-68b6a4550540?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyZnVtZXN8ZW58MHx8MHx8fDA%3D',
        ...imageArr]
    }
  ]