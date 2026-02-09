function Greeting() {
    return (
        <>
            <h1>Hello, Welcome to React!</h1>
            <p style={{ color: "red"}}>The current date is {new Date().toLocaleDateString()}</p>
        </>
    )
}

export default Greeting;