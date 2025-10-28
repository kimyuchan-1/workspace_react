export default function TailCard({title, url, location, keyword}) {
    const keywordTags = keyword.map(item => {
        return <p className="p-1 m-1 rounded-md bg-gray-200 text-gray-700">{item}</p>
    });
    
    return (
        <div className="flex flex-col w-auto">
            <img src = {url} alt = {title} />
            <div className="p-3">
                <div className="font-bold text-gray-800">{title}</div>
                <div className="text-sm text-gray-500 pt-2">{location}</div>
                <div className="flex flex-wrap justify-start items-start mt-3">
                    {keywordTags}
                </div>
            </div>
        </div>
    )
}
