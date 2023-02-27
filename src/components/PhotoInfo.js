function PhotoInfo({ item }) {
    return (
        <div className="photo-info absolute bottom-0 text-left  bg-slate-800/[.35] p-2 w-full rounded-b-xl">
            <h2 className='font-extrabold mb-1 drop-shadow-lg'>{item.name}</h2>

            <div className="font-light drop-shadow-lg">
                <p> Height: {item.appearance.height[1]}</p>
                <p> Weight: {item.appearance.weight[1]}</p>
            </div>
        </div>
    )
}

export default PhotoInfo;
