import React from "react";

function TechCoCard(props) {
  const oneCo = props.company;

  // const contactInfo = () => {
  //   if (oneCo.contactInformation === null) {
  //     return "no contact info";
  //   } else {
  //     return oneCo.contactInformation.data;
  //   }
  // };

  const onEditClick = function onEditClick() {
    props.onEditClick(oneCo);
  };
  const toggleModal = () => {
    props.toggleModal(oneCo);
    console.log("toggle modal");
  };
  return (
    <>
      <div className="col card-temp">
        <div className="card" style={{ width: "18rem" }}>
          <div className="text-center">
            <img
              src={oneCo.images && oneCo.images[0].imageUrl}
              className="card-img-top circular-landscape align-items-center"
              alt="..."
            />
          </div>
          <div className="card-body">
            <h5 className="card-name">{oneCo.name}</h5>
            <p className="card-profile">{oneCo.profile}</p>
            <p className="card-summary">{oneCo.summary}</p>
          </div>
          <div className="card-footer">
            <button
              onClick={onEditClick}
              className="btn btn-primary editButton"
            >
              Edit
            </button>
            <div>
              <button
                type="button"
                className="btn btn-info row"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                onClick={toggleModal}
              >
                Contact
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* <TechCoModal
        company={oneCo}
        isOpen={props.isOpen}
        toggleModal={toggleModal}
        contactInfo={
          props.company.contactInformation === null
            ? "no info"
            : props.company.contactInformation.data
        }
      /> */}
    </>
  );
}

export default React.memo(TechCoCard);
