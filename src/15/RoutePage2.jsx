import { useSearchParams } from "react-router-dom"

export default function RoutePage2() {
  const [sParams] = useSearchParams();
  const queryList = [...sParams];
  console.log(queryList);

  return (
    <div>
      RoutePage2{sParams.get("items1")}{sParams.get("items2")}
    </div>
  )
}
