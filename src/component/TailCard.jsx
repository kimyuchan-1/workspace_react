export default function TailCard({title, url, location, keyword}) {
    
    
    return (
        <div className="flex flex-col">
            <img src = {url} alt = {title}/>
            <div>
                <div>{title}</div>
                <div>{location}</div>
                <div>
                    
                </div>
            </div>
        </div>
    )
}
