import Comments from "./Comments"
import {useState} from 'react'

function Buttons({data, data: {upvotes, downvotes, comments}}) {
    const [upvote, setUpvote] = useState(upvotes)
    const [downvote, setDownvote] = useState(downvotes)
    const [isVisible, setIsVisible] = useState(true)


    function handleUpvoteClick() {
        setUpvote(upvote + 1)
    }

    function handleDownvoteClick() {
        setDownvote(downvote + 1)
    }

    function handleCommentButton() {
        setIsVisible(!isVisible)
    }

    return (
        <>
            <button name="like" onClick={handleUpvoteClick} > {upvote} 👍</button>
            <button name="dislike" onClick={handleDownvoteClick} > {downvote} 👎</button>
            <br/>
            <br/>
            <button name="comments" onClick={handleCommentButton} >{isVisible ? 'Hide Comments' : 'Show Comments'}</button>
            <hr/>
            {isVisible ? <Comments data={data} /> : null}
            
        </>
    )
}

export default Buttons