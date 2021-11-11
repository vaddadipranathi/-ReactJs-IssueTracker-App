import React from 'react';

const IssueForm = (props) => {
    return (
        <div id="className-form" className="container">
            <form onSubmit={props.searchIssue}>
                <div>
                    <label for="taskName">search Task</label>
                    <input type="text" className="form-control" id="task"
                        placeholder="enter value" value={props.searchIssueName} 
                        onChange={props.recieveSearchInputValue} />
                    <button type="submit" className="btn btn-primary mt-2">Search</button>
                </div>
            </form>
            <form className="mt-5" onSubmit={props.addIssue}>
                {/* props is calling th methods from Issuelist component by props.addISsue or props.currentIssue,etc */}
                <div className="form-row align-items-center">
                    <div className="col-lg-8">
                        {/* <label for="taskName">Search Issue Task</label>
                    <input type="text" 
                     ref={(value) => { this.input = value; }}/> */}
                        <label for="taskName">Your Task</label>
                        <input type="text" className="form-control" id="taskName"
                            value={props.currentIssue} onChange={props.updateIssue} />
                        {/* we are calling the method curretIssue through {props.currentIssue} */}
                        <small id="taskHelp" className="form-text text-muted">Add your issue that you want to assign to your team mate</small>
                    </div>
                    <div className="col-auto">
                        <button type="submit" className="btn btn-primary mt-2">Submit</button>
                    </div>
                </div>
            </form>
           
            {/* <div>
                <h1>hi</h1>
               <p> {props.element}</p>
               </div>
        */}
         </div>
    )
};

export default IssueForm;