export const projectsData = {
  sectionTitle: "Featured Projects",
  sectionDescription:
    "Some of the projects I've worked on, showcasing my full-stack skills",
  work: [
    {
      id: 1,
      title: "Digital Ecosystem Platform",
  description:
    "Digital platform with authentication, resource management, and dynamic educational content, built with React, TypeScript and Tailwind CSS.",
    image: "https://i.postimg.cc/cHjDJTyn/Captura-de-pantalla-2026-06-12-112745.png", // O usa una captura de pantalla de tu sitiogallery: [],
      category: "Frontend Application",
      details:
    "Digital Ecosystem is a comprehensive platform that I developed to provide users with access to cutting-edge digital tools, a connected community of innovators, and dynamic content including courses and workshops. The platform features a modern authentication system, responsive design, and a focus on digital transformation. Built with React, TypeScript, and Tailwind CSS, it offers a seamless user experience across all devices. Key features include user authentication, resource access management, community forums, and regularly updated educational content.",
     github: "https://github.com/daga3005/digital-ecosystem",
      live: "https://digital-ecosystem.vercel.app/",
      tech: [
        { name: "Next.js", icon: "skill-icons:nextjs-dark" },
        { name: "TypeScript", icon: "logos:typescript-icon" },
        { name: "Tailwind CSS", icon: "logos:tailwindcss-icon" },
        { name: "Node.js", icon: "logos:nodejs-icon" },
      ],
    },
    {
      id: 2,
      title: "World Explorer",
      description:
        "Explore information about all countries in the world using the REST Countries API.",
      image: "https://i.postimg.cc/j56s09wc/Captura-de-pantalla-2026-06-12-150034.png",
      gallery: [],
      category: "Frontend Application",
      details:
        "Professional application built with React, TypeScript, and Tailwind CSS that allows you to explore detailed information about all countries worldwide. Features search functionality, filtering by region, and dark mode support. Data fetched from the REST Countries API with responsive design for all devices.",
     github: "https://github.com/daga3005/World-Explorer", // Ajusta con tu repo real
      live: "", 
      tech: [
        { name: "React", icon: "logos:react" },
        { name: "TypeScript", icon: "logos:typescript-icon" },
        { name: "Tailwind CSS", icon: "logos:tailwindcss-icon" },
        { name: "REST API", icon: "lucide:plug" },
      ],
    },
    {
  id: 3,
  title: "Ventatto Tattoo Studio",
  description:
    "Professional website for a tattoo studio featuring portfolio gallery, client testimonials, and service showcase.",
  image: "https://i.postimg.cc/L6FT0JHd/Captura-de-pantalla-2026-06-12-112354.png",
  gallery: [
  ],
  category: "Freelance Project",
  details:
    "Professional website for a tattoo studio featuring an interactive gallery organized by technique (Realism, Lettering, Blackwork), client testimonials section, and studio statistics. Responsive design built with React and Tailwind CSS.",
  github: "https://github.com/daga3005/ventatto", 
  live: "https://ventatto-daga.vercel.app/",
  tech: [
    { name: "Next.js", icon: "skill-icons:nextjs-dark" },
    { name: "Tailwind CSS", icon: "logos:tailwindcss-icon" },
    { name: "Vercel", icon: "simple-icons:vercel" },
  ],
},
{
      id: 5,
      title: "Books REST API",
      description:
        "REST API with JWT authentication and cookie-based session management for book management.",
      image: "https://i.postimg.cc/rmsvgPGt/restimages.jpg",
      gallery: [],
      category: "Backend API",
      details:
        "A REST API built with Node.js and Express that implements JWT authentication and cookie-based session management. Uses PostgreSQL as the database and EJS as the template engine. Features include user registration, login with JWT tokens stored in cookies, and CRUD operations for books.",
      github: "https://github.com/daga3005/books-rest-api",
      live: "",
      tech: [
        { name: "Node.js", icon: "logos:nodejs-icon" },
        { name: "Express.js", icon: "logos:express" },
        { name: "PostgreSQL", icon: "logos:postgresql" },
        { name: "JWT", icon: "simple-icons:jsonwebtokens" },
      ],
    },
    {
      id: 6,
      title: "FAST FOOD REST API",
      description:
        "RESTful API for fast food management with JWT authentication and MySQL database.",
      image: "https://i.postimg.cc/3RqzqF92/whatis-rest-api.png",
      gallery: [],
      category: "Backend API",
      details:
        "RESTful API for FAST FOOD management built with Node.js and Express that implements JWT authentication and cookie-based session management. Uses MySQL as the database. Features include user authentication, order management, product catalog, and admin controls.",
      github: "https://github.com/daga3005/fastfood-rest-api",
      live: "",
      tech: [
        { name: "Node.js", icon: "logos:nodejs-icon" },
        { name: "Express.js", icon: "logos:express" },
        { name: "MySQL", icon: "logos:mysql-icon" },
        { name: "JWT", icon: "simple-icons:jsonwebtokens" },
      ],
    },
      ],
};