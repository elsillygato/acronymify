function MarkdownArea(props) {
    function generateMarkdown(text) {
        const wordList = text.split(/(?<=[\s\-_/])/).filter(word => word.length > 0)
        if (text.length === 0 || wordList.length === 0) {
            return ""
        } else {
            return wordList.map(word => `**${word[0].toUpperCase()}**${word.slice(1)}`).join(" ")
        }
    }
    return (
        <textarea id="MarkdownArea" value={generateMarkdown(props.text)} readOnly />
    )
}

export default MarkdownArea;