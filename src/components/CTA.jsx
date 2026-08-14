function CTA({CatItem}) {
    return (
    <section className="py-20 px-6 md:px-22">
        <div>
            <h2 className="font-audi-ext text-3xl md:text-4xl lg:text-5xl text-white mb-6">
            {CatItem.headline}
            </h2>
            
            <p className="font-audi text-gray-400 text-lg mb-10">
            {CatItem.description}
            </p>

            <div className="flex flex-wrap gap-4">
            <button onClick={CatItem.primaryAction} className="btn-primary-body">{CatItem.primaryText}</button>
            <button onClick={CatItem.secondaryAction} className="btn-secondary-body">{CatItem.secondaryText}</button>
            </div>
        </div>
    </section>
    );
}

export default CTA;