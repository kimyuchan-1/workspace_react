export default function BoxOfficeTable({ rank, title, salesAmt, audiCnt, salesAcc, audiAcc, rankInten, rankOldAndNew, onHandle }) {
    
    let rankImg = rankInten >= 0 ? (rankInten == 0 ?"➖" : "📈"): "📉";
    let rankIn = rankInten == 0 ? (rankOldAndNew == "NEW" ? rankOldAndNew : "") : rankInten;
    
    return (

        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200
                        hover:cursor-pointer hover:bg-gray-50"
            onClick={onHandle}>
            <td className="p-4">
                {rank}
            </td>
            <td className="p-4 text-left">
                {title}
            </td>
            <td className="p-4 text-right">
                {parseInt(salesAmt).toLocaleString()}
            </td>
            <td className="p-4 text-right">
                {parseInt(audiCnt).toLocaleString()}
            </td>
            <td className="p-4 text-right">
                {parseInt(salesAcc).toLocaleString()}
            </td>
            <td className="p-4 text-right">
                {parseInt(audiAcc).toLocaleString()}
            </td>
            <td className="p-4 text-center">
                {rankImg}&nbsp;{rankIn}
            </td>
        </tr>

    )
}
