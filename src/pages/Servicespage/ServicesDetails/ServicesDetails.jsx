import Footer from "../../../Shared/Footer/Footer";
import Navbar from "../../../Shared/Navbar/Navbar";


const ServicesDetails = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="hero h-[400px]" style={{ backgroundImage: 'url(https://shipexpert.com/wp-content/uploads/2020/05/courier-delivery-signing-package-bg-1200x539.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-white">
                    <div>
                        <h2 className="font-bold text-3xl">SERVICES DETAILS</h2>
                    </div>
                </div>
            </div>
            <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-3 mt-12 max-w-4xl mx-auto">

                <div className="col-span-2">
                    <div>
                        <img src="https://www.wowtheme7.com/tf/transpro/assets/img/service/7.png" alt="" />
                        <h2 className="mt-8 font-bold text-2xl">SEA TRANSPORTATION</h2>
                        <p className="text-xs text-gray-600 mt-6">Globally optimize highly efficient solution whereas open-source application. Completely strategize quality internal or "organic" sources for virtual e-business. Phosfluorescently re-engineer enterprise markets via value-added networks. Seamlessly restore inexpensive e-markets vis-a-vis corporate intellectual capital. Holisticly reinvent compelling niche markets via scalable strategic.

                            Authoritatively scale business meta-services before client-based technologies. Collaboratively strategize synergistic scenarios rather than flexible action items. Continually deliver market positioning convergence and mission-critical infrastructures.</p>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mt-8">
                        <div>
                            <img src="https://www.wowtheme7.com/tf/transpro/assets/img/service/8.png" alt="" />
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold mt-2 mb-2">Global Transaction Advisory</h2>
                            <hr />
                            <p className="mt-4 text-sm text-gray-600">Customer engagement matters <br />
                                The Love Boat promis someg for Plan <br />
                                Research beyond the business plan <br />
                                Logistics ground in Asia Pacific <br />
                                Logistics ground in South America <br />
                                Transportation across Europe</p>
                        </div>
                    </div>
                    <h2 className="mt-8 text-3xl font-bold mb-4">How It Works</h2>
                    <hr />
                    <p className="text-sm text-gray-600 mt-6 mb-6">Holisticly conceptualize go forward customer service rather than transparent infomediaries. Continually envisioneer 2.0 potentialities without team building processes. Dramatically pursue client-centric human capital before client-centered sources.
                    </p>
                </div>

                <div>
                    <div className="w-full">
                        <button
                            className="bg-white border border-2xl py-3 px-8
                             text-sm text-gray-600 "
                        >
                            Search
                        </button>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ServicesDetails;