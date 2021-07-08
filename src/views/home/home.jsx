import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
    useHistory,
    Link,
} from "react-router-dom";
import ConfigServer from "../../config_server.js";
// config_server.js";
import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import PropTypes from "prop-types";

import ProjectItem from "../../components/community/project-item.jsx"  

import {
    openLoadingProject,
    closeLoadingProject,
} from "../../../src/reducers/modals";
import ProjectFeatured from "../project-featured/project-featured.jsx";
import "../../lib/sb-file-uploader-hoc.jsx";
import { setProjectTitle } from "../../reducers/project-title";
import {
    defineMessages,
    FormattedMessage,
    injectIntl,
    intlShape,
} from "react-intl";
import MenuBarHOC from "../../containers/menu-bar-hoc.jsx";

const vm = require("scratch-vm");
const ScratchStorage = require('scratch-storage');
const storage = new ScratchStorage();
let scVM = new vm();


import {
    LoadingStates,
    getIsLoadingUpload,
    getIsShowingWithoutId,
    onLoadedProject,
    requestProjectUpload,
} from "../../../src/reducers/project-state";

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            arrayProject: [
                {
                    "id": "7ac35e30-2d2c-4d21-84fe-3a492ec02d42",
                    "name": "Dọn rác",
                    "description": "undefined",
                    "project_file": "https://sgp1.digitaloceanspaces.com/devlms/teky20/media/code-kitten/projects/files/D%E1%BB%8Dn_r%C3%A1c.sb3",
                    "thumbnail": "https://sgp1.digitaloceanspaces.com/devlms/teky20/media/code-kitten/projects/2021/06/01/don_rac.png",
                    "created_by": "admin",
                    "is_public": true
                }
                ,
                {
                    "id": "7ac35e30-2d2c-4d21-84fe-3a492ec02d42",
                    "name": "Dọn rác",
                    "description": "undefined",
                    "project_file": "https://sgp1.digitaloceanspaces.com/devlms/teky20/media/code-kitten/projects/files/D%E1%BB%8Dn_r%C3%A1c.sb3",
                    "thumbnail": "https://sgp1.digitaloceanspaces.com/devlms/teky20/media/code-kitten/projects/2021/06/01/don_rac.png",
                    "created_by": "admin",
                    "is_public": true
                }
               
            ],
            id: 0
        }
        this.onRemix = this.onRemix.bind(this);

        console.log("NVM", process.env.CLIENT_SECRET);
    }

    onRemix(id) {

        console.log("AAAAAAAAAA");
        var linkToClick = document.getElementById('click');
        const link_download =  ConfigServer.host + "/code_kittens_api/projects/" + '20713546-76d2-40cf-af54-c4630a3d0fbb';        
        
        linkToClick.click();
        // fetch(link_download,{
        //     mode: 'no-cors'
        //       })
        //     .then((r) => r.arrayBuffer())
        //     .then((buffer) => {
        //         // this.props.vm
        //         //     .loadProject(buffer)
        //         console.log("SCVM");
              
        //         scVM.attachStorage(storage);
        //         scVM.loadProject(buffer);

        //             // .then(() => {
        //             //     //load done


        //             //     console.log('load done', link_download);



        //             // })
        //             // .catch((error) => {console.log("ERRR", error) });
        //     });

    }

    render() {
        return (
            
            // <>
            //     {this.state.arrayProject.map(
            //         (value) => (
            //                 <div
            //                     onClick={() =>
            //                         this.onRemix(value.id,
            //                         )
            //                     }
            //                 >
            //                     <ProjectItem
            //                         isPublic={true}
            //                         description={
            //                             value.description
            //                         }
            //                         name={
            //                             value.name
            //                         }
            //                         thumb={
            //                             value.thumbnail
            //                         }
            //                         linkdownload={
            //                             ConfigServer.host +
            //                             "/code_kittens_api/projects/" +
            //                             value.id
            //                         }
            //                     />
            //                     <Link id="click" to={`/project/${value.id}`}> </Link>
            //                 </div>

            //             )
                    
            //     )}
            //     </>

   <ProjectFeatured/>
       
       );


    }
}



Home.propTypes = {
    //closeLogin: PropTypes.func,
    vm: PropTypes.shape({
        loadProject: PropTypes.func,
    }),
    onSetProjectTitle: PropTypes.func,
    onLoadingFinished: PropTypes.func,
    onCloseLoadingStarted: PropTypes.func,
    requestProjectUpload: PropTypes.func,
};

const mapDispatchToProps = (dispatch, ownProps) => ({
    // closeLogin: () => dispatch(setShowLogin(false)),
    onLoadingStarted: () => dispatch(openLoadingProject()),
    onCloseLoadingStarted: () => dispatch(closeLoadingProject()),
    onLoadingFinished: (loadingState, success) => {
        dispatch(onLoadedProject(loadingState, ownProps.canSave, success));
        dispatch(closeLoadingProject());
        dispatch(closeFileMenu());
    },
    requestProjectUpload: (loadingState) =>
        dispatch(requestProjectUpload(loadingState)),

    onSetProjectTitle: (title) => dispatch(setProjectTitle(title)),
});
const mapStateToProps = (state, ownProps) => {
    return {
        vm: state.scratchGui.vm,
    };
};

// const ConnectedGUI = injectIntl(connect(
//     mapStateToProps,
//     mapDispatchToProps,
// )(Home));


const mergeProps = (stateProps, dispatchProps, ownProps) =>
    Object.assign({}, stateProps, dispatchProps, ownProps);
export default compose(
    injectIntl,
    MenuBarHOC,
    connect(mapStateToProps, mapDispatchToProps, mergeProps)
)(Home);


//export default Home;