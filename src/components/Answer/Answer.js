import React from "react";
import "./Answer.css";

const Answer = () => {
  return (
    <div className="answer-qestion">
      <div class="accordion" id="accordionExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingOne">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              How does ReactJs work.
            </button>
          </h2>
          <div
            id="collapseOne"
            class="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <strong>
                React goes through its virtual DOM ,creates a list of those
                changes that need to be made to the actual DOM and then does it
                all in one single process. In fancy words, React does batch
                updates. So putting all pieces together, Reconciliation = Render
                + Diffing occurs in between + Commit.
              </strong>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingTwo">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Difference Between Props and State
            </button>
          </h2>
          <div
            id="collapseTwo"
            class="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <strong>
                Props are read-only components. It is an object which stores the
                value of attributes of a tag and work similar to the HTML
                attributes. It allows passing data from one component to other
                components. It is similar to function arguments and can be
                passed to the component the same way as arguments passed in a
                function. Props are immutable so we cannot modify the props from
                inside the component. The state is an updatable structure that
                is used to contain data or information about the component and
                can change over time. The change in state can happen as a
                response to user action or system event. It is the heart of the
                react component which determines the behavior of the component
                and how it will render. A state must be kept as simple as
                possible. It represents the component's local state or
                information. It can only be accessed or modified inside the
                component or by the component directly.
              </strong>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingThree">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              UseEffect uses in different perspects
            </button>
          </h2>
          <div
            id="collapseThree"
            class="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <strong>
                The useEffect Hook allows you to perform side effects in your
                components. UseEffect is used for fetching information from
                external sources. UseEffect also used for validating input
                field, live filtering, trigger animation on new array on state
                change.
              </strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Answer;
