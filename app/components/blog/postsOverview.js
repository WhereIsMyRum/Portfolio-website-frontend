import postsOverviewStyles from '../../jss-styles/blog/postsOverview';
import { useState, useEffect } from 'react';

import PostThumbnail from  './postThumbnail';
import SearchBar from './searchBar';
import FilterSelector from './filterSelector';

const PostsOverview = (props) => {
    const classes = postsOverviewStyles();
    const [blogPosts, setBlogPosts] = useState([]);
    const [categoryFilter, setCategoryFilter] = useState([]);
    const [monthFilter, setMonthFilter] = useState([]);
    const [yearFilter, setYearFilter] = useState([]);

    useEffect(() => {
        if (categoryFilter.length === 0 && monthFilter.length === 0 && yearFilter.length === 0) {
            setBlogPosts(props.data);
        } else {
            filter();
        }
    }, [categoryFilter, monthFilter, yearFilter])

    const filter = () => {
        setBlogPosts(props.data
                    .filter(filterByMonth)
                    .filter(filterByYear)
                    .filter(filterByCategory));

    }

    const filterByMonth = post => {
        const d = new Date(post.created);
        if (monthFilter.length === 0) return post;
        if (monthFilter.includes(String(d.getMonth()))) {
            return post;
        }
    }

    const filterByYear = post => {
        const d = new Date(post.created);
        if (yearFilter.length === 0) return post;
        if (yearFilter.includes(String(d.getFullYear()))) {
            return post;
        }
    }

    const filterByCategory = post => {
        if (categoryFilter.length === 0 ) return post;
        if (categoryFilter.includes(post.category.toLowerCase())) {
            return post;
        }
    }

    const clearFilters = () => {
        setCategoryFilter([]); setMonthFilter([]); setYearFilter([]);
    }

    return (
        <div className={classes.wrapper}>
            <div className={classes.rightColumn}>
                <SearchBar content={props.content.search} />
                <FilterSelector setFilterValue={setCategoryFilter} filtered={categoryFilter} data={props.content.filters.category}/>
                <FilterSelector setFilterValue={setMonthFilter} filtered={monthFilter} fullBlogPostsList={props.data} setBlogPosts={setBlogPosts} blogPosts={blogPosts} data={props.content.filters.month}/>
                <FilterSelector setFilterValue={setYearFilter} filtered={yearFilter} fullBlogPostsList={props.data} setBlogPosts={setBlogPosts} blogPosts={blogPosts} data={props.content.filters.year}/>
                <div className={classes.buttonWrapper}>
                    <button className={classes.clearButton} onClick={clearFilters}>Clear filters</button>
                </div>
            </div>
            <div className={classes.postsWrapper}>
                {blogPosts.map(post => {
                    return <PostThumbnail data={post} key={post._id} />
                })}
            </div>
        </div>
    );
};
export default PostsOverview;