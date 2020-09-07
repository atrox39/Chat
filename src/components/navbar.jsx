import React from 'react';
import '../css/navbar.css';

class Navbar extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {};
    }

    render()
    {
        const items = [];
        for(const [key, item] of this.props.elements.entries())
        {
            items.push(<li><a href="#">{item}</a></li>);
        }

        return(
            <nav className="navbar">
                <ul>
                    <li className="title"><a href="#">{this.props.title}</a></li>
                    {items}
                </ul>
            </nav>
        );
    }
}

export default Navbar;