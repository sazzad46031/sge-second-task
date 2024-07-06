
import { useRef } from 'react';
import './Accordion.css'



const Accordion = () => {
    const accordion = useRef(null);

    const handleClick = (evt) => {
        accordion.current.querySelectorAll('input').forEach(input => {
            if (input !== evt.target) input.checked = false;
        });
    }


    return (
        <div className='max-w-[1147px] mx-auto py-96' ref={accordion}>
            <div className='flex'>
                <div className='w-[25%]'>
                    <div className="poppins-semibold text-[28px] pl-4">United Kingdom</div>
                    <div className="collapse collapse-arrow bg-base-200">
                        <input type="checkbox" name="my-accordion-2" onClick={(e) => { handleClick(e) }} />
                        <div className="collapse-title text-lg poppins-medium">London (Head Office)</div>
                        <div className="collapse-content">
                            <p>1st Floor,94A Whitechapel High Street,London E1 7RA,United Kingdom.</p>
                        </div>
                    </div>
                </div>
                <div className='w-[25%]'>
                    <div className="poppins-semibold text-[28px] pl-4">Bangladesh</div>
                    <div className="collapse collapse-arrow bg-base-200">
                        <input type="checkbox" name="my-accordion-2" onClick={(e) => { handleClick(e) }} />
                        <div className="collapse-title text-lg poppins-medium">Dhaka (South Aisan Regional Head Office)</div>
                        <div className="collapse-content">
                            <p>Nagar Lutfun Homes,House No 11,Road No 17,Block D,Banani,Dhaka.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow bg-base-200">
                        <input type="checkbox" name="my-accordion-2" onClick={(e) => { handleClick(e) }} />
                        <div className="collapse-title text-lg poppins-medium">Chattogram</div>
                        <div className="collapse-content">
                            <p>R.I. Tower(level 3),23/A MM Ali Road,Golpahar moor,Chattogram.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow bg-base-200">
                        <input type="checkbox" name="my-accordion-2" onClick={(e) => { handleClick(e) }} />
                        <div className="collapse-title text-lg poppins-medium">Sylhet</div>
                        <div className="collapse-content">
                            <p>3rd Floor,Symphony Heights,Baruth Khana,East Zindabazar,Sylhet.</p>
                        </div>
                    </div>
                </div>
                <div className='w-[16%]'>
                    <div className="poppins-semibold text-[28px] pl-4">India</div>
                    <div className="collapse collapse-arrow bg-base-200">
                        <input type="checkbox" name="my-accordion-2" onClick={(e) => { handleClick(e) }} />
                        <div className="collapse-title text-lg poppins-medium">Kochin</div>
                        <div className="collapse-content">
                            <p>Shabuj Global Kochin,<br></br>
                                Door Number: 303,<br></br>
                                3rd Floor,Cityscape,<br></br>
                                South Kalamasery,<br></br>
                                Kochi-Kerala,682033
                            </p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow bg-base-200">
                        <input type="checkbox" name="my-accordion-2" onClick={(e) => { handleClick(e) }} />
                        <div className="collapse-title text-lg poppins-medium">Kannur</div>
                        <div className="collapse-content">
                            <p>R.I. Tower(level 3),23/A MM Ali Road,Golpahar moor,Chattogram.</p>
                        </div>
                    </div>
                </div>
                <div className='w-[16%]'>
                    <div className="poppins-semibold text-[28px] pl-4">Nigeria</div>
                    <div className="collapse collapse-arrow bg-base-200">
                        <input type="checkbox" name="my-accordion-2" onClick={(e) => { handleClick(e) }} />
                        <div className="collapse-title text-lg poppins-medium">Abuja</div>
                        <div className="collapse-content">
                            <p>No. 9 Senangal<br></br>
                                Crescent, Wuse Zone<br></br>
                                5,Abuja,Nigeria.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow bg-base-200">
                        <input type="checkbox" name="my-accordion-2" onClick={(e) => { handleClick(e) }} />
                        <div className="collapse-title text-lg poppins-medium">Lagos</div>
                        <div className="collapse-content">
                            <p>57,Bode Thomas<br></br>
                                Street,Surulere.</p>
                        </div>
                    </div>
                </div>
                <div className='w-[18%]'>
                    <div className="poppins-semibold text-[28px] pl-4">Middle East</div>
                    <div className="collapse collapse-arrow bg-base-200">
                        <input type="checkbox" name="my-accordion-2" disabled />
                        <div className="collapse-title text-lg poppins-medium">Saudi Arabia</div>
                        <div className="collapse-content">
                            <p></p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow bg-base-200">
                        <input type="checkbox" name="my-accordion-2" disabled/>
                        <div className="collapse-title text-lg poppins-medium">UAE</div>
                        <div className="collapse-content">
                            <p></p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow bg-base-200">
                        <input type="checkbox" name="my-accordion-2" disabled />
                        <div className="collapse-title text-lg poppins-medium">Qatar</div>
                        <div className="collapse-content">
                            <p></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Accordion;