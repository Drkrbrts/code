import React from "react";
import EventsMain from "../components/EventsMain";
import SearchDates from "../components/SearchDates";
import EventsUpcoming from "../components/EventsUpcoming";
import {
  getPaginatedEvents,
  getEventBySlug,
  searchEventsByDate,
  addEvent,
  editEvent,
} from "../services/eventsService";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import EventsSingle from "../components/EventsSingle";
import ModalMapViewAll from "../components/EventsModalMapViewAll";

/*
  To Do      
    Add/Edit Events
      - Wire Cancel Button      
    
  To Fix    
    
  Questions:
    Map - why didn't it get recognized as a number when typeof returned number.  Had to do parseInt().
*/

class Events extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: {
        mainEventSlug: "",
        mainEvent: {},
        pagedItems: [],
        mappedEvents: [],
      },
      formData: {
        dateStart: "",
        dateEnd: "",
        latitude: "",
        longitude: "",
        zipCode: "",
        address: "",
        name: "",
        headline: "",
        description: "",
        summary: "",
        slug: "",
        statusId: "",
      },
      search: {
        dateStart: "",
        dateEnd: "",
      },
      pagination: {
        currentPage: 1,
        pageSize: 4,
        totalCount: 0,
      },
      isModalOpen: false,
      isMapsModalOpen: false,
    };
  }

  componentDidMount() {
    // console.log("componentDidMount firing");
    this.getPaginated();
  }

  getPaginated = () => {
    // console.log("getPaginated firing");

    getPaginatedEvents(
      this.state.pagination.currentPage - 1,
      this.state.pagination.pageSize
    )
      .then(this.mapSuccessResponse)
      .catch(this.onGetPaginatedError);
  };

  getMainEvent = () => {
    // console.log("getMainEvent firing", this.state);
    getEventBySlug(this.state.events.mainEventSlug)
      .then(this.onGetSlugSuccess)
      .catch(this.onGetSlugError);
  };

  mapSuccessResponse = (response) => {
    const newEvents = response.data.item.pagedItems;
    // console.log("mapSuccessResponse firing", response);
    this.setState(
      (prevState) => {
        let events = { ...prevState.events };
        let pagination = { ...prevState.pagination };
        events.pagedItems = newEvents;
        events.mainEventSlug = newEvents[0].slug;
        events.mappedEvents = newEvents.map(this.mapEvents);
        pagination.totalCount = response.data.item.totalCount;
        return { ...prevState, events, pagination };
      },
      () => {
        this.getMainEvent();
      }
    );
  };

  onGetSlugSuccess = (response) => {
    // console.log("onGetSlugSuccess firing", response.data.item);
    this.setState((prevState) => {
      let events = { ...prevState.events };
      events.mainEvent = response.data.item;
      return { ...prevState, events };
    });
  };

  mapEvents = (event) => {
    // console.log("mapEvents firing", event);
    return (
      <EventsSingle
        key={`event-${event.id}`}
        event={event}
        onViewEvent={this.onViewEventRequested}
        onEditEventRequested={this.onEditEventRequested}
      />
    );
  };

  onPageChange = (newPageNumber) => {
    console.log("onPageChange firing", newPageNumber);
    this.setState(
      (prevState) => {
        let pagination = { ...prevState.pagination };
        pagination.currentPage = newPageNumber;
        return { ...prevState, pagination };
      },
      () => {
        this.getPaginated(newPageNumber);
      }
    );
  };

  onViewEventRequested = (event) => {
    console.log("onViewEventClicked", event);
    this.setState(
      (prevState) => {
        let events = { ...prevState.events };
        events.mainEvent = event;
        events.mainEventSlug = event.slug;
        return { ...prevState, events };
      },
      () => {
        this.getMainEvent();
      }
    );
  };

  onSearchFieldChange = (target) => {
    // console.log("onSearchFieldChange firing", target.value);
    let newValue = target.value;
    let inputName = target.name;
    this.setState((prevState) => {
      let search = { ...prevState.search };
      search[inputName] = newValue;
      return { ...prevState, search };
    });
  };

  onSearchRequested = () => {
    console.log("onSearchRequested firing", this.state.search);
    this.searchEvents(1);
  };

  searchEvents = (page) => {
    console.log("searchEvents firing", page);
    searchEventsByDate(
      page - 1,
      this.state.pagination.pageSize,
      this.state.search.dateStart,
      this.state.search.dateEnd
    )
      .then(this.mapSuccessResponse)
      .catch(this.onSearchError);
  };

  toggleModal = () => {
    // console.log("toggleModal firing");
    this.setState((prevState) => {
      let newState = { ...prevState };
      newState.isModalOpen = !prevState.isModalOpen;
      return newState;
    });
  };

  onFieldChangeRequested = (target) => {
    // console.log("onFieldChangeRequested", target.value);
    let newValue = target.value;
    let inputName = target.name;
    this.setState((prevState) => {
      let formData = { ...prevState.formData };
      formData[inputName] = newValue;
      return { ...prevState, formData };
    });
  };

  onEditEventRequested = (event) => {
    // console.log("onEditEventRequested", event);

    this.setState(
      (prevState) => {
        let formData = { ...prevState.formData };
        formData.name = event.name;
        formData.headline = event.headline;
        formData.description = event.description;
        formData.summary = event.summary;
        formData.slug = event.slug;
        formData.statusId = event.statusId;
        formData.dateStart = event.metaData.dateStart;
        formData.dateEnd = event.metaData.dateEnd;
        formData.latitude = event.metaData.location.latitude;
        formData.longitude = event.metaData.location.longitude;
        formData.address = event.metaData.location.address;
        formData.zipCode = event.metaData.location.zipCode;
        formData.id = event.id;
        return { ...prevState, formData };
      },
      () => {
        this.toggleModal();
      }
    );
  };

  onSaveRequested = () => {
    // console.log("onSaveRequested firing");
    let formData = this.state.formData;
    const shapedFormData = {
      name: formData.name,
      headline: formData.headline,
      description: formData.description,
      summary: formData.summary,
      slug: formData.slug,
      statusId: formData.statusId,
      metaData: {
        dateStart: formData.dateStart,
        dateEnd: formData.dateEnd,
        location: {
          latitude: formData.latitude,
          longitude: formData.longitude,
          address: formData.address,
          zipCode: formData.zipCode,
        },
      },
    };
    if (formData.id) {
      shapedFormData.id = formData.id;
      editEvent(shapedFormData)
        .then(this.onSaveEventSuccess)
        .catch(this.onSaveEventError);
    } else {
      addEvent(shapedFormData)
        .then(this.onSaveEventSuccess)
        .catch(this.onSaveEventError);
    }

    // console.log("shapedFormData", shapedFormData);
  };

  onSaveEventSuccess = (response) => {
    console.log("onAddEventSuccess firing", response);
    this.toggleModal();
    //reset State Form Data
    let resetFormData = {
      dateStart: "",
      dateEnd: "",
      latitude: "",
      longitude: "",
      zipCode: "",
      address: "",
      name: "",
      headline: "",
      description: "",
      summary: "",
      slug: "",
      statusId: "",
    };
    this.setState(
      (prevState) => {
        let formData = { ...prevState.formData };
        formData = resetFormData;
        let pagination = { ...prevState.pagination };
        pagination.currentPage = 1;
        return { ...prevState, formData, pagination };
      },
      () => {
        this.getPaginated();
      }
    );
  };

  onCancelRequested = () => {
    // console.log("onCancelRequested firing");
    let resetFormData = {
      dateStart: "",
      dateEnd: "",
      latitude: "",
      longitude: "",
      zipCode: "",
      address: "",
      name: "",
      headline: "",
      description: "",
      summary: "",
      slug: "",
      statusId: "",
    };
    this.setState(
      (prevState) => {
        let formData = { ...prevState.formData };
        formData = resetFormData;
        return { ...prevState, formData };
      },
      () => {
        this.toggleModal();
      }
    );
  };

  onViewAllRequested = () => {
    console.log("onViewAllRequested firing");
    this.setState((prevState) => {
      let newState = { ...prevState };
      newState.isMapsModalOpen = !prevState.isMapsModalOpen;
      return newState;
    });
  };

  onGetPaginatedError = (err) => {
    console.log("onGetPaginatedError", err);
    let notify = () =>
      toast.error(
        "There was an error retrieving the events.  Please refresh the page.",
        {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: false,
          progress: undefined,
        }
      );
    notify();
  };

  onGetSlugError = (err) => {
    console.log("onGetSlugError firing", err);
  };

  onSearchError = (err) => {
    console.log("onSearchError firing", err);
  };

  onSaveEventError = (err) => {
    console.log("onAddEventError firing", err);
  };

  render() {
    return (
      <>
        <div className="row d-flex p-4">
          <div className="col border-bottom bg-dark d-flex">
            <h1 className="p-2 text-white">Events</h1>
          </div>
        </div>
        <div className="d-flex row m-4">
          <div className="col-8">
            <EventsMain mainEvent={this.state.events.mainEvent} />
          </div>
          <div className="col-4">
            <div className="row">
              <div className="col">
                <SearchDates
                  searchTopic={"Events"}
                  search={this.state.search}
                  onSearchRequested={this.onSearchRequested}
                  onChangeRequested={this.onSearchFieldChange}
                />
              </div>
            </div>
            <div className="row">
              <div className="col mt-3">
                <EventsUpcoming
                  events={this.state.events.mappedEvents}
                  formData={this.state.formData}
                  onChange={this.onPageChange}
                  current={this.state.pagination.currentPage}
                  total={this.state.pagination.totalCount}
                  toggleModal={this.toggleModal}
                  isModalOpen={this.state.isModalOpen}
                  onFieldChangeRequested={this.onFieldChangeRequested}
                  onSaveRequested={this.onSaveRequested}
                  onCancelRequested={this.onCancelRequested}
                  onViewAllRequested={this.onViewAllRequested}
                />
              </div>
            </div>
          </div>
          <ModalMapViewAll
            events={this.state.events.pagedItems}
            isMapsModalOpen={this.state.isMapsModalOpen}
            onViewAllRequested={this.onViewAllRequested}
          />
        </div>
      </>
    );
  }
}
export default Events;
