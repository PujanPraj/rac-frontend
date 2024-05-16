import React from "react";

const Modal = () => {
  return (
    <>
      <button
        type="button"
        class=" JoinUsbtn"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        data-bs-whatever="@mdo"
      >
        Join Our Club
      </button>

      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">
                Join Club
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <form action="https://formspree.io/f/mvojvray" method="POST">
                <div class="mb-1">
                  <label for="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="Name"
                    placeholder="Your name.."
                    required
                  />
                </div>
                <div class="mb-1">
                  <label for="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="Email"
                    placeholder="Your email.."
                    required
                  />
                </div>
                <div class="mb-1">
                  <label for="number">Phone number</label>
                  <input
                    type="text"
                    id="number"
                    name="Number"
                    placeholder="Your phone number.."
                    required
                  />
                </div>
                <div class="mb-1">
                  <label for="address">Address</label>
                  <input
                    type="text"
                    id="address"
                    name="Address"
                    placeholder="Your address.."
                    required
                  />
                </div>
                <div class="mb-1">
                  <label for="message">Message</label>
                  <textarea
                    id="subject"
                    name="Message"
                    placeholder="Write something.."
                    style={{ height: "200px" }}
                    required
                  ></textarea>
                </div>
                <input type="submit" value="Submit" />
              </form>
            </div>
            {/* <div class="modal-footer">
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
