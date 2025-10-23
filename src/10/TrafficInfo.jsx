export default function TrafficInfo({ nAcc, nDeath, nSerious, nInjured, nReported, road }) {
    return (
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
            <td className="p-4 text-center">
                {road}
            </td>
            <td className="p-4 text-center">
                {parseInt(nAcc).toLocaleString()}
            </td>
            <td className="p-4 text-center">
                {parseInt(nDeath).toLocaleString()}
            </td>
            <td className="p-4 text-center">
                {parseInt(nSerious).toLocaleString()}
            </td>
            <td className="p-4 text-center">
                {parseInt(nInjured).toLocaleString()}
            </td>
            <td className="p-4 text-center">
                {parseInt(nReported).toLocaleString()}
            </td>
        </tr>
    )
}
