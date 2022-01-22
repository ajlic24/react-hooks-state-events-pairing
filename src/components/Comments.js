function Comments({data}) {

    const iterateComments = data.comments.map(comment => {
        return (
            <>
                <h4>{comment.user}</h4>
                <p>{comment.comment} </p>
            </>
        )
    })
    
    return (
        <div>
            <h2>{data.comments.length} Comments</h2>
            {iterateComments}
        </div>

    )
        
}

export default Comments