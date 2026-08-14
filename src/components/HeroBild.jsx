function HeroBild({ image, alt = "Hero Bild" }) {
    return (
        <section className="relative w-full h-full overflow-hidden">
            <img
                src={`${import.meta.env.BASE_URL}${image}`}
                alt={alt}
                className="w-full h-full object-cover object-center"
            />
        </section>
    );
}

export default HeroBild;