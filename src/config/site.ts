const links = {
    x : "https://www.twitter.com/sample",
    github : "https://github.com/sample/furniture",
    githubAccount: "https://github.com/sample",
    facebook : "https://www.facebook.com/sample",
    discord: "https:discord.com/sample",
}

export const siteConfig = {
    name: "Furniture Shop",
    description: "A Furniture Shop build with react router.",
    mainNav: [
        {
            title: "Products",
            card: [
                {
                    title: "Wooden",
                    href: "/products/wooden",
                    description: "comfortable with Wooden furniture.",
                },
                {
                    title: "Bamboo",
                    href: "/products/bamboo",
                    description: "Build your own Bamboo furniture.",
                },
                {
                    title: "Metal",
                    href: "/products/metal",
                    description: "Buy our latest metal furniture.",
                }
            ],
            menu: [
                {
                    title: "Services",
                    href: "services"
                },
                {
                    title: "Blog",
                    href: "blog"
                },
                {
                    title: "About Us",
                    href: "about"
                },

            ]
        }
    ],
    footerNav: [
        {
            title: "Furniture Types",
            items: [
                {
                    title: "Seating",
                    href: "/types/seating",
                    external: true,
                },
                {
                    title: "Lying",
                    href: "/types/lying",
                    external: true,
                },
                {
                    title: "Entertainment",
                    href: "/types/entertainment",
                    external: true,
                },
                {
                    title: "Tables",
                    href: "/types/tables",
                    external: true,
                },
                {
                    title: "Storage",
                    href: "/types/storage",
                    external: true,
                },
            ]
        },
        {
            title: "Help",
            items: [
                {
                    title: "About",
                    href: "/about",
                    external: true,
                },
                {
                    title: "Contact",
                    href: "/contact",
                    external: true,
                },
                {
                    title: "Terms",
                    href: "/terms",
                    external: true
                },
                {
                    title: "Privacy",
                    href: "/privacy",
                    external: true
                },

            ]
        },
        {
            title: "Social",
            items: [
                {
                    title: "X",
                    href: links.x,
                    external: true,
                },
                {
                    title: "GitHub",
                    href: links.githubAccount,
                    external: true,
                },
                {
                    title: "facebook",
                    href: links.facebook,
                    external: true,
                },
                {
                    title: "Discord",
                    href: links.discord,
                    external: true,
                },
            ]
        },
        {
            title: "Partner",
            items: [
                {
                    title: "Shoppe",
                    href: "https://www.shoppe.com/",
                    external: true,
                },
                {
                    title: "Poppy",
                    href: "https://www.poppy.com/",
                    external: true,
                },
                {
                    title: "Talkie",
                    href: "https://www.talkie.com/",
                    external: true,
                },
                {
                    title: "Coffee",
                    href: "https://www.coffee.com/",
                    external: true,
                },
            ]
        }
    ]

}