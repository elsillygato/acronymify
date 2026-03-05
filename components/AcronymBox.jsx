function AcronymBox(props) {
    function generateAcronym(text) {
        return text.split(/\W+/).map(word => word[0]).join('').toUpperCase()
    }
    return (
        <div id="AcronymBox">
            <h2>{generateAcronym(props.text)}</h2>
        </div>
    )
}

export default AcronymBox;