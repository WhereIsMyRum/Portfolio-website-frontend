import filterSelectorStyles from '../../jss-styles/blog/filterSelector';
import { faAngleDown, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect } from 'react';

const FilterSelector = (props) => {
    const classes = filterSelectorStyles();

    const toggleFilterList = (e, action) => {
        let el = e.target;
        while (!el.querySelector('.filter-values') && el) {
            el = el.parentNode;
        }

        if (action === "enter") {
            if (!el.querySelector('.filter-values').classList.contains('show')) {
                el.querySelector('.filter-values').classList.add('show');
            }
        } else {
            if (el.querySelector('.filter-values').classList.contains('show')) {
                if (e.relatedTarget.classList && !e.relatedTarget.classList.contains('selectable')) {
                    el.querySelector('.filter-values').classList.remove('show');
                }
            }
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

    const clearSingleFilter = (e) => {
        let clicked = e.target.getAttribute('data-value');
        if (!clicked) {
            clicked = e.target.parentNode.getAttribute('data-value');
        }

        let el = e.target;
        while (!el.querySelector('.filter-values') && el) {
            el = el.parentNode;
        }
        el = el.querySelector('.filter-values').querySelectorAll(`[data-value="${clicked}"]`)[0];

        setFilter({target: el});
    }

    const clearFilters = () => {

    }

    useEffect(() => {
        
    });


    return (
        <div className={classes.wrapper} >
            <div className={classes.selector}>
                <div className={`${classes.filterNameWrapper}`} onMouseEnter={(e) => toggleFilterList(e, "enter")} onMouseLeave={(e) => toggleFilterList(e, "leave")}>
                    <h5 className={classes.filterName}>Filter by {props.data.name}</h5>
                    <span className={classes.arrowDown}><FontAwesomeIcon icon={faAngleDown}/></span>
                </div>
                <div className={`${classes.filtersBox} filter-values`} >
                    {Object.keys(props.data.values).map((key, index) => {
                    return <div className={`${classes.filterValue} selectable`} onMouseLeave={e => toggleFilterList(e, "leave")} onClick={(e) => setFilter(e)} key={key} data-value={key}>{props.data.values[key]}</div>
                    })}
                </div>
                <div className={classes.activeFilters}>
                    {props.filtered.map(filter => {
                        return <div key={filter} className={classes.filterElementWrapper}>
                                    <div className={`${classes.leftRounded} ${classes.roundedEdges}`}></div>
                                    <div className={classes.filterElement} data-value={filter}>{props.data.values[filter]}</div>
                                    <div className={`${classes.rightRounded} ${classes.roundedEdges}`}>
                                        <FontAwesomeIcon icon={faTimes} data-value={filter} onClick={(e) => {clearSingleFilter(e)}}/>
                                    </div>
                               </div>
                    })}
                </div>
            </div>
        </div>
    );
};
export default FilterSelector;