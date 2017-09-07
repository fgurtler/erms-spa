import React from 'react'
import ReactDataGrid from 'react-data-grid';
import TextFilter from './gridFilters/TextFilter'
import NumericFilter from './gridFilters/NumericFilter'
import { Filters, Data } from 'react-data-grid-addons';
import { Link } from 'react-router-dom'
import {connect} from 'react-redux';
import * as gridActions from '../actions/gridActions';

class EmptyToolbar extends React.Component {
    componentDidMount() { this.props.onToggleFilter() }
    render() { return (<div></div>) }
}


// Custom Formatter component
class LinkCell extends React.Component {
    render() {
        return (
            <Link to={"/ingredients/" + this.props.value}>{this.props.value}</Link>
        );
    }
}

class IngredientGrid extends React.Component {

    constructor(props) {
        super(props);
        this._columns = [
            {
                key: 'unrs',
                name: 'UNRS Code',
                sortable: true,
                filterable: true,
                filterRenderer: TextFilter,
                resizable: true,
                formatter: LinkCell,
            },
            {
                key: 'name',
                name: 'Ingredient',
                sortable: true,
                filterable: true,
                filterRenderer: TextFilter,
                resizable: true,
            },
            {
                key: 'unrs_group',
                name: 'Group',
                sortable: true,
                filterable: true,
                filterRenderer: Filters.SingleSelectFilter,
                resizable: true,
            }, /*
            {
                key: 'unrs_group',
                name: 'Subgroup',
                sortable: true,
                width: 80
            }, */
            {
                key: 'uom',
                name: 'Unit of Measure',
                sortable: true,
                filterable: true,
                filterRenderer: Filters.SingleSelectFilter,
                resizable: true,
            },
            {
                key: 'calories',
                name: 'Calories per unit of measure',
                sortable: true,
                filterable: true,
                filterRenderer: NumericFilter,
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
        rows: state.ingredients,
        filters: state.grids.ingredients.filters,
        sortColumn: state.grids.ingredients.sortColumn,
        sortDirection: state.grids.ingredients.sortDirection,
    };
}

function mapDispatchToProps(dispatch){
    return {
        sort: (sortColumn, sortDirection) => dispatch(gridActions.sortIngredientsGrid(sortColumn, sortDirection)),
        filter: filters => dispatch(gridActions.filterIngredientsGrid(filters)) 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(IngredientGrid); 