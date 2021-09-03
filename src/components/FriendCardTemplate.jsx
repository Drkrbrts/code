import React from "react";

function createFriendCard(friend) {
  return (
    <div class="col-lg-2 col-md-3 mb-4 card" id="city-id">
      <img className="avatar" src="" alt="avatar" />
      <div class="card-body">
        <h4 className="card-title friend-title" style={{ textAlign: "center" }}>
          Title
        </h4>
        <p className="card-text friend-summary" style={{ textAlign: "center" }}>
          Summary
        </p>
      </div>
      <div class="card-footer" style={{ textAlign: "center" }}>
        <button type="button" class="btn btn-danger delete-btn">
          Delete
        </button>
        <button type="button" class="btn btn-primary edit-btn">
          Edit
        </button>
      </div>
    </div>
  );
}
