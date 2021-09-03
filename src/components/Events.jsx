import React from "react";
import * as eventService from "./auth/eventService";
import Map from "./Map";
import Pagination from "rc-pagination";
import "rc-pagination/assets/index.css";
import SingleEvent from "./SingleEvent";
import NewEvent from "./NewEvent";

class Events extends React.Component {
  state = {
    feed: {
      description: "",
      headline: "",
      id: 0,
      name: "",
      slug: "",
      statusId: "",
      summary: "",
      metaData: {
        dateEnd: "",
        dateStart: "",
        hour: 0,
        mins: 0,
        location: {
          address: "",
          zipCode: "",
          longitude: 0,
          latitude: 0,
        },
      },
    },
    mappedFeed: [],
    feedLength: 0,
    currentPage: 1,
    pageClick: false,
  };

  newEvent = () => {
    console.log("New Event was clicked!");
  };

  componentDidMount() {
    eventService
      .getFeed(0, 3)
      .then(this.onGetFeedSuccess)
      .catch(this.onGetFeedError);
  }

  mapEvents = (event) => {
    return (
      <React.Fragment key={`event-${event.id}`}>
        <SingleEvent event={event} viewMore={this.viewMore} edit={this.edit} />
      </React.Fragment>
    );
  };

  viewMore = (slug) => {
    console.log(slug);
    eventService
      .getBySlug(slug)
      .then(this.onGetBySlugSuccess)
      .catch(this.onGetBySlugError);
  };

  onGetBySlugSuccess = (response) => {
    console.log(response);
    console.log(response.data.item);
    var latestEvent = response.data.item;
    this.setState((prevState) => {
      var newFeed = { ...prevState.feed };
      newFeed.description = latestEvent.description;
      newFeed.headline = latestEvent.headline;
      newFeed.id = latestEvent.id;
      newFeed.name = latestEvent.name;
      newFeed.slug = latestEvent.slug;
      newFeed.statusId = latestEvent.statusId;
      newFeed.summary = latestEvent.summary;
      newFeed.metaData.dateStart = latestEvent.metaData.dateStart;
      newFeed.metaData.dateEnd = latestEvent.metaData.dateEnd;
      newFeed.metaData.location.address = latestEvent.metaData.location.address;
      newFeed.metaData.location.zipCode = latestEvent.metaData.location.zipCode;
      newFeed.metaData.location.longitude =
        latestEvent.metaData.location.longitude;
      newFeed.metaData.location.latitude =
        latestEvent.metaData.location.latitude;
      var time = latestEvent.metaData.dateStart;
      time = new Date(time);
      newFeed.metaData.hour = time.getHours();
      if (newFeed.metaData.hour > 12) {
        newFeed.metaData.hour = newFeed.metaData.hour - 12;
      }
      newFeed.metaData.mins = time.getMinutes();
      if (newFeed.metaData.mins === 0) {
        newFeed.metaData.mins = "00";
      }
      return { feed: newFeed };
    }, this.stateChanged);
  };
  onGetBySlugError = (err) => {
    console.log({ error: err });
  };
  edit = (slug) => {
    console.log(slug);
  };

  onPageChange = (page) => {
    this.setState((prevState) => {
      var newPage = { ...prevState.currentPage };
      newPage = page;
      var pageClick = true;
      return { currentPage: newPage, pageClick };
    }, this.stateChanged);
    eventService
      .getFeed(page - 1, 3)
      .then(this.onGetFeedSuccess)
      .catch(this.onGetFeedError);
  };

  stateChanged = () => {
    console.log("State Changed:", this.state.feed);
  };

  onGetFeedSuccess = (response) => {
    if (this.state.pageClick === false) {
      var mappedEvents = response.data.item.pagedItems.map(this.mapEvents);
      console.log(response.data.item.pagedItems[0]);
      var latestEvent = response.data.item.pagedItems[0];
      this.setState((prevState) => {
        var newFeed = { ...prevState.feed };
        newFeed.description = latestEvent.description;
        newFeed.headline = latestEvent.headline;
        newFeed.id = latestEvent.id;
        newFeed.name = latestEvent.name;
        newFeed.slug = latestEvent.slug;
        newFeed.statusId = latestEvent.statusId;
        newFeed.summary = latestEvent.summary;
        newFeed.metaData.dateStart = latestEvent.metaData.dateStart;
        newFeed.metaData.dateEnd = latestEvent.metaData.dateEnd;
        newFeed.metaData.location.address =
          latestEvent.metaData.location.address;
        newFeed.metaData.location.zipCode =
          latestEvent.metaData.location.zipCode;
        newFeed.metaData.location.longitude =
          latestEvent.metaData.location.longitude;
        newFeed.metaData.location.latitude =
          latestEvent.metaData.location.latitude;
        var time = latestEvent.metaData.dateStart;
        time = new Date(time);
        newFeed.metaData.hour = time.getHours();
        newFeed.metaData.mins = time.getMinutes();
        var newLength = { ...prevState.feedLength };
        newLength = response.data.item.totalCount;
        return {
          feed: newFeed,
          feedLength: newLength,
          mappedFeed: mappedEvents,
        };
      }, this.stateChanged);
    } else {
      var objectToMap = response.data.item.pagedItems;
      var eventsMapped = objectToMap.map(this.mapEvents);
      this.setState((prevState) => {
        var copy = { ...prevState.mappedFeed };
        copy = eventsMapped;
        return { mappedFeed: copy };
      }, this.stateChanged);
    }
  };

  onGetFeedError = (err) => {
    console.log({ error: err });
  };
  render() {
    return (
      <div className="container-fluid row">
        <div className="col-md-8">
          <div className="card">
            <div className="card-body">
              <h1 className="card-title">{this.state.feed.headline}</h1>
              <p className="card-text">{this.state.feed.description}</p>
              <p className="card-text">{this.state.feed.summary}</p>
              <div className="row">
                <div className="col-md-4">
                  <h4>Location</h4>
                  <p>
                    {this.state.feed.metaData.location.address +
                      " " +
                      this.state.feed.metaData.location.zipCode}
                  </p>
                  <strong>
                    {(this.state.feed.metaData.hour % 12) +
                      ":" +
                      this.state.feed.metaData.mins +
                      "PM"}
                  </strong>
                </div>
                <div className="col-md-8">
                  <Map
                    lng={this.state.feed.metaData.location.longitude}
                    lat={this.state.feed.metaData.location.latitude}
                  ></Map>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="row">
            <div className="col">
              <Pagination
                className="my-2"
                style={{ width: "50%", display: "flex" }}
                onChange={this.onPageChange}
                current={this.state.currentPage}
                total={this.state.feedLength * 2.5}
              />
            </div>
            <div className="col mr-auto my-2">
              <NewEvent />
            </div>
          </div>
          <h1>Title</h1>
          {this.state.mappedFeed}
        </div>
      </div>
    );
  }
}

export default Events;
