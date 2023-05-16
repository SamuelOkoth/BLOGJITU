const Blog = ({title, content}) => {
    return(
        <div className="blog">
            <h3 className="blog__title">{title}</h3>
            <p className="blog__content">{content}</p>
        </div>
    )
}
export default Blog;