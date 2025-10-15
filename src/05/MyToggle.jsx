import MyToggleBox from "./MyToggleBox";
import Colors from "./Colors.json";

export default function MyToggle() {
    const tags = Colors.map(item => <MyToggleBox 
                                         color={item.color}
                                         caption={item.caption}
                                         key={item.color}/>);
    
    return (
        <div className='w-full h-full flex flex-col justify-center items-center'>
            <div className="w-8/10 grid 
                            grid-cols-1 
                            md:grid-cols-2 
                            lg:grid-cols-3 gap-3">
                {tags}
            </div>
        </div>
    )
}
