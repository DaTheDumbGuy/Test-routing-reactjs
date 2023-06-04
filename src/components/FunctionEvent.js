export default function FunctionEvent() {
    const handleClick = () => {
        console.log("it works bro!");
    }
    return (
        <div>
            Functional Base handling Component
            <button type="button" onClick={handleClick}>Click Here</button>
        </div>
    )
}