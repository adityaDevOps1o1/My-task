import React, { useState } from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
const Home = () => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  return (
    <>
      <div>
        <label className="move-left">Task List</label>
        <label className="move-right">
          <b> Current Contex:</b> UCSF Head and Neck Surgery
        </label>
        <hr style={{ width: "97%", marginTop: "28px" }} />
        <div className="main-container">
          <div>
            <label className="move-left">
              Sort by :
              <select name="dummy" className="select" id="dummy">
                <option value="dummy">dummy</option>
                <option value="dummy1">dummy1</option>
                <option value="dummy2">dummy2</option>
                <option value="dummy3">dummy3</option>
              </select>
            </label>

            <label className="move-right">
              Search {"  "}
              <input type="text" />
              <i className="fa fa-search" aria-hidden="true" />
            </label>
          </div>
          <div className="box" onClick={toggle}>
            <h2>Smith joe</h2>
            <h4 className="near-text">CT adb and pelvis</h4>
            <div className="text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              mollitia, molestiae quas vel sint commodi repudiandae consequuntur
              voluptatum laborum numquam blanditiis harum quisquam eius sed odit
              fugiat iusto fuga praesentium optio, eaque rerum! Provident
              similique accusantium nemo autem. Veritatis obcaecati tenetur iure
              eius earum ut molestias architecto voluptate aliquam nihil,
              eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
              tenetur error, harum nesciunt ipsum debitis quas aliquid.
              Reprehenderit, quia. Quo neque error repudiandae fuga? Ipsa
              laudantium molestias eos sapiente officiis modi at sunt excepturi
              expedita sint? Sed quibusdam recusandae alias error harum maxime
              adipisci amet laborum. Perspiciatis minima nesciunt dolorem!
              Officiis iure rerum voluptates a cumque velit quibusdam sed amet
              tempora. Sit laborum ab,
              <div>
                <label className="move-left-div">
                  {" "}
                  UCSF General Surgery -Dr.Shimura Hashimoto
                </label>
                <label className="move-right-div">
                  <b>Requested Date</b> -{" "}
                  <label style={{ color: "green" }}>04/15/2021</label>
                  <b style={{ marginLeft: "20px" }}>Due Date</b> -{" "}
                  <label style={{ color: "red" }}>04/20/2021</label>
                </label>
              </div>
            </div>
          </div>
          <div className="box" onClick={toggle}>
            <h2>Thomas bob</h2>

            <h4 className="near-text">RQ Ultrasound</h4>
            <div className="text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              mollitia, molestiae quas vel sint commodi repudiandae consequuntur
              voluptatum laborum numquam blanditiis harum quisquam eius sed odit
              fugiat iusto fuga praesentium optio, eaque rerum! Provident
              similique accusantium nemo autem. Veritatis obcaecati tenetur iure
              eius earum ut molestias architecto voluptate aliquam nihil,
              eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
              tenetur error, harum nesciunt ipsum debitis quas aliquid.
              Reprehenderit, quia. Quo neque error repudiandae fuga? Ipsa
              laudantium molestias eos sapiente officiis modi at sunt excepturi
              expedita sint? Sed quibusdam recusandae alias error harum maxime
              adipisci amet laborum. Perspiciatis minima nesciunt dolorem!
              Officiis iure rerum voluptates a cumque velit quibusdam sed amet
              tempora. Sit laborum ab,
              <div>
                <label className="move-left-div">
                  {" "}
                  UCSF General Surgery -Dr.Shimura Hashimoto
                </label>
                <label className="move-right-div">
                  <b>Requested Date</b> -{" "}
                  <label style={{ color: "green" }}>04/15/2021</label>
                  <b style={{ marginLeft: "20px" }}>Due Date</b> -{" "}
                  <label style={{ color: "red" }}>04/20/2021</label>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Modal className="modal-content" isOpen={modal} toggle={toggle}>
        <ModalHeader className="modal-header">
          <button type="button" className="close" onClick={toggle}>
            &times;
          </button>
        </ModalHeader>
        <ModalBody className="modal-body">
          <div className="modal-form">
            <form>
              <ul>
                <li>
                  <div className="form-grp">
                    <input type="text" placeholder="dummyText" />
                    <label>Patient name</label>
                  </div>
                </li>
                <li>
                  <div className="form-grp">
                    <input type="text" placeholder="dummyText" />
                    <label>Organization Requester</label>
                  </div>
                </li>
                <li>
                  <div className="form-grp">
                    <input
                      type="text"
                      placeholder="Submitted"
                      style={{ color: "green" }}
                    />
                    <label>Status</label>
                  </div>
                </li>
                <li>
                  <div className="form-grp">
                    <input type="text" placeholder="dummyText" />
                    <label> Patient Record Number</label>
                  </div>
                </li>
                <li>
                  <div className="form-grp">
                    <input type="text" placeholder="dummyText" />
                    <label>Requester</label>
                  </div>
                </li>
                <li>
                  <div className="form-grp">
                    <input type="date" placeholder="dummyText" />
                    <label>Requested Date</label>
                  </div>
                </li>
                <li>
                  <div className="form-grp">
                    <input type="date" />
                    <label>Patient DOB</label>
                  </div>
                </li>
                <li>
                  <div className="form-grp">
                    <input type="text" placeholder="dummyText" />
                    <label>Item Requested</label>
                  </div>
                </li>
                <li>
                  <div className="form-grp">
                    <input type="date" style={{ color: "red" }} />
                    <label>Due Date</label>
                  </div>
                </li>
              </ul>
              <div className="textarea-field">
                <textarea
                  placeholder=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            mollitia, molestiae quas vel sint commodi repudiandae consequuntur"
                ></textarea>
                <label>Notes</label>
              </div>
              <div className="upload-main">
                <div className="upload-left">
                  <div className="upload-field">
                    <textarea id="" name="" rows="" cols=""></textarea>
                    <div className="attach-file">
                      <i className="fa fa-paperclip" aria-hidden="true"></i>
                    </div>
                    <div className="attach-file">
                      <i className="fa fa-times" aria-hidden="true"></i>
                    </div>
                  </div>
                </div>
                <div className="upload-right">
                  <button className="uploadbtn">Upload</button>
                  <button>Submit</button>
                </div>
              </div>
            </form>
          </div>
        </ModalBody>
      </Modal>
    </>
  );
};
export default Home;
