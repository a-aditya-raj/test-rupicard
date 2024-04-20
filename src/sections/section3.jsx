import mobile from '../assets/images/app_screen_2.webp';
import mobile1 from '../assets/images/app_screen_1.webp';
import sbm from '../assets/images/download.svg';
import circle from '../assets/images/download-1.png';

import whatsapp from '../assets/images/whatsapp_bubble.webp';
import rupee from '../assets/images/rupee_bubble.webp';
import antivirus from '../assets/images/antivirus_bubble.webp';

export default function Section3() {
    return (
        <div id="__next" data-reactroot="">
            <section className="py-12 lg:py-[100px] bg-black py-8 relative">
                <img src={circle} alt="circles" className="absolute top-0 h-auto w-[70%]" />
                <div className="w-full max-w-7xl mx-auto px-6 md:px-4  md:flex relative py-6">
                    <div className="mx-auto w-full flex-[50%] flex-grow-0 my-auto">
                        <p className="text-[22px] font-medium text-white mb-4 md:text-[40px] leading-[1.2]">We’ve all heard of instant groceries, now say hello to
                            <span className="bg-gradient-to-r from-teal-500 to-yellow-500 text-transparent bg-clip-text">
                                <br /> instant credit.
                            </span>
                        </p>
                        <p className="text-[#BFC9CC] text-[14px] md:text-2xl">0% hassle, 100% paperless. Get your <br /> Uni Card instantly.</p>
                    </div>
                    <div className="m-auto w-full md:w-[450px] h-auto md:flex-[50%]"><img src={mobile1} alt="" loading="lazy" className="m-auto w-[80%] h-auto" /></div>
                </div>
                <div className="w-full max-w-7xl mx-auto px-6 md:px-4  md:flex relative py-6">
                    <div className="mx-auto w-full flex-[50%] flex-grow-0 my-auto">
                        <p className="text-[22px] font-medium text-white mb-4 md:text-[40px] leading-[1.2]">With Uni, <span className="bg-gradient-to-r from-teal-500 to-yellow-500 text-transparent bg-clip-text"><br />you’re always in control.</span>
                        </p>
                        <p className="text-[#BFC9CC] text-[14px] md:text-2xl">Set your own payment limits. Choose how and where you spend. Lock and unlock your card. All right from the app. </p>
                    </div>
                    <div className="m-auto w-full md:w-[450px] h-auto md:flex-[50%]"><img src={mobile} alt="" loading="lazy" className="m-auto w-[80%] h-auto" /></div>
                </div>
            </section>
            <section className="py-12 lg:py-[100px] bg-black">
                <div className="w-full max-w-7xl mx-auto px-6 md:px-4  md:flex md:justify-between">
                    <div className="flex false w-full items-center md:flex-col md:max-w-xs my-12 md:my-0">
                        <div className="flex-[50%] flex-shrink-0 flex w-full">
                            <div className="w-full h-36 relative"><img className="absolute md:relative md:left-auto md:-translate-x-0 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-20 md:w-28 h-auto mx-auto md:mx-0" src={whatsapp} alt="" /></div>
                        </div>
                        <div className="flex-[50%] flex flex-col">
                            <p className="font-medium text-base text-white leading-[18px] md:text-2xl">Help, just a WhatsApp away. Anytime, Anyday.</p>
                            <p className="text-sm text-gray-4 mt-2 md:text-lg"><span>During hectic work hours. On lazy sunday mornings. In the thick of
                                night. Anytime.</span>
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-row-reverse w-full items-center md:flex-col md:max-w-xs my-12 md:my-0">
                        <div className="flex-[50%] flex-shrink-0 flex w-full">
                            <div className="w-full h-36 relative"><img className="absolute md:relative md:left-auto md:-translate-x-0 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-20 md:w-28 h-auto mx-auto md:mx-0" src={rupee} alt="" /></div>
                        </div>
                        <div className="flex-[50%] flex flex-col">
                            <p className="font-medium text-base text-white leading-[18px] md:text-2xl"> No hidden charges, no last minute surprises.</p>
                            <p className="text-sm text-gray-4 mt-2 md:text-lg"><span>100% money back guarantee if a charge is applied without your
                                knowledge.</span>
                            </p>
                        </div>
                    </div>
                    <div className="flex false w-full items-center md:flex-col md:max-w-xs my-12 md:my-0">
                        <div className="flex-[50%] flex-shrink-0 flex w-full">
                            <div className="w-full h-36 relative"><img className="absolute md:relative md:left-auto md:-translate-x-0 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-20 md:w-28 h-auto mx-auto md:mx-0" src={antivirus} alt="" /></div>
                        </div>
                        <div className="flex-[50%] flex flex-col">
                            <p className="font-medium text-base text-white leading-[18px] md:text-2xl"> Super secure. Because we care about your money.</p>
                            <p className="text-sm text-gray-4 mt-2 md:text-lg"><span><img style={{marginTop: 24 + 'px'}} src="/images/pcidss_cert.svg" alt="PCI Logo" /></span></p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-12 lg:py-[100px] bg-[#222627] lg:py-[120px]">
                <div className="w-full max-w-7xl mx-auto px-6 md:px-4  md:flex md:flex-col text-left md:text-center">
                    <p className="mx-auto text-[28px] font-medium md:text-[40px] md:max-w-6xl text-white leading-[1.2]"><span>At Uni, we’re committed to <span className="bg-gradient-to-r from-teal-500 to-yellow-500 text-transparent bg-clip-text"> delivering an unmatched credit experience </span> for millions of Indians.</span></p>
                    <p className="mt-6 max-w-[500px] mx-auto text-[#BFC9CC] text-2xl">On this mission, we’ve partnered with some of the best in the business.</p>
                    <div className="md:mt-24 flex flex-row justify-center flex-wrap">
                        <div className="flex justify-center w-[100px] md:w-44 mt-10 md:mt-0 md:mx-8 mx-4"><img className="w-full h-full" src={sbm} alt="sbm bank" /></div>
                    </div>
                </div>
            </section>
            <div className="w-full bottom-0 z-40 fixed md:hidden py-8">
                <div className="w-[90vw] mx-auto md:mx-0 md:max-w-[280px] font-medium">
                    <div className="flex flex-col transition-all ease-in"><button className="p-4 rounded-lg z-10 flex justify-between items-center bg-[#FDEF78] text-black -mt-2 disabled:bg-[#AEAB8C]"><span>Apply now</span><img src="/images/right_arrow.svg" alt="right_arrow" width="21px" className="inline ml-3" /></button></div>
                </div>
            </div>
            <div style={{opacity: 1}}>
                <section className="hidden sm:block fixed bottom-0 w-screen bg-white py-5 z-10">
                    <div className="mx-auto max-w-7xl px-12 w-full flex justify-between">
                        <div className="flex justify-between items-center block w-full">
                            <div className="flex w-full flex-row justify-between items-center">
                                <form>
                                    <div className="flex bg-black p-1 pl-2 rounded-xl justify-between">
                                        <div className="flex items-center"><input className="bg-black border-0 outline-none text-white p-1 placeholder-[#7E8587] w-44" placeholder="Enter Phone Number" defaultValue="" onChange={() => { }} /><span className="w-6 flex items-center justify-end h-full"></span></div>
                                        <button type="submit" className="text-center text-sm leading-7 justify-between pt-2 ml-2 bg-[#FDEF78] rounded-xl z-10 py-2 px-4 disabled:opacity-80 disabled:cursor-not-allowed"><span>Apply Now</span></button>
                                    </div>
                                </form>
                                <div className="consent flex items-center py-4 px-2 max-w-xs"><input type="checkbox" id="consent-msg" defaultChecked={true} /><label for="consent-msg" className="consent text-white md:text-black text-[10px] leading-3 cursor-pointer">You agree to be contacted by Uni Cards over Call, SMS, Email or WhatsApp to guide you through your application.</label></div>
                            </div>
                        </div>
                        <div className="flex hidden w-full flex-row items-center justify-between">
                            <div className="w-full max-w-[300px]">
                                <a href="/" target="_blank" rel="noopener noreferrer" className="block google-btn-2 font-medium p-4 rounded-lg z-10 bg-[#FDEF78] text-black -mt-2 disabled:bg-[#AEAB8C]">
                                    <div className="w-full flex justify-center items-center"><span>Download</span></div>
                                </a>
                            </div>
                            <div className="my-2">
                                <p className="text-white md:text-black text-[10px] leading-3">Thank you for your interest in the Uni Card.<br /> Download the Uni Cards app now and get your Uni Card in minutes.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}