import React, { Component } from 'react';
import styled from 'styled-components';
import image from './img/Signup/image.svg';

const EmailSignupStyles = styled.div`
  background-color: #242282;
  color: #fff;

  h2 {
    font-weight: 700;
  }

  input[type='email'] {
    width: 100%;
    padding: 16px;
    font-size: 16px;
    margin-bottom: 16px;
  }

  label[for='email'] {
    display: block;
    font-weight: bold;
  }

  input[type='checkbox'] {
    margin-right: 8px;
  }

  a {
    color: #fff;
    border-bottom: 2px solid #fff;
  }

  button {
    width: 100%;
    color: #fff;
    font-weight: bold;
  }

  .newsletter_thanks {
    display: none;
  }

  .newsletter {
    width: 80%;
  }
`;

// eslint-disable-next-line
class Signup extends Component {
  render() {
    return (
      <EmailSignupStyles>
        <div className="container">
          <img src={image} alt="watching VR" className="col-md-6" />
          <div className="signup__content py6 px4 col-md-6">
            <h2>What's Next?</h2>
            <p className="mb3">
              Get the Mozilla Labs newsletter for updates on our latest tech and
              product innovations.
            </p>

            <div className="newsletter" id="newsletter_wrap">
              <form
                id="newsletter_form"
                name="newsletter_form"
                action="https://www.mozilla.org/en-US/newsletter/"
                method="post"
              >
                <input type="hidden" id="fmt" name="fmt" value="H" />
                <input
                  type="hidden"
                  id="newsletters"
                  name="newsletters"
                  value="mozilla-and-you"
                />
                <div id="newsletter_errors" className="newsletter_errors" />
                <div id="newsletter_email" className="form_group">
                  <label htmlFor="email" className="form_label mb1">
                    Your Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form_input"
                    required
                    placeholder="you@example.com"
                    size="30"
                  />
                </div>
                <div
                  id="newsletter_privacy"
                  className="form_group form_group-agree"
                >
                  <input type="checkbox" id="privacy" name="privacy" required />
                  <label htmlFor="privacy">
                    I'm okay with Mozilla handling my info as explained in this{' '}
                    <a href="https://www.mozilla.org/privacy/">
                      Privacy Policy
                    </a>
                    .
                  </label>
                </div>
                <div className="mt3" id="newsletter_submit">
                  <button
                    id="newsletter_submit"
                    type="submit"
                    className="btn btn-success"
                  >
                    Sign up now
                  </button>
                </div>
              </form>
              <div id="newsletter_thanks" className="newsletter_thanks">
                <h3>Thanks!</h3>
                <p>
                  If you haven’t previously confirmed a subscription to a
                  Mozilla-related newsletter you may have to do so. Please check
                  your inbox or your spam filter for an email from us.
                </p>
              </div>
            </div>
          </div>
        </div>
      </EmailSignupStyles>
    );
  }
}

export default Signup;
