const ImageBanner = () => {
    return (
        <div className="w-full h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-[100vh] overflow-hidden">
            <img
                src="../../public/image/dinarcoin.jpg"
                alt="Banner"
                className="w-full h-full object-cover object-center"
            />
        </div>
    );
};

export default ImageBanner;