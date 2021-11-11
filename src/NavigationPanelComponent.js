import React from 'react';
import { Link } from 'react-router-dom';
class NavigationPanelComponent extends React.Component {

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                    <a className="navbar-brand" href="#">{this.props.logoText}</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <Link to='/aboutUs' className="nav-link" >About Us <span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link  to='/explore' className="nav-link" tabIndex="-1" aria-disabled="true">Explore</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

export default NavigationPanelComponent;