import { Component } from 'react';
import { File } from './File';

export class Folder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: !props.isExpanded
        };
    }

    toggleCollapse = () => {
        this.setState((prevState) => ({
            collapsed: !prevState.collapsed
        }));
    };

    render() {
        const { name, children, expandedFolders, path } = this.props;
        const { collapsed } = this.state;
        const isExpanded = expandedFolders.includes(path);
        const shouldExpand = !collapsed || isExpanded;

        return (
            <div>
                <div onClick={this.toggleCollapse} style={{ cursor: 'pointer' }}>
                    {shouldExpand ? '[-]' : '[+]'} {name}
                </div>
                {shouldExpand && <div style={{ paddingLeft: '20px'}}>
                    {children.map((child, index) => {
                        if (child.type) {
                            return <File key={index} name={child.name} />;
                        } else {
                            return (
                                <Folder key={index}
                                    name={child.name}
                                    children={child.children}
                                    expandedFolders={expandedFolders}
                                    path={`${path}/${child.name}`}
                                    isExpanded={expandedFolders.includes(`${path}/${child.name}`)}
                                />
                            );
                        }
                    })}
                </div>}
            </div>
        );
    }
}

