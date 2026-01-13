import { Link } from "react-router";
import Couch from "@/data/images/couch.png"
import {Button} from "@/components/ui/button.tsx";

function Home() {
    return (
        <>
            <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row lg: justify-between items-start">
                    {/*Text Section*/}
                    <div className="flex flex-col text-center lg:text-left mt-8 lg:mt-20 gap-4 lg:gap-6 lg:w-2/5">
                        <h1 className="text-4xl lg:text-6xl font-extrabold text-[#3b5d50]">Modern Interior Design Studio</h1>
                        <p className="text-[#3b5d50]">Furniture is an essential component of any living space, providing
                            functionality, comfort, and aesthetic appeal.
                        </p>
                        <div className="flex gap-2 items-center justify-center lg:justify-start">
                            <Button asChild className="px-6 py-6 rounded-full bg-orange-300 text-base font-bold">
                                <Link to="#">Shop Now</Link>
                            </Button>
                            <Button asChild variant="outline" className="text-[#3b5d50] px-6 py-6 rounded-full text-base font-bold">
                                <Link to="#">Explore</Link>
                            </Button>
                        </div>
                    </div>
                    {/*Image Section*/}
                    <img src={Couch} alt="Couch" className="w-full lg:w-3/5" />
                </div>
            </div>
        </>
    );
}

export default Home;
