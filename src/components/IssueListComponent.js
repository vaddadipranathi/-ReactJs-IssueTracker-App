import React from 'react';
import IssueNameComponent from './IssueNameComponent';
import IssueForm from './IssueForm';

class IssueListComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            issues: [
                { name: "Create app - Issue 1", completed: false },
                { name: "Modify app - Issue 2", completed: false },
                { name: "Delete app - Issue 3", completed: true }],
            currentIssue: '',
            searchIssueName: '',
            outputOfSearchedIsue: ''

        }
        this.changeStatus = this.changeStatus.bind(this);
        // "this.changeStatus.bind(this)" is binded to the -----> props " this.changeStatus"
        this.updateIssue = this.updateIssue.bind(this);
        this.addIssue = this.addIssue.bind(this);
        this.deleteIssue = this.deleteIssue.bind(this);
        this.editIssue = this.editIssue.bind(this);
        this.searchIssue = this.searchIssue.bind(this);
        this.recieveSearchInputValue = this.recieveSearchInputValue.bind(this);
        /*Bind method is used to bind the this reference with class method. 
        Because we want to access the state of component.*/
    }

    searchIssue(event) {
        event.preventDefault();//it will stop browser from refershing by default
        console.log("search Issue");
        let searchIssueName = this.state.searchIssueName;
        let issues = this.state.issues; //take the copy of original issue array into local issues variable 
        let outputOfSearchedIsue = issues.find(({ name }) => name === searchIssueName);
        this.setState({
            outputOfSearchedIsue: outputOfSearchedIsue,
            searchIssueName: ''
            // putting currentIssueinto its default state
        })
        console.log("Input from user:  " + searchIssueName)
        console.log("result from search:  " + outputOfSearchedIsue.name);
    }
    recieveSearchInputValue(indexIssue) {
        this.setState({
            searchIssueName: indexIssue.target.value
        })

    }
    editIssue(index, valueToUpdate) {
        console.log("edit meth--> " + index + " " + valueToUpdate);
        let issues = this.state.issues;
        let currentIssue = issues[index];
        currentIssue.name = valueToUpdate;
        // currentIssue['name']=valueToUpdate;
        this.setState({
            issues: issues
        })

    }
    deleteIssue(indexToBedeleted) {
        console.log("delet method")
        let issues = this.state.issues;
        issues.splice(indexToBedeleted, 1);
        this.setState({
            issues: issues,
        })

    }
    addIssue(event) {
        event.preventDefault();//it will stop browser from refershing by default
        console.log("add method")
        let issues = this.state.issues; //take the copy of original issue array into local issues variable 
        let currentIssue = this.state.currentIssue;
        issues.push({
            name: currentIssue,
            completed: false
        })
        this.setState({
            issues: issues,
            // first issues is original array 
            //second issues is the local array with new updated issues list
            currentIssue: ''
            // putting currentIssueinto its default state
        })
    }
    updateIssue(newValue) {
        //update Issue method is responsible to take user input from form and 
        // bind into currentIssuevariable
        this.setState({
            currentIssue: newValue.target.value
            //newValue - event that is coming as input
            //target -  where exactly event is happening
            //value- exact value of targeted source
        })
    }
    changeStatus(index) {
        var issues = this.state.issues;
        var issue = issues[index];
        issue.completed = !issue.completed;
        this.setState({
            issues: issues
            // first issues is original  array 
            //second issues is the  local array with updated completed status

        })
        console.log(this.state.issues[index])
    }
    render() {
        return (
            <div>
                <h1 className="display-4 mt-3 text-center">Issue Tracker App</h1>
                <IssueForm updateIssue={this.updateIssue}
                    currentIssue={this.state.currentIssue}
                    recieveSearchInputValue={this.recieveSearchInputValue}
                    searchIssueName={this.state.searchIssueName}
                    addIssue={this.addIssue}
                    //  element={this.element}
                    searchIssue={this.searchIssue}
                />
                <ul className="list-group list-group-flush">
                    {
                        this.state.issues.map((issue, index) => {
                            return (
                                <IssueNameComponent
                                    key={issue.name}
                                    issue={issue}
                                    clickHandler={this.changeStatus}
                                    deleteIssue={this.deleteIssue}
                                    index={index}
                                    editIssue={this.editIssue}
                                    outputOfSearchedIsue={this.outputOfSearchedIsue}
                                />);
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default IssueListComponent;