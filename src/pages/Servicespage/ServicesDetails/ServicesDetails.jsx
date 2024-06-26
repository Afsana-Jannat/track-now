import Footer from "../../../Shared/Footer/Footer";
import Navbar from "../../../Shared/Navbar/Navbar";


const ServicesDetails = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => console.log(data)
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
                    <h2 className="text-center font-bold text-2xl mb-4">Booking Now</h2>
                    <div>
                        <div className="text-xl ml-4 p-6 text-black border font-semibold">
                            <h2 className="font-semibold text-gray-600 text-2xl mb-1">Pick your date & time for delivery</h2>
                            <p className="text-sm mb-2 text-gray-400">FASTEST COURIER SERVICES IN BANGLADESH</p>
                            <hr className="mb-2" />
                            <form className="text-gray-600">
                                <label>Name:</label><br />
                                <input type="text" {...register("name", { required: true })} className="h-10 mt-1 mb-3 bg-slate-100 w-full border text-sm
                        text-[#FA4318] p-2" name="to_name" /><br />
                                <label>Phone:</label> <br />
                                <input type="text" {...register("phone", { required: true })} className="h-10 mt-1 mb-3 bg-slate-100 w-full text-sm
                        text-[#FA4318] p-2" name="email_id" /><br />
                                <label>Delivery Date:</label> <br />
                                <input type="text"{...register("email", { required: true })} className="h-10 mt-1 mb-3 bg-slate-100 w-full text-sm
                        text-[#FA4318] p-2" name="email_id" /><br />
                                <input className="p-2  bg-[#FA4318] mt-4 mb-3  text-xl font-bold text-white" type="submit" value="Booking" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ServicesDetails;