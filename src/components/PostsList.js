import classes from './PostsList.module.css';

const PostsList = (props) => {
    console.log(props.data)

    return (
        <div className={classes.cart}>
            {props.data.map((element) => (
                <div className={classes.list} key={element.id}>
                    <h1 className={classes.title}>{element.title}</h1>
                    <h2 className={classes['post-id']}>{element.id}</h2>
                    <img src={element.img}  />
                </div>
            ))}
        </div>
    )
}

export default PostsList;