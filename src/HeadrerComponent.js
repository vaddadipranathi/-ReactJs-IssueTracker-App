import React from 'react';
import NavigationPanelComponent from './NavigationPanelComponent';
class HeadrerComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            logoText: "Issue tracker app"
        }
    }
    render() {
        return (
            <div>
                <NavigationPanelComponent logoText={this.state.logoText} />
            </div>
        )
    }
}

export default HeadrerComponent;