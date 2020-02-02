import filterSelectorStyles from '../../jss-styles/blog/filterSelector';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect } from 'react';

const FilterSelector = (props) => {
    const classes = filterSelectorStyles();

    const showFilterList = (e) => {
        let el = e.target;
        try {
            do {
                el = el.parentNode;
            } while(!el.querySelector('.filter-values'))
    
            el.querySelector('.filter-values').classList.toggle('show');
        } catch {
            console.log("Reached document root");
        }

    }



    const setFilter = (e) => {
        if (e.target.classList.contains('active')) {
            const filteredCp = props.filtered.filter(value => value != e.target.getAttribute('data-value'))
            props.setFilterValue([...filteredCp]);
        } else {
            props.setFilterValue([...props.filtered, e.target.getAttribute('data-value')]);
        }
        e.target.classList.toggle('active');
    }

    const clearFilters = () => {

    }

    const closeFilterList = () => {
        
    }

    useEffect(() => {
        
    });


    return (
        <div className={classes.wrapper}>
            <div className={classes.selector}>
                <div className={classes.filterNameWrapper} onClick={showFilterList.bind(this)}>
                    <h5 className={classes.filterName}>Filter by {props.data.name}</h5>
                    <span className={classes.arrowDown}><FontAwesomeIcon icon={faAngleDown}/></span>
                </div>
                <div className={`${classes.filtersBox} filter-values`}>
                    {props.data.values.map(value => {
                    return <div className={classes.filterValue} onClick={(e) => setFilter(e)} key={value.text} data-value={value.value}>{value.text}</div>
                    })}
                </div>
            </div>
        </div>
    );
};
export default FilterSelector;