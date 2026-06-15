import { Link } from "react-router";
import { siteConfig } from "@/config/site.ts";
import { Icons } from "@/components/ui/icons";
import NewsLetterForm from "@/components/news-letter.tsx";

function Footer() {
  return (
    <footer className="w-full overflow-hidden border-t">
      <div className="container mx-auto justify-center py-6">
        <section className="md:0 mx-3 flex flex-col gap-10 md:flex-row lg:justify-between lg:gap-20">
          <section>
            <Link to="/" className="flex items-center gap-2">
              <Icons.logo className="size-7" aria-hidden="true" />
              <span className="font-bold">{siteConfig.name}</span>
              <span className="sr-only">Home</span>
            </Link>
          </section>
          <section className="grid grid-cols-2 gap-10 sm:grid-cols-4">
            {siteConfig.footerNav.map((foot) => (
              <div key={foot.title}>
                <h4 className="mb-3 font-medium">{foot.title}</h4>
                <ul className="flex flex-col gap-1">
                  {foot?.items?.map((item) => (
                    <li key={item.title}>
                      <Link
                        to={item.href}
                        className="text-muted-foreground hover:text-foreground text-sm"
                        target={item.external ? "_blank" : undefined}
                      >
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
            <h4 className="mb-3 font-medium">Subscribe to our newsletter</h4>
            <NewsLetterForm />
          </section>
        </section>
      </div>
    </footer>
  );
}

export default Footer;
