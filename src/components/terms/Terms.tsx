import React from "react";
import "./terms.scss";

interface Props {
  setShowTerms: React.Dispatch<React.SetStateAction<boolean>>;
}
const Terms: React.FC<Props> = ({ setShowTerms }) => {
  return (
    <div className="terms-wrapper">
      <div className="container">
        <h2>Terms and Conditions</h2>
        <ul>
          <li>
            These terms and conditions form part of your agreement with Elie
            Badawi.
          </li>
          <li>
            Your agreement with us is valid upon your completion and signing of
            the Personal Training membership agreement form.
          </li>
          <li>
            These documents represent a legal agreement between us, so please
            make sure that you read them carefully and understand them. If you
            have any questions, please get back to us.
          </li>
        </ul>

        <h2>Purchasing Sessions and Bookings</h2>
        <ul>
          <li>Session purchases can be made on-line or in person</li>
        </ul>

        <h2>Payments</h2>
        <ul>
          <li>
            All payments must be made in full prior to any sessions being
            undertaken.
          </li>
        </ul>

        <h2>Session Cancellations</h2>
        <ul>
          <li>
            {" "}
            If your Personal Trainer fails to give you 24 hours’ prior notice of
            any cancellation, you will be entitled to 1 extra hour of Personal
            Training, in addition to the session you missed.
          </li>
          <li>
            We require a minimum of 24 hours’ prior notice of any cancellation
            of any Personal Training sessions. If you do not provide a minimum
            of 24 hours’ prior notice, you may lose that session and no refund
            will be made to you.
          </li>
        </ul>

        <h2>Cancellation of Ongoing Training</h2>

        <ul>
          <li>
            If you choose not to renew your sessions going forward you must tell
            us about the change before the 15th day of the month
          </li>
        </ul>

        <h2>Lateness</h2>

        <ul>
          <li>
            If your Personal Trainer is more than 10 minutes late for your
            session you will be entitled to a complimentary session, along with
            any remaining time you still have for that session.
          </li>

          <li>
            If you are late for your session, your session will be reduced in
            accordance with that time. If you are more than 25 minutes late,
            your Personal Trainer may choose to cancel the session and you may
            lose that session, in which case no refund will be made.
          </li>
        </ul>

        <h2>Expiry and Extensions</h2>

        <ul>
          <li>
            All Personal Training packages purchase options have a 60 day
            expiry, after which time any unused sessions will be lost and no
            refund will be made. This is to ensure that we deliver all your
            required sessions to enable you to achieve your goals as well as
            keeping a clear schedule going forward.
          </li>

          <li>
            To extend your Personal Training packages beyond 60 days, you must
            inform your trainer; we may ask you to provide proof of pregnancy,
            serious illness, serious injury or redundancy.
          </li>
        </ul>

        <h2>Personal Trainer</h2>

        <ul>
          <li>
            {" "}
            Your Personal Trainer cannot prescribe treatment or diagnose medical
            conditions. They may at any time ask you to consult with your GP
            should any medical condition arise.
          </li>
        </ul>

        <h2>Refunds</h2>
        <ul>
          <li>
            {" "}
            If for any medical reason you are no longer able to complete any
            Personal Training sessions, you will be given a refund on any
            outstanding sessions. We may ask for you to provide proof from your
            GP.
          </li>
        </ul>
        <button onClick={() => setShowTerms(false)}>I Understand</button>
      </div>
    </div>
  );
};

export default Terms;
