import { Link } from "react-router";
import Couch from "@/data/images/couch.png"
import {Button} from "@/components/ui/button.tsx";

function Home() {
    return (
        <>
            <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row lg: justify-between items-center">
                    {/*Text Section*/}
                    <div className="flex flex-col text-center lg:text-left">
                        <h1>Modern Interior Design Studio</h1>
                        <p>Furniture is an essential component of any living space, providing
                            functionality, comfort, and aesthetic appeal.
                        </p>
                        <div>
                            <Button>
                                <Link to="#">Shop Now</Link>
                            </Button>
                            <Button>
                                <Link to="#">Explore</Link>
                            </Button>
                        </div>
                    </div>
                    {/*Image Section*/}
                    <img src={Couch} alt="Couch" className="" />
                </div>
            </div>
        </>
    );
}

export default Home;
