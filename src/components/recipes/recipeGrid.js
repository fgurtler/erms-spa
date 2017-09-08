import React from 'react'
import ReactDataGrid from 'react-data-grid';
import TextFilter from '../gridFilters/TextFilter'
import NumericFilter from '../gridFilters/NumericFilter'
import { Filters, Data } from 'react-data-grid-addons';
import { Link } from 'react-router-dom'
import {connect} from 'react-redux';
import * as gridActions from '../../actions/gridActions';

class EmptyToolbar extends React.Component {
    componentDidMount() { this.props.onToggleFilter() }
    render() { return (<div></div>) }
}


// Custom Formatter component
class LinkCell extends React.Component {
    render() {
        return (
            <Link to={"/recipes/" + this.props.value}>{this.props.value}</Link>
        );
    }
}

class RecipeGrid extends React.Component {

    constructor(props) {
        super(props);
        this._columns = [
            {
                key: 'id',
                name: 'ID',
                sortable: true,
                filterable: true,
                filterRenderer: TextFilter,
                resizable: true,
                formatter: LinkCell,
            },
            {
                key: 'name',
                name: 'Recipe',
                sortable: true,
                filterable: true,
                filterRenderer: TextFilter,
                resizable: true,
            },
            {
                key: 'yield',
                name: 'Yield',
                sortable: true,
                filterable: true,
                filterRenderer: NumericFilter,
                resizable: true,
            },
            {
                key: 'calories',
                name: 'Calories per serving',
                sortable: true,
                filterable: true,
                filterRenderer: NumericFilter,
                resizable: true,
            }, /*
            {
                key: 'unrs_group',
                name: 'Subgroup',
                sortable: true,
                width: 80
            }, */
            {
                key: 'weekly_serving',
                name: 'Meal type',
                sortable: true,
                filterable: true,
                filterRenderer: Filters.SingleSelectFilter,
                resizable: true,
            },
            {
                key: 'sub_meal_type_id',
                name: 'Serving Type',
                sortable: true,
                filterable: true,
                filterRenderer: Filters.SingleSelectFilter,
                resizable: true,
            },
            {
                key: 'rel_req_id',
                name: 'Religious Requirement',
                sortable: true,
                filterable: true,
                filterRenderer: Filters.SingleSelectFilter,
                resizable: true,
            },   
             {
                key: 'dietary_req_id',
                name: 'Dietary Restriction',
                sortable: true,
                filterable: true,
                filterRenderer: Filters.SingleSelectFilter,
                resizable: true,
            },
            {
                key: 'status',
                name: 'Status',
                sortable: true,
                filterable: true,
                filterRenderer: Filters.SingleSelectFilter,
                resizable: true,
            },
        ]
        this.rowGetter = this.rowGetter.bind(this);
        this.handleGridSort = this.handleGridSort.bind(this);
        this.handleFilterChange = this.handleFilterChange.bind(this);
        this.getRows = this.getRows.bind(this);
        this.getValidFilterValues = this.getValidFilterValues.bind(this);
        //this.state = { rows: Ingredients, filters: {}, sortColumn: 'unrs', sortDirection: 'ASC' };
        //this.state = { rows: this.props.ingredients, filters: this.props.filters, sortColumn: this.props.sortColumn, sortDirection: this.props.sortDirection };

    }

    render() {
        return (
            <ReactDataGrid
                onGridSort={this.handleGridSort}
                enableCellSelect={false}
                columns={this._columns}
                rowGetter={this.rowGetter}
                rowsCount={this.getSize()}
                minHeight={500}
                toolbar={<EmptyToolbar />}
                onAddFilter={this.handleFilterChange}
                getValidFilterValues={this.getValidFilterValues}
                onClearFilters={this.onClearFilters} />);
    }

    getSize() {
        return this.getRows().length;
    }

    rowGetter(rowIdx) {
        const rows = this.getRows();
        return rows[rowIdx];
    }

    getRows() {
        return Data.Selectors.getRows(this.props);
    }

    handleGridSort(sortColumn, sortDirection) {
        this.props.sort(sortColumn,sortDirection);
    }

    handleFilterChange(filter) {
        let newFilters = Object.assign({}, this.props.filters);
        if (filter.filterTerm) {
            newFilters[filter.column.key] = filter;
        } else {
            delete newFilters[filter.column.key];
        }
        this.props.filter(newFilters);
    }

    getValidFilterValues(columnId) {
        let values = this.props.rows.map(r => r[columnId]);
        return values.filter((item, i, a) => { return i === a.indexOf(item); });
    }

}

function mapStateToProps(state, ownProps){
    return {
        rows: state.recipes,
        filters: state.grids.recipes.filters,
        sortColumn: state.grids.recipes.sortColumn,
        sortDirection: state.grids.recipes.sortDirection,
    };
}

function mapDispatchToProps(dispatch){
    return {
        sort: (sortColumn, sortDirection) => dispatch(gridActions.sortRecipesGrid(sortColumn, sortDirection)),
        filter: filters => dispatch(gridActions.filterRecipesGrid(filters)) 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipeGrid); 