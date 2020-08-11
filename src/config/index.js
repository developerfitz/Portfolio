module.exports = {

    author: "@deverloperfitz",
    siteTitle: "Developer Fitz",
    siteShortTitle: "Fitz", // Used as logo text in header, footer, and splash screen
    siteDescription: "A modern one-page portfolio with a clean yet expressive design.",
    siteUrl: "https://developerfitz.com/",
    siteLanguage: "en_US",
    siteIcon: "src/content/favicon.png", // Relative to gatsby-config file

    splashScreen: false, // Set this to true if you want to use the splash screen

    // You can create your own Medium feed with this rss to json converter: https://rss2json.com/
    // To access your Medium RSS feed, just replace this url with your username: https://medium.com/feed/@{yourname}

    // use gatsby-source-graphql or gatsby-source-github-repo
    // https://www.gatsbyjs.org/packages/gatsby-source-graphql/?=gatsby-source
    githubRepos: "",
    mediumRssFeed: "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40konstantin.muenster",
    shownArticles: 3,
    
    // There are icons available for the following platforms: 
    // Medium, GitHub, LinkedIn, XING, Behance
    socialMedia: [
        {
            name: 'Resume',
            url: '/resume'
        }
        // {
        //     name: "Github",
        //     url: "https://github.com/developerfitz"
        // },
        // {
        //     name: "Linkedin",
        //     url: ""
        // },
        // {
        //     name: "Dev.to",
        //     url: ""
        // },
        // {
        //     name: "Codepen",
        //     url: ""
        // },
    ],
  
    navLinks: {
        menu: [
            {
                name: "Projects",
                url: "/projects",
            },
            {
                name: "Skills",
                url: "/skills",
            },
            {
                name: "Hire",
                url: "/hire",
            },
            {
                name: "About",
                url: "/about"
            }
        ],
        button: {
            name: "Resume",
            url: "/resume",
        }
    },

    footerLinks: [
        {
            name: "Privacy",
            url: "/privacy"
        },
        {
            name: "Imprint",
            url: "/imprint"
        }
    ]
}