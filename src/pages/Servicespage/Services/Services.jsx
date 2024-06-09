import Footer from "../../../Shared/Footer/Footer";
import Navbar from "../../../Shared/Navbar/Navbar";
import Happyclients from "../Happyclients/Happyclients";

const Services = () => {

    function Card({ title, description, src }) {
        return <div className="card card-compact bg-base-100 shadow-xl hover:bg-[#FA4318] hover:text-[#ffff] duration-300">
            <figure><img src={src} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p className="text-xs">{description}
                </p>
                <hr />
                <div className="card-actions">
                    <button className="text-[#efef61]">Read More</button>
                </div>
            </div>
        </div>
    }


    return (
        <div>
            <Navbar></Navbar>
            <div className="hero h-[400px]" style={{ backgroundImage: 'url(https://shipexpert.com/wp-content/uploads/2020/05/courier-delivery-signing-package-bg-1200x539.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-white">
                    <div>
                        <h2 className="font-bold text-3xl">SERVICES</h2>
                    </div>
                </div>
            </div>
            <div className="max-w-4xl mx-auto">
                <div>
                    <h2 className="text-center text-3xl font-bold mt-12">OuR SERVICE FOR YOU</h2>
                    <p className="text-xs text-gray-700 text-center mt-2 mb-6">Quickly optimize cooperative models for long-term high-impact ROI. Dynamically drive innovative e-commerce and distributed paradigms.</p>
                </div>

                <div className="grid grid-cols-3 gap-4">
                    <Card src={"https://www.wowtheme7.com/tf/transpro/assets/img/service/1.png"}
                        title={"SEA TRANSPORTATION"}
                        description={"Intrinsicly exploit e-business imperative with emerging human capital."}>
                    </Card>
                    <Card src={"https://www.wowtheme7.com/tf/transpro/assets/img/service/2.png"}
                        title={"AIR TRANSPORTATION"}
                        description={"Intrinsicly exploit e-business imperative with emerging human capital."}></Card>
                    <Card src={"https://www.wowtheme7.com/tf/transpro/assets/img/service/3.png"}
                        title={"WAREHOUSING"}
                        description={"Intrinsicly exploit e-business imperative with emerging human capital."}></Card>
                    <Card src={"https://www.wowtheme7.com/tf/transpro/assets/img/service/4.png"}
                        title={"ROAD TRANSPORTATION"}
                        description={"Intrinsicly exploit e-business imperative with emerging human capital."}>
                    </Card>
                    <Card src={"https://www.wowtheme7.com/tf/transpro/assets/img/service/5.png"}
                        title={"TRAIN TRANSPORTATION"}
                        description={"Intrinsicly exploit e-business imperative with emerging human capital."}></Card>
                    <Card src={"https://www.wowtheme7.com/tf/transpro/assets/img/service/6.png"}
                        title={"LAND TRANSPORTATION"}
                        description={"Intrinsicly exploit e-business imperative with emerging human capital."}></Card>
                </div>
            </div>
            <div className="lg:flex mt-12">
                <img className="h-[35%] w-[70%]" src="https://www.wowtheme7.com/tf/transpro/assets/img/contact/1.png" alt="" />
                <div className=" w-[25%] -ml-6 flex items-end">
                    <img className="h-[50%]" src="https://bd-info.com/wp-content/uploads/2023/03/Bangladesh-Emergency-Number-1.jpg" alt="" />
                </div>
            </div>
            <Happyclients></Happyclients>
            <Footer></Footer>
        </div>
    );
};

export default Services;