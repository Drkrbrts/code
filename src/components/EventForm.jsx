import React from 'react'

let EventForm =(props)=> {
        return(
            <form>
                            <div className="mb-3 row">
                                    <label  className="col-sm-2 col-form-label">startDate</label>
                                    <div className="col-sm-10">
                                    <input type="text" 
                                        name="startDate"
                                        className="form-control"
                                        onChange={props.change}
                                        value={props.formvalue.startDate}
                                    ></input>
                                    </div>
                                </div>
                                <div className="mb-3 row">
                                    <label  className="col-sm-2 col-form-label">endDate</label>
                                    <div className="col-sm-10">
                                    <input type="text" 
                                        name="endDate"
                                        className="form-control"
                                        onChange={props.change}
                                        value={props.formvalue.endDate}
                                    ></input>
                                    </div>
                                </div>
                                <div className="mb-3 row">
                                    <label className="col-sm-2 col-form-label">zipcode</label>
                                    <div className="col-sm-10">
                                    <input type="text"
                                        name="zipcode" 
                                        className="form-control" 
                                        onChange={props.change}
                                        value={props.formvalue.zipcode}
                                    ></input>
                                    </div>
                                </div>
                                <div className="mb-3 row">
                                    <label  className="col-sm-2 col-form-label">address</label>
                                    <div className="col-sm-10">
                                    <input type="text" 
                                        name="address"
                                        className="form-control" 
                                        onChange={props.change}
                                        value={props.formvalue.address}
                                    ></input>
                                    </div>
                                </div>
                                <div className="mb-3 row">
                                    <label  className="col-sm-2 col-form-label">headline</label>
                                    <div className="col-sm-10">
                                    <input type="text" 
                                        name="headline"
                                        className="form-control"
                                        onChange={props.change}
                                        value={props.formvalue.headline}
                                    ></input>
                                    </div>
                                </div>
                                <div class="mb-3 row">
                                    <label  className="col-sm-2 col-form-label">description</label>
                                    <div className="col-sm-10">
                                    <input type="text" 
                                        name="description"
                                        className="form-control" 
                                        onChange={props.change}
                                        value={props.formvalue.description}
                                    ></input>
                                    </div>
                                </div>
                                <div className="mb-3 row">
                                    <label  className="col-sm-2 col-form-label">summary</label>
                                    <div className="col-sm-10">
                                    <input type="text" 
                                        name="summary"
                                        className="form-control" 
                                        onChange={props.change}
                                        value={props.formvalue.summary}   
                                    ></input>
                                    </div>
                                </div>
                                <div className="mb-3 row">
                                    <label  className="col-sm-2 col-form-label">slug</label>
                                    <div className="col-sm-10">
                                    <input type="text" 
                                        name="slug"
                                        className="form-control" 
                                        onChange={props.change}
                                        value={props.formvalue.slug}   
                                    ></input>
                                    </div>
                                </div>
                            </form>
        )
    }


export default EventForm