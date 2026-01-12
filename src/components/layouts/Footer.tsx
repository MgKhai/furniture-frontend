import { Link } from "react-router";
import { siteConfig } from "@/config/site.ts";
import { Icons } from "@/components/ui/icons";
import NewsLetterForm from "@/components/news-letter.tsx";

function Footer() {
    return (
        <footer className="w-full border-t overflow-hidden">
            <div className="container  justify-center mx-auto py-6  ">
                <section className="flex flex-col md:flex-row lg:justify-between gap-10 lg:gap-20 mx-3 md:0">
                    <section>
                        <Link to="/" className="flex items-center gap-2 ">
                            <Icons.logo className="size-7" aria-hidden="true" />
                            <span className="font-bold">{siteConfig.name}</span>
                            <span className="sr-only">Home</span>
                        </Link>
                    </section>
                    <section className="grid grid-cols-2 sm:grid-cols-4 gap-10">
                        {siteConfig.footerNav.map((foot) => (
                            <div>
                                <h4 className="font-medium mb-3">
                                    {foot.title}
                                </h4>
                                <ul className="flex flex-col gap-1">
                                    {foot?.items?.map((item) => (
                                        <li>
                                            <Link to={item.href} className="text-muted-foreground text-sm hover:text-foreground" target={item.external ? "_blank" : undefined}>
                                                {item.title}
                                                <span className="sr-only">{item.title}</span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </section>
                    <section className="w-full md:w-80 lg:w-60">
                        <h4 className="font-medium mb-3">
                            Subscribe to our newsletter
                        </h4>
                        <NewsLetterForm />
                    </section>
                </section>
            </div>
        </footer>);
}

export default Footer;