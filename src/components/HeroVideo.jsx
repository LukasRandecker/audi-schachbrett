function HeroVideo({ videoSrc, alt = "Hero Video" }) {
    return (
        <section className="relative w-full h-[85vh] overflow-hidden">
            <video
                src={`${import.meta.env.BASE_URL}${videoSrc}`}
                alt={alt}
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
            />
        </section>
    );
}

export default HeroVideo;