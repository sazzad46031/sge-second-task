import './Contact.css'

const Contact = () => {
    const text = "DREAM BIG STUDY ABROAD.";
    const Letter = text.split("");

    return (
        <div className='bg-[#E7E7E7] pt-[98px] pb-[59px] overflow-hidden'>
            <div className='text-center'>
                <h2 className='poppins-bold lg:text-[38px] text-[28px] text-[#081831] leading-[130%] -tracking-[0.02em] pb-[39px]'>It’s Time to Start Your Journey With Us</h2>
                <p className='mulish-regular text-[16px] text-[#1F1F1F] leading-[150%] pb-[18px]'>Book Your <span className='bg-[#88F3D0] rounded-sm px-1 font-medium py-1'>FREE</span> Consultation with Certified Counsellors</p>
            </div>
            <div className='text-center max-w-screen-xl lg:mx-auto mx-5'>
                <form>
                    <input type="text" placeholder='Name' className='bg-white rounded lg:w-[565px] w-[288px] lg:h-[40px] h-[45px] pl-[12px] inter-regular text-[12px] leading-[12px] outline-none block mx-auto mb-[10px]' />
                    <div className='relative text-center mb-[10px]'>
                        <input type="text" placeholder='Email' className=' bg-white rounded lg:w-[565px] w-[288px] lg:h-[40px] h-[45px] pl-[12px] inter-regular text-[12px] leading-[12px] outline-none' />
                        <span className='absolute flex items-center right-0 top-3 lg:w-[390px] w-[115px] inter-regular text-[12px] text-[#8E8E8E]'>.com</span>
                    </div>
                    <input type="text" placeholder='+880' className='lg:w-[74px] w-[41px] lg:h-[40px] h-[45px] rounded inter-regular text-[12px] leading-[12px] lg:pl-4 pl-[5px]' />
                    <input type="text" placeholder='Mobile Number' className='bg-white rounded lg:w-[465px] w-[234px] lg:h-[40px] h-[45px] lg:pl-[12px] pl-[5px] inter-regular text-[12px] leading-[12px] outline-none mx-auto mb-[10px] lg:ml-[26px] ml-[14px]' />
                    <div className='relative mb-[10px]'>
                        <select id='subcategory' name='destination' className='px-3 py-2 lg:w-[565px] w-[290px] outline-none inter-regular text-[12px] text-[#4B4B4B] appearance-none cursor-pointer'>
                            <option value defaultChecked>Preferred Study Destination</option>
                            <option value="UK">UK</option>
                            <option value="USA">USA</option>
                            <option value="Australia">Australia</option>
                        </select>
                        <div className='absolute flex items-center right-0 top-2 lg:w-[380px] w-[95px] pointer-events-none'>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className='text-xl text-[#8E8E8E]' xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M7.99997 10.3904L2.47137 4.86182L1.52856 5.80463L7.99997 12.276L14.4714 5.80463L13.5286 4.86182L7.99997 10.3904Z" fill="#8E8E8E" />
                            </svg>
                        </div>
                    </div>
                    <div className='relative mb-[10px]'>
                        <select id='subcategory' name='year' className='px-3 py-2 lg:w-[565px] w-[290px] outline-none inter-regular text-[12px] text-[#4B4B4B] appearance-none cursor-pointer'>
                            <option value defaultChecked>Preferred Study Year</option>
                            <option value="2022">2022</option>
                            <option value="2023">2023</option>
                            <option value="2024">2024</option>
                        </select>
                        <div className='absolute flex items-center right-0 top-2 lg:w-[380px] w-[95px] pointer-events-none'>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className='text-xl text-[#8E8E8E]' xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M7.99997 10.3904L2.47137 4.86182L1.52856 5.80463L7.99997 12.276L14.4714 5.80463L13.5286 4.86182L7.99997 10.3904Z" fill="#8E8E8E" />
                            </svg>
                        </div>
                    </div>
                    <div className='relative mb-[10px]'>
                        <select id='subcategory' name='subject' className='px-3 py-2 lg:w-[565px] w-[290px] outline-none inter-regular text-[12px] text-[#4B4B4B] appearance-none cursor-pointer'>
                            <option value defaultChecked>Preferred Study Intake</option>
                            <option value="Physics">Physics</option>
                            <option value="Chemistry">Chemistry</option>
                            <option value="Mathematics">Mathematics</option>
                        </select>
                        <div className='absolute flex items-center right-0 top-2 lg:w-[380px] w-[95px] pointer-events-none'>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className='text-xl text-[#8E8E8E]' xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M7.99997 10.3904L2.47137 4.86182L1.52856 5.80463L7.99997 12.276L14.4714 5.80463L13.5286 4.86182L7.99997 10.3904Z" fill="#8E8E8E" />
                            </svg>
                        </div>
                    </div>
                    <div className='flex items-center space-x-3 lg:max-w-[565px] max-w-[290px] lg:mx-auto ml-24'>
                        <input type="checkbox" />
                        <p className='poppins-regular text-[12px] leading-[22px]'>By clicking you agree to our <span className='text-[#008AFF] cursor-pointer'>Privacy Policy</span> and <span className='text-[#008AFF] cursor-pointer'>Terms & Conditions</span> *</p>
                    </div>
                    <div className='pt-[55px]'>
                        <button className='lg:poppnis-bold mulish-regular lg:text-[18px] text-[14px] lg:px-[81px] lg:py-[22px] px-[17px] py-2 bg-[#2563EB] text-white rounded-[32px]'>Book Free Counselling</button>
                    </div>
                </form>
            </div>
            <div className='lg:block hidden'>
                <div className="App">
                    <section>
                        {Letter.map((item, index) => {
                            return (
                                <span
                                    key={index}
                                    className="letters"
                                    style={{
                                        transform: `rotate(${index * 15.5}deg)`
                                    }}
                                >
                                    {item}
                                </span>
                            );
                        })}
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Contact;