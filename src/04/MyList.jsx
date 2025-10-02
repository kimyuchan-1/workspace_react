import MyListCard from "./MyListCard"
import MyListData from "./MyListData.json"

export default function MyList() {
    const tags = MyListData.map(item => <MyListCard 
                                         title={item.title}
                                         imgurl ={item.imgUrl} 
                                         content={item.content}
                                         key={item.title}/>); //map함수로 동적으로 생성된 태그를 react가 제어하기 위해 key가 필요

    return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {tags}
    </div>
    )
}
