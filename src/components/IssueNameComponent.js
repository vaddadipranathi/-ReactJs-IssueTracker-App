import React from 'react';
class IssueNameComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isEdiatble: false
        }
        this.renderForm = this.renderForm.bind(this);
        // this.renderIssueList = this.renderIssueList.bind(this);
        this.toggleStateForEdit = this.toggleStateForEdit.bind(this);
        this.updateIssue = this.updateIssue.bind(this);

    }
    updateIssue(event) {
        event.preventDefault();
        console.log("Update Issue Method");
        this.props.editIssue(this.props.index, this.input.value);
        this.toggleStateForEdit();
    }
    toggleStateForEdit() {
        const { isEdiatble } = this.state;
        this.setState({
            isEdiatble: !isEdiatble
        })
    }
    renderForm() {
        return (
            <div id="update-issue" className="container">
                <form className="mt-5" onSubmit={this.updateIssue} >
                    <div className="form-row align-items-center">
                        <div className="col-lg-8">
                            <label for="taskName">Edit Task</label>
                            <input type="text" className="form-control" id="taskName"
                                defaultValue={this.props.issue.name}
                                ref={(value) => { this.input = value; }} />
                        </div>
                        <div className="col-auto">
                            <button type="submit" className="btn btn-warning mt-4">
                                Update
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
    renderIssueList() {
        return (
            <div className="container">

                <li className="list-group-item" onClick={() => {
                    this.props.clickHandler(this.props.index)
                }}>
                    <span className={this.props.issue.completed ? "completed" : ""}>
                        {this.props.issue.name}
                    </span>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <button href="" className="btn btn-warning"
                        onClick={(event) => {
                            event.stopPropagation();
                            this.toggleStateForEdit();
                        }}>Edit</button>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <button href="" className="btn btn-danger"
                        onClick={(event) => {
                            event.stopPropagation();
                            this.props.deleteIssue(this.props.index);
                        }}>Delete</button>
                    {/* 
                    if we nt use stopPropagation ..the updateIssue() method will get execute with deleted index
                    and it wil raise error ...so 
                    solution - to use stop propagation - it stops the propagation of deleted index
                    stopPropagation----> it will stop propagation to that(deleted) list item 
                   */}
                </li>
            </div>)
    }
    // renderSearchData() {
    //     <div class="container">
    //         <li className="list-group-item">
    //             {this.props.element.name}
    //         </li>
    //     </div>
    // }
    render() {
        // const isEdiatble=this.state.isEdiatble;
        const { isEdiatble } = this.state; //it has same meaning as above

        return (
            <div>
                {/* <p>hi</p> */}
                <p>
                    {this.props.outputOfSearchedIsue}</p>

                <section>
                    {isEdiatble ? this.renderForm() : this.renderIssueList()}
                </section >
            </div>

        )
    }
}

export default IssueNameComponent;