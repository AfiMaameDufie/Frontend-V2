import React from "react";
import { connect } from 'react-redux'


export class Footer extends React.Component {
    constructor(props) {
        super(props)
    }


    render() {
        return (
            <>
            <div className="container-fluid footer pt-4 mt-5">
                <div className="row">
                    <div className="col">  
                    <h2 className="h1 logo-text text-warning"> <span className="h1 logo-text text-light">turn</span>tabl</h2>
                    <p className="text-light">
                            As an IT services company, we’re absolutely dependent on an internet connection.
                             In these posts we’re hoping to give brief updates as to what we’re doing and what 
                            progress we’re making.
                    </p>
                    </div>
                    <div className="col pt-5">
                         <div>
                         <a className="h4 p-3 text-light"href="mailto:info@turntabl.io"><i className="text-light fa fa-envelope">&nbsp; Send Feedback</i></a> &nbsp; &nbsp; &nbsp; &nbsp;
                                 <a className="h4 p-3" href="https://twitter.com/turntablio" target="_blank" rel="noopener noreferrer"><i className="fa fa-twitter">&nbsp; Twitter</i></a> &nbsp; &nbsp; &nbsp; &nbsp;
                                 <a className="h4 p-3" href="https://github.com/turntabl" target="_blank" rel="noopener noreferrer"><i className="fa fa-github">&nbsp; GitHub</i></a>
                           </div>
                    </div>
                    <div className="col pt-5">
                    <div className="h4 text-light footer-bottom">
                        
                         Made with <i className="fa fa-heart"></i> by <a className="h4 text-warning turn" href="https://turntabl.io/">&copy; turntabl.io &nbsp; </a> in Ghana. 
                 </div>
                    </div>
                </div>
            </div>
            </>
        );
    }
}

export default connect()(Footer);