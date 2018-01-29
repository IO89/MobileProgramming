import React, { Component } from 'react';
import './App.css';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import {Fragment} from 'react';

class TodoTable extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        console.log(this.props.todos);
        const columns = [{

            Header: 'Date',
            accessor: 'date'
        }, {
            Header: 'Description',
            accessor: 'desc',
        }]
        return (
            <Fragment>
                <ReactTable data={this.props.todos}
                    columns={columns} sortable={true}
                    defaultPageSize={10} />
            </Fragment>
        );
    }
}
export default TodoTable;
