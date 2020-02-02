import searchBarStyles from '../../jss-styles/blog/searchBar';


const SearchBar = (props) => {
    const classes = searchBarStyles();
    return (
        <div className={classes.wrapper}>
            <input type="text" placeholder={props.content.placeholder}></input>
        </div>
    );
};
export default SearchBar;