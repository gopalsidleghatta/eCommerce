import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Collapse = styled.div.attrs({
    className: 'collpase navbar-collapse',
})``

const List = styled.div.attrs({
    className: 'navbar-nav mr-auto',
})``

const Item = styled.div.attrs({
    className: 'collpase navbar-collapse',
})``

class Links extends Component {
    render() {
        return (
            <React.Fragment>
                <Link to="/api/auth" className="navbar-brand">
                        ShoppingCart
                </Link>
                <Collapse>
                    <List>
                        <Item>
                            <Link to="/products/list" className="nav-link">
                                Products
                            </Link>
                        </Item>
                        <Item>
                            <Link to="/products/create" className="nav-link">
                                Create Product
                            </Link>
                        </Item>
                    </List>
                </Collapse>
            </React.Fragment>
        )
    }
}

export default Links