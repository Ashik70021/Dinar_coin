import digitalbank from "../../public/image/digitalbank.jpg"
const ImageBanner = () => {
    return (
        <div className="w-full border-t-2 border-[#f3b841] sm:h-[70vh] md:h-[80vh] lg:h-[80vh] overflow-hidden">
            <img
                src={digitalbank}
                alt="Banner"
                className="w-full h-full object-cover object-center"
            />
        </div>
    );
};

export default ImageBanner;