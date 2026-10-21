// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = 'As Told By Marcy Blog';
export const SITE_DESCRIPTION = 'Welcome to my website!';
export const socialLinks =[{class:'twitter', icon:'bi bi-twitter-x', href:import.meta.env.BASE_URL+'/#'}, {class:'facebook', icon:'bi bi-facebook', href:import.meta.env.BASE_URL+'/#'}, {class:'instagram', icon:'bi bi-instagram', href:import.meta.env.BASE_URL+'/#'}, {class:'linkedin', icon:'bi bi-linkedin', href:import.meta.env.BASE_URL+'/#'},]

//Template things
export const featured = [
  {
    img: import.meta.env.BASE_URL+'/src/assets/img/post-slide-',
    href: import.meta.env.BASE_URL+'/single-post',
    title: 'The Best Homemade Masks for Face (keep the Pimples Away)',
    content:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem neque est mollitia! Beatae minima assumenda repellat harum vero, officiis ipsam magnam obcaecati cumque maxime inventore repudiandae quidem necessitatibus rem atque.'
  },
  {
    img: import.meta.env.BASE_URL+'/src/assets/img/post-slide-',
    href: import.meta.env.BASE_URL+'/single-post',
    title: '17 Pictures of Medium Length Hair in Layers That Will Inspire Your New Haircut',
    content:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem neque est mollitia! Beatae minima assumenda repellat harum vero, officiis ipsam magnam obcaecati cumque maxime inventore repudiandae quidem necessitatibus rem atque.'
  },
  {
    img: import.meta.env.BASE_URL+'/src/assets/img/post-slide-',
    href: import.meta.env.BASE_URL+'/single-post',
    title: '13 Amazing Poems from Shel Silverstein with Valuable Life Lessons',
    content:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem neque est mollitia! Beatae minima assumenda repellat harum vero, officiis ipsam magnam obcaecati cumque maxime inventore repudiandae quidem necessitatibus rem atque.'
  },
  {
    img: import.meta.env.BASE_URL+'/src/assets/img/post-slide-',
    href: import.meta.env.BASE_URL+'/single-post',
    title: '9 Half-up/half-down Hairstyles for Long and Medium Hair',
    content:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem neque est mollitia! Beatae minima assumenda repellat harum vero, officiis ipsam magnam obcaecati cumque maxime inventore repudiandae quidem necessitatibus rem atque.'
  },
    ]

export const trend = [
    {
      id: 1,
      href: import.meta.env.BASE_URL+'/single-post',
      img: import.meta.env.BASE_URL+'/src/assets/img/post-landscape-1.jpg',
      title: '11 Work From Home Part-Time Jobs You Can Do Now',
      preview: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero temporibus repudiandae, inventore pariatur numquam cumque possimus exercitationem? Nihil tempore odit ab minus eveniet praesentium, similique blanditiis molestiae ut saepe perspiciatis officia nemo, eos quae cumque. Accusamus fugiat architecto rerum animi atque eveniet, quo, praesentium dignissimos',
      cate: 'Culture',
      date: "Jul 5th '22",
  },
  {
      id: 2,  
      href: import.meta.env.BASE_URL+'/single-post',
      img: import.meta.env.BASE_URL+'/src/assets/img/post-landscape-2.jpg',
      title: 'Let’s Get Back to Work, New York',
      preview: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero temporibus repudiandae, inventore pariatur numquam cumque possimus exercitationem? Nihil tempore odit ab minus eveniet praesentium, similique blanditiis molestiae ut saepe perspiciatis officia nemo, eos quae cumque. Accusamus fugiat architecto rerum animi atque eveniet, quo, praesentium dignissimos',
      cate: 'Sport',
      date: "Jul 5th '22",
  },
  {
      id: 3,  
      href: import.meta.env.BASE_URL+'/single-post',
      img: import.meta.env.BASE_URL+'/src/assets/img/post-landscape-5.jpg',
      title: 'How to Avoid Distraction and Stay Focused During Video Calls?',
      preview: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero temporibus repudiandae, inventore pariatur numquam cumque possimus exercitationem? Nihil tempore odit ab minus eveniet praesentium, similique blanditiis molestiae ut saepe perspiciatis officia nemo, eos quae cumque. Accusamus fugiat architecto rerum animi atque eveniet, quo, praesentium dignissimos',
      cate: 'Food',
      date: "Jul 17th '22",
  },
  {
      id: 4,  
      href: import.meta.env.BASE_URL+'/single-post',
      img: import.meta.env.BASE_URL+'/src/assets/img/post-landscape-7.jpg',
      title: 'Why Craigslist Tampa Is One of The Most Interesting Places On the Web?',
      preview: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero temporibus repudiandae, inventore pariatur numquam cumque possimus exercitationem? Nihil tempore odit ab minus eveniet praesentium, similique blanditiis molestiae ut saepe perspiciatis officia nemo, eos quae cumque. Accusamus fugiat architecto rerum animi atque eveniet, quo, praesentium dignissimos',
      cate: 'Design',
      date: "Mar 15th '22",
  },
  {
      id: 5,  
      href: import.meta.env.BASE_URL+'/single-post',
      img: import.meta.env.BASE_URL+'/src/assets/img/post-landscape-3.jpg',
      title: '6 Easy Steps To Create Your Own Cute Merch For Instagram',
      preview: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero temporibus repudiandae, inventore pariatur numquam cumque possimus exercitationem? Nihil tempore odit ab minus eveniet praesentium, similique blanditiis molestiae ut saepe perspiciatis officia nemo, eos quae cumque. Accusamus fugiat architecto rerum animi atque eveniet, quo, praesentium dignissimos',
      cate: 'Business',
      date: "Jul 5th '22",
  },
  {
      id: 6,  
      href: import.meta.env.BASE_URL+'/single-post',
      img: import.meta.env.BASE_URL+'/src/assets/img/post-landscape-6.jpg',
      title: '10 Life-Changing Hacks Every Working Mom Should Know',
      preview: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero temporibus repudiandae, inventore pariatur numquam cumque possimus exercitationem? Nihil tempore odit ab minus eveniet praesentium, similique blanditiis molestiae ut saepe perspiciatis officia nemo, eos quae cumque. Accusamus fugiat architecto rerum animi atque eveniet, quo, praesentium dignissimos',
      cate: 'Tech',
      date: "Mar 1st '22",
  },
  {
      id: 7,  
      href: import.meta.env.BASE_URL+'/single-post',
      img: import.meta.env.BASE_URL+'/src/assets/img/post-landscape-8.jpg',
      title: '5 Great Startup Tips for Female Founders',
      preview: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero temporibus repudiandae, inventore pariatur numquam cumque possimus exercitationem? Nihil tempore odit ab minus eveniet praesentium, similique blanditiis molestiae ut saepe perspiciatis officia nemo, eos quae cumque. Accusamus fugiat architecto rerum animi atque eveniet, quo, praesentium dignissimos',
      cate: 'Travel',
      date: "Jul 5th '22",
  },
  {
      id: 8,  
      href: import.meta.env.BASE_URL+'/single-post',
      img: import.meta.env.BASE_URL+'/src/assets/img/post-landscape-8.jpg',
      title: 'The Best Homemade Masks for Face (keep the Pimples Away)',
      preview: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero temporibus repudiandae, inventore pariatur numquam cumque possimus exercitationem? Nihil tempore odit ab minus eveniet praesentium, similique blanditiis molestiae ut saepe perspiciatis officia nemo, eos quae cumque. Accusamus fugiat architecto rerum animi atque eveniet, quo, praesentium dignissimos',
      cate: 'Travel',
      date: "Jul 5th '22",
  },
  {
      id: 9,  
      href: import.meta.env.BASE_URL+'/single-post',
      img: import.meta.env.BASE_URL+'/src/assets/img/post-landscape-8.jpg',
      title: '17 Pictures of Medium Length Hair in Layers That Will Inspire Your New Haircut',
      preview: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero temporibus repudiandae, inventore pariatur numquam cumque possimus exercitationem? Nihil tempore odit ab minus eveniet praesentium, similique blanditiis molestiae ut saepe perspiciatis officia nemo, eos quae cumque. Accusamus fugiat architecto rerum animi atque eveniet, quo, praesentium dignissimos',
      cate: 'Travel',
      date: "Jul 5th '22",
  },
  {
      id: 10,  
      href: import.meta.env.BASE_URL+'/single-post',
      img: import.meta.env.BASE_URL+'/src/assets/img/post-landscape-8.jpg',
      title: '13 Amazing Poems from Shel Silverstein with Valuable Life Lessons',
      preview: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero temporibus repudiandae, inventore pariatur numquam cumque possimus exercitationem? Nihil tempore odit ab minus eveniet praesentium, similique blanditiis molestiae ut saepe perspiciatis officia nemo, eos quae cumque. Accusamus fugiat architecto rerum animi atque eveniet, quo, praesentium dignissimos',
      cate: 'Travel',
      date: "Jul 5th '22",
  },
  {
      id: 11,  
      href: import.meta.env.BASE_URL+'/single-post',
      img: import.meta.env.BASE_URL+'/src/assets/img/post-landscape-8.jpg',
      title: '9 Half-up/half-down Hairstyles for Long and Medium Hair',
      preview: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero temporibus repudiandae, inventore pariatur numquam cumque possimus exercitationem? Nihil tempore odit ab minus eveniet praesentium, similique blanditiis molestiae ut saepe perspiciatis officia nemo, eos quae cumque. Accusamus fugiat architecto rerum animi atque eveniet, quo, praesentium dignissimos',
      cate: 'Travel',
      date: "Jul 5th '22",
  },
  {
      id: 12,  
      href: import.meta.env.BASE_URL+'/single-post',
      img: import.meta.env.BASE_URL+'/src/assets/img/post-landscape-8.jpg',
      title: 'Life Insurance And Pregnancy: A Working Mom’s Guide',
      preview: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero temporibus repudiandae, inventore pariatur numquam cumque possimus exercitationem? Nihil tempore odit ab minus eveniet praesentium, similique blanditiis molestiae ut saepe perspiciatis officia nemo, eos quae cumque. Accusamus fugiat architecto rerum animi atque eveniet, quo, praesentium dignissimos',
      cate: 'Travel',
      date: "Jul 5th '22",
  },
  ]

  export const culture = [
    {
      id: 1,
      href: import.meta.env.BASE_URL+'/single-post',
      img: import.meta.env.BASE_URL+'/src/assets/img/post-landscape-6.jpg',
      title: 'What is the son of Football Coach John Gruden, Deuce Gruden doing Now?',
      preview: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero temporibus repudiandae, inventore pariatur numquam cumque possimus exercitationem? Nihil tempore odit ab minus eveniet praesentium, similique blanditiis molestiae ut saepe perspiciatis officia nemo, eos quae cumque. Accusamus fugiat architecto rerum animi atque eveniet, quo, praesentium dignissimos',
      cate: 'Culture',
      date: "Jul 5th '22",
  },
  {
      id: 2,
      href: import.meta.env.BASE_URL+'/single-post',
      img: import.meta.env.BASE_URL+'/src/assets/img/post-landscape-1.jpg',
      title: '11 Work From Home Part-Time Jobs You Can Do Now',
      preview: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero temporibus repudiandae, inventore pariatur numquam cumque possimus exercitationem? Nihil tempore odit ab minus eveniet praesentium, similique blanditiis molestiae ut saepe perspiciatis officia nemo, eos quae cumque. Accusamus fugiat architecto rerum animi atque eveniet, quo, praesentium dignissimos',
      cate: 'Culture',
      date: "Jul 5th '22",
  },
  {
      id: 3,
      href: import.meta.env.BASE_URL+'/single-post',
      img: import.meta.env.BASE_URL+'/src/assets/img/post-landscape-6.jpg',
      title: '5 Great Startup Tips for Female Founders',
      preview: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero temporibus repudiandae, inventore pariatur numquam cumque possimus exercitationem? Nihil tempore odit ab minus eveniet praesentium, similique blanditiis molestiae ut saepe perspiciatis officia nemo, eos quae cumque. Accusamus fugiat architecto rerum animi atque eveniet, quo, praesentium dignissimos',
      cate: 'Culture',
      date: "Jul 5th '22",
  },
  {
      id: 4,
      href: import.meta.env.BASE_URL+'/single-post',
      img: import.meta.env.BASE_URL+'/src/assets/img/post-landscape-2.jpg',
      title: 'How to Avoid Distraction and Stay Focused During Video Calls?',
      preview: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero temporibus repudiandae, inventore pariatur numquam cumque possimus exercitationem? Nihil tempore odit ab minus eveniet praesentium, similique blanditiis molestiae ut saepe perspiciatis officia nemo, eos quae cumque. Accusamus fugiat architecto rerum animi atque eveniet, quo, praesentium dignissimos',
      cate: 'Culture',
      date: "Jul 5th '22",
  },
  {
      id: 5,
      href: import.meta.env.BASE_URL+'/single-post',
      img: import.meta.env.BASE_URL+'/src/assets/img/post-landscape-6.jpg',
      title: 'How to Avoid Distraction and Stay Focused During Video Calls?',
      preview: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero temporibus repudiandae, inventore pariatur numquam cumque possimus exercitationem? Nihil tempore odit ab minus eveniet praesentium, similique blanditiis molestiae ut saepe perspiciatis officia nemo, eos quae cumque. Accusamus fugiat architecto rerum animi atque eveniet, quo, praesentium dignissimos',
      cate: 'Culture',
      date: "Jul 5th '22",
  },
  {
      id: 6,
      href: import.meta.env.BASE_URL+'/single-post',
      img: import.meta.env.BASE_URL+'/src/assets/img/post-landscape-6.jpg',
      title: '17 Pictures of Medium Length Hair in Layers That Will Inspire Your New Haircut',
      preview: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero temporibus repudiandae, inventore pariatur numquam cumque possimus exercitationem? Nihil tempore odit ab minus eveniet praesentium, similique blanditiis molestiae ut saepe perspiciatis officia nemo, eos quae cumque. Accusamus fugiat architecto rerum animi atque eveniet, quo, praesentium dignissimos',
      cate: 'Culture',
      date: "Jul 5th '22",
  },
  {
      id: 7,
      href: import.meta.env.BASE_URL+'/single-post',
      img: import.meta.env.BASE_URL+'/src/assets/img/post-landscape-6.jpg',
      title: '9 Half-up/half-down Hairstyles for Long and Medium Hair',
      preview: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero temporibus repudiandae, inventore pariatur numquam cumque possimus exercitationem? Nihil tempore odit ab minus eveniet praesentium, similique blanditiis molestiae ut saepe perspiciatis officia nemo, eos quae cumque. Accusamus fugiat architecto rerum animi atque eveniet, quo, praesentium dignissimos',
      cate: 'Culture',
      date: "Jul 5th '22",
  },
  {
      id: 8,
      href: import.meta.env.BASE_URL+'/single-post',
      img: import.meta.env.BASE_URL+'/src/assets/img/post-landscape-6.jpg',
      title: 'Life Insurance And Pregnancy: A Working Mom’s Guide',
      preview: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero temporibus repudiandae, inventore pariatur numquam cumque possimus exercitationem? Nihil tempore odit ab minus eveniet praesentium, similique blanditiis molestiae ut saepe perspiciatis officia nemo, eos quae cumque. Accusamus fugiat architecto rerum animi atque eveniet, quo, praesentium dignissimos',
      cate: 'Culture',
      date: "Jul 5th '22",
  },
  {
      id: 9,
      href: import.meta.env.BASE_URL+'/single-post',
      img: import.meta.env.BASE_URL+'/src/assets/img/post-landscape-6.jpg',
      title: 'The Best Homemade Masks for Face (keep the Pimples Away)',
      preview: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero temporibus repudiandae, inventore pariatur numquam cumque possimus exercitationem? Nihil tempore odit ab minus eveniet praesentium, similique blanditiis molestiae ut saepe perspiciatis officia nemo, eos quae cumque. Accusamus fugiat architecto rerum animi atque eveniet, quo, praesentium dignissimos',
      cate: 'Culture',
      date: "Jul 5th '22",
  },
  {
      id: 10,
      href: import.meta.env.BASE_URL+'/single-post',
      img: import.meta.env.BASE_URL+'/src/assets/img/post-landscape-6.jpg',
      title: '10 Life-Changing Hacks Every Working Mom Should Know',
      preview: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero temporibus repudiandae, inventore pariatur numquam cumque possimus exercitationem? Nihil tempore odit ab minus eveniet praesentium, similique blanditiis molestiae ut saepe perspiciatis officia nemo, eos quae cumque. Accusamus fugiat architecto rerum animi atque eveniet, quo, praesentium dignissimos',
      cate: 'Culture',
      date: "Jul 5th '22",
  },
]

  export const fashion = [{}]

  export const lifestyle = [{}]