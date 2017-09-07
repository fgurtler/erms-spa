import React from 'react'
import ReactDataGrid from 'react-data-grid';
import Ingredients from '../data/ingredients'
import TextFilter from './gridFilters/TextFilter'
import NumericFilter from './gridFilters/NumericFilter'
import { Filters, Data } from 'react-data-grid-addons';
import { Link } from 'react-router-dom'

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

export default class IngredientGrid extends React.Component {

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
        this.Ingredients = Ingredients;
        this.rowGetter = this.rowGetter.bind(this);
        this.handleGridSort = this.handleGridSort.bind(this);
        this.handleFilterChange = this.handleFilterChange.bind(this);
        this.getRows = this.getRows.bind(this);
        this.getValidFilterValues = this.getValidFilterValues.bind(this);
        //this.state = { rows: Ingredients, filters: {}, sortColumn: 'unrs', sortDirection: 'ASC' };
        this.state = { rows: Ingredients, filters: {}, sortColumn: '', sortDirection: '' };

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
        return Data.Selectors.getRows(this.state);
    }

    handleGridSort(sortColumn, sortDirection) {
        this.setState({ sortColumn: sortColumn, sortDirection: sortDirection });
    }

    handleFilterChange(filter) {
        let newFilters = Object.assign({}, this.state.filters);
        if (filter.filterTerm) {
            newFilters[filter.column.key] = filter;
        } else {
            delete newFilters[filter.column.key];
        }
        this.setState({ filters: newFilters });
    }

    getValidFilterValues(columnId) {
        let values = this.state.rows.map(r => r[columnId]);
        return values.filter((item, i, a) => { return i === a.indexOf(item); });
    }

}

