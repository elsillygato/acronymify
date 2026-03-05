function AcronymBox(props) {
    function generateAcronym(text) {
        return text.split(/(?<=[\s\-_/])/).map(word => word[0]).join('').toUpperCase()
    }
    function broThrewInAFunEmoji() {
        const emojis = ["9996", "129344", "129515", 0x1F979, 0x1FAAB, 0x1F38B]
        return emojis[Math.floor(Math.random()*emojis.length)]
    }
    return (
        <div id="AcronymBox">
            <h2>{generateAcronym(props.text) + " " + String.fromCodePoint(broThrewInAFunEmoji())}</h2>
        </div>
    )
}

export default AcronymBox;