import Footer from "../../Shared/Footer/Footer";
import Navbar from "../../Shared/Navbar/Navbar";


const Contact = () => {
    return (
        <div>
            <Navbar></Navbar>
            <img className="lg:h-[350px] w-full" src="https://cdnsalksa.blob.core.windows.net/cmsstorage/sal/media/images/news/tracking-(2).jpg" alt="" />
            <div className="grid mb-10 grid-cols-2 mt-10 max-w-4xl mx-auto">
                <div>

                    <div className="text-xl ml-4 p-6 text-black border font-semibold">
                        <h2 className="text-center font-bold text-2xl mb-2">GET A QUOTE</h2>
                        <hr className="mb-2" />
                        <form>
                            <label>Name</label><br />
                            <input type="text" className="h-10 mt-1 mb-3 bg-slate-100 w-full border text-sm
                        text-[#FA4318] p-2" name="to_name" /><br />
                            <label>Email</label> <br />
                            <input type="email" className="h-10 mt-1 mb-3 bg-slate-100 w-full text-sm
                        text-[#FA4318] p-2" name="email_id" /><br />
                            <label>Message</label> <br />
                            <textarea name="message" className="mt-2 text-[#FA4318] bg-slate-100 p-2 w-full" /> <br />
                            <input className="p-2  bg-[#FA4318] mt-4 mb-3  text-xl font-bold text-white" type="submit" value="Send" />
                        </form>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Contact;