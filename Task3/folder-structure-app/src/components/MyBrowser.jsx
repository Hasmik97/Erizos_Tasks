import { Component } from 'react';
import { Folder } from './Folder';

export default class MyBrowser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTerm: '',
            data: props.data
        };
    }

    handleSearch = (e) => {
        this.setState({ searchTerm: e.target.value });
    };

    filterData = (data, searchTerm) => {
        if (!searchTerm) return data;

        const filter = (nodes) => {
            return nodes.map((node) => {
                    if (node.type) {
                        return node.name.toLowerCase().includes(searchTerm.toLowerCase()) ? node : null;
                    } else {
                        const children = filter(node.children);
                        return children.length ? { ...node, children } : null;
                    }
                })
                .filter((node) => node !== null);
        };

        return filter(data);
    };

    render() {
        const { expandedFolders } = this.props;
        const { searchTerm, data } = this.state;
        const filteredData = this.filterData(data, searchTerm);

        return (
            <div>
                <input
                    type="text"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={this.handleSearch}
                />
                <div>
                    {filteredData.map((node, index) => (
                        <Folder
                            key={index}
                            name={node.name}
                            children={node.children}
                            expandedFolders={expandedFolders}
                            path={node.name}
                            isExpanded={expandedFolders.includes(node.name)}
                        />
                    ))}
                </div>
            </div>
        );
    }
}
