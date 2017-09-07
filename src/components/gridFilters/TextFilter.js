import React from 'react';
import PropTypes from 'prop-types'

class TextFilterHeaderCell extends React.Component {
    constructor() {
        super()
        this.state = { filterTerm: '' };
        this.renderInput = this.renderInput.bind(this);
        this.render = this.render.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        let val = e.target.value;
        this.setState({ filterTerm: val });
        this.props.onChange({ filterTerm: val, column: this.props.column });
    }

    renderInput() {
        if (this.props.column.filterable === false) {
            return <span />;
        }

        let inputKey = 'header-filter-' + this.props.column.key;
        return (<input key={inputKey} type="text" placeholder="" value={this.state.filterTerm} onChange={this.handleChange} width="100%" />);
    }

    render() {
        return (
            <div>
                <div className="ui mini fluid input">
                    {this.renderInput()}
                </div>
            </div>
        );
    }

}

TextFilterHeaderCell.propTypes = {
    onChange: PropTypes.func.isRequired,
};

export default TextFilterHeaderCell;