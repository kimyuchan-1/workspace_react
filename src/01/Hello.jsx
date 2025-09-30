import CurrentTime from "./CurrentTime";

function Hello() {
    let name = "김유찬";
    return (
        <>
        <div className = "m-2 p-2 text-center text-4xl font-bold text-blue-600">
            Hello React! {`${name}님 안녕하세요.`}
        </div>
        <CurrentTime />
        </>
    )
}

export default Hello;