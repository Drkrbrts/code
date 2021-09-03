import React from "react";
import ProductForm from "./components/ProductForm";
import "./App.css";
import debug from "sabio-debug";
const _logger = debug.extend;
const _cbLogger = _logger.extend;
const _loggerState = _logger.extend;

class App extends React.Component {
  loggerReturn = _logger("constructor");
  state = {
    items: [],
  };

  notificationSystem = null;

  notify = (configSettings) => {
    _logger("notify");

    const notifyConfig = {
      message: "Notification Message",
      level: "success",
      ...configSettings,
    };
    this.notificationSystem.addNotification(notifyConfig);
  };

  stateChanged = () => {
    _cbLogger("state change", this.state);
  };

  static getDerivedStateFromProps(props, state) {
    _logger("getDeriverStateFromProps");
    //this function must return something. we return null to signal that no state is being derived from props
    return null;
  }

  shouldComponentUpdate(nextProps, nextState) {
    _logger("shouldComponentUpdate hard coded to true");
    return true;
  }

  componentDidMount() {
    _logger("componentDidMount");
    this.notificationSystem = this.refs.notificationSystem;
  }

  componentDidUpdate() {
    _logger("componentDidUpdate");
  }

  componentWillUnmount() {
    _logger("componentWillUnmount");
  }

  onSave = (updatedFormData) => {
    _logger("onSave", { updatedFormData });
    this.setState((prevState) => {
      _loggerState("onSave");
      let updatedItems = [...prevState.items];

      const existingItemIndex = prevState.items.findIndex((item) => {
        return item.id === updatedFormData.id;
      });

      if (existingItemIndex >= 0) {
        updatedItems[existingItemIndex] = updatedFormData;
      } else {
        updatedItems = updatedItems.concat(updatedFormData);
      }
      return {
        items: updatedItems,
        formData: null,
        errorMessage: null,
      };
    }, this.stateChanged);

    _logger("onSave end");
  };

  render() {
    return <ProductForm></ProductForm>;
  }
}

export default App;
