import img1 from '../../../assets/images/banner/1.jpg'
import img2 from '../../../assets/images/banner/2.jpg'
import img3 from '../../../assets/images/banner/3.jpg'
import img4 from '../../../assets/images/banner/4.jpg'
import img5 from '../../../assets/images/banner/5.jpg'
import img6 from '../../../assets/images/banner/6.jpg'

const Banner = () => {
    return (
        <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={img1} className="w-full rounded-xl" />
                <div className="absolute rounded-xl flex right-5 items-center pl-12 left-0 top-0 mb-5 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] h-full">
                    <div className='space-y-7 text-white w-1/2 '>
                        <h2 className='text-6xl font-bold'>Affordable Price For Car Serving</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ad facere dolor asperiores nemo sequi! Dolorem sunt minima laborum totam?</p>
                        <div>
                            <button className="btn btn-primary rounded-md mr-5">Discover More</button>
                            <button className="btn btn-outline btn-secondary rounded-md">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end left-5 right-5 bottom-0 mb-5">
                    <a href="#slide4" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={img2} className="w-full rounded-xl" />
                <div className="absolute rounded-xl flex right-5 items-center pl-12 left-0 top-0 mb-5 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] h-full">
                    <div className='space-y-7 text-white w-1/2 '>
                        <h2 className='text-6xl font-bold'>Affordable Price For Car Serving</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ad facere dolor asperiores nemo sequi! Dolorem sunt minima laborum totam?</p>
                        <div>
                            <button className="btn btn-primary rounded-md mr-5">Discover More</button>
                            <button className="btn btn-outline btn-secondary rounded-md">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end left-5 right-5 bottom-0 mb-5">
                    <a href="#slide1" className="btn btn-circle  mr-5">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={img3} className="w-full rounded-xl" />
                <div className="absolute rounded-xl flex right-5 items-center pl-12 left-0 top-0 mb-5 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] h-full">
                    <div className='space-y-7 text-white w-1/2 '>
                        <h2 className='text-6xl font-bold'>Affordable Price For Car Serving</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ad facere dolor asperiores nemo sequi! Dolorem sunt minima laborum totam?</p>
                        <div>
                            <button className="btn btn-primary rounded-md mr-5">Discover More</button>
                            <button className="btn btn-outline btn-secondary rounded-md">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end left-5 right-5 bottom-0 mb-5">
                    <a href="#slide2" className="btn btn-circle  mr-5">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={img4} className="w-full rounded-xl" />
                <div className="absolute rounded-xl flex right-5 items-center pl-12 left-0 top-0 mb-5 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] h-full">
                    <div className='space-y-7 text-white w-1/2 '>
                        <h2 className='text-6xl font-bold'>Affordable Price For Car Serving</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ad facere dolor asperiores nemo sequi! Dolorem sunt minima laborum totam?</p>
                        <div>
                            <button className="btn btn-primary rounded-md mr-5">Discover More</button>
                            <button className="btn btn-outline btn-secondary rounded-md">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end left-5 right-5 bottom-0 mb-5">
                    <a href="#slide3" className="btn btn-circle  mr-5">❮</a>
                    <a href="#slide5" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide5" className="carousel-item relative w-full">
                <img src={img5} className="w-full rounded-xl" />
                <div className="absolute rounded-xl flex right-5 items-center pl-12 left-0 top-0 mb-5 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] h-full">
                    <div className='space-y-7 text-white w-1/2 '>
                        <h2 className='text-6xl font-bold'>Affordable Price For Car Serving</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ad facere dolor asperiores nemo sequi! Dolorem sunt minima laborum totam?</p>
                        <div>
                            <button className="btn btn-primary rounded-md mr-5">Discover More</button>
                            <button className="btn btn-outline btn-secondary rounded-md">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end left-5 right-5 bottom-0 mb-5">
                    <a href="#slide4" className="btn btn-circle  mr-5">❮</a>
                    <a href="#slide6" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide6" className="carousel-item relative w-full">
                <img src={img6} className="w-full rounded-xl" />
                <div className="absolute rounded-xl flex right-5 items-center pl-12 left-0 top-0 mb-5 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] h-full">
                    <div className='space-y-7 text-white w-1/2 '>
                        <h2 className='text-6xl font-bold'>Affordable Price For Car Serving</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ad facere dolor asperiores nemo sequi! Dolorem sunt minima laborum totam?</p>
                        <div>
                            <button className="btn btn-primary rounded-md mr-5">Discover More</button>
                            <button className="btn btn-outline btn-secondary rounded-md">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end left-5 right-5 bottom-0 mb-5">
                    <a href="#slide5" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;