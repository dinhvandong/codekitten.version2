import React from "react";
import ReactDOM from "react-dom";
import { compose } from "redux";
import ConnectedIntlProvider from "../lib/connected-intl-provider.jsx";
//connected-intl-provider.jsx';
import { Provider } from "react-redux";
import { ReactReduxContext } from "react-redux";
import { createBrowserHistory } from "history";

import Home from "../views/home/home.jsx";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link,
  useParams,
  useRouteMatch,
  BrowserRouter,
} from "react-router-dom";

import configureStore from "redux-mock-store";
import VM from "scratch-vm";

import AppStateHOC from "../lib/app-state-hoc.jsx";
import GUI from "../containers/gui.jsx";

import { menuInitialState } from "../../src/reducers/menus";
import { LoadingState } from "../../src/reducers/project-state";

// containers/gui.jsx';
import HashParserHOC from "../lib/hash-parser-hoc.jsx";
import log from "../lib/log.js";
//'./detect-locale';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const onClickLogo = () => {
  window.location = "http://localhost:8601";
};

const handleTelemetryModalCancel = () => {
  log("User canceled telemetry modal");
};

const handleTelemetryModalOptIn = () => {
  log("User opted into telemetry");
};

const handleTelemetryModalOptOut = () => {
  log("User opted out of telemetry");
};
/*
 * Render the GUI playground. This is a separate function because importing anything
 * that instantiates the VM causes unsupported browsers to crash
 * {object} appTarget - the DOM element to render to
 */
export default (appTarget) => {
  const store = configureStore()({
    locales: {
      isRtl: false,
      locale: "en-US",
    },
    scratchGui: {
      menus: menuInitialState,
      projectState: {
        loadingState: LoadingState.NOT_LOADED,
      },
      vm: new VM(),
    },
  });

  GUI.setAppElement(appTarget);
  // note that redux's 'compose' function is just being used as a general utility to make
  // the hierarchy of HOC constructor calls clearer here; it has nothing to do with redux's
  // ability to compose reducers.
  const WrappedGui = compose(AppStateHOC, HashParserHOC)(GUI);
  const hist = createBrowserHistory();

  // TODO a hack for testing the backpack, allow backpack host to be set by url param
  const backpackHostMatches = window.location.href.match(
    /[?&]backpack_host=([^&]*)&?/
  );
  const backpackHost = backpackHostMatches ? backpackHostMatches[1] : null;
  const scratchDesktopMatches = window.location.href.match(
    /[?&]isScratchDesktop=([^&]+)/
  );
  let simulateScratchDesktop;
  if (scratchDesktopMatches) {
    try {
      // parse 'true' into `true`, 'false' into `false`, etc.
      simulateScratchDesktop = JSON.parse(scratchDesktopMatches[1]);
    } catch {
      // it's not JSON so just use the string
      // note that a typo like "falsy" will be treated as true
      simulateScratchDesktop = scratchDesktopMatches[1];
    }
  }
  if (process.env.NODE_ENV === "production" && typeof window === "object") {
    // Warn before navigating away
    window.onbeforeunload = () => true;
  }
  ReactDOM.render(
    // important: this is checking whether `simulateScratchDesktop` is truthy, not just defined!
    simulateScratchDesktop ? (
      <WrappedGui
        canEditTitle
        isScratchDesktop
        showTelemetryModal
        canSave={false}
        onTelemetryModalCancel={handleTelemetryModalCancel}
        onTelemetryModalOptIn={handleTelemetryModalOptIn}
        onTelemetryModalOptOut={handleTelemetryModalOptOut}
      />
    ) : (
      <BrowserRouter history={hist}>
        <Provider store={store}>
          <ConnectedIntlProvider>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route
               path="/project/:projectId?/:playerOnly?"
                render={(props) => {
                  console.log("props.match.params.",props.match.params);
                   return ( 
                  <GuiComponent
                    projectId={props.match.params.projectId}
                    source={
                      <WrappedGui
                        projectIdString = {props.match.params.projectId}
                        canEditTitle
                        //isFullScreen={props.match.params.playerOnly =="true"?true:false}
                        isPlayerOnly= {props.match.params.playerOnly =="true"?true:false}
                        //{props.match.params.playerOnly}
                        backpackVisible
                        showComingSoon
                        backpackHost={backpackHost}
                        canSave={false}
                        onClickLogo={onClickLogo}
                      />
                    }
                    {...props}
                  />
                )}}
              ></Route>

              <Route
                 path="/project/getStarted"
                render={(props) => (
                  <GuiComponent
                  projectId={props.match.params.projectId}
                    source={
                      <WrappedGui
                        projectIdString = {"getStarted"}
                        canEditTitle
                        isPlayerOnly={false}
                        backpackVisible
                        showComingSoon
                        backpackHost={backpackHost}
                        canSave={false}
                        onClickLogo={onClickLogo}
                      />
                    }
                    {...props}
                  />
                )}
              ></Route>

              <Route
              path="/project/:projectId/justplayer/:isPlayer"
              render={(props) => (
                <GuiComponent
                projectId={props.match.params.projectId}
                  source={
                    <WrappedGui
                      projectIdString = {"jusPlayer"}
                      canEditTitle
                      isPlayerOnly={false}
                      backpackVisible
                      showComingSoon
                      backpackHost={backpackHost}
                      canSave={false}
                      onClickLogo={onClickLogo}
                    />
                  }
                  {...props}
                />
              )}
            ></Route>
            </Switch>
          </ConnectedIntlProvider>
        </Provider>
      </BrowserRouter>
    
    
    
      ),
    appTarget
  );
};

class GuiComponent extends React.Component {

  componentDidMount()
  {
    // const {projectId} = useParams();
    console.log("match",this.props.match.params.projectId);
  }
  render() {
    const { source } = this.props;
   
    
    return (
      <React.Fragment>
        {source}

        {/* <p>id :{projectId}</p> */}
      </React.Fragment>
    );
  }
}
