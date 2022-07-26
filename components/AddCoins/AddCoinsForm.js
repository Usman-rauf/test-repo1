import React from "react";
import styles from "./AddCoinsForm.module.scss";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FormSchema } from "./formSchema";
const CoinForm = () => {
   const initialValues = {
     name: "",
     email: "",
     symbol: "",
     des: "",
     price: "",
     date: "",
     address: "",
     contact: "",
     website: "",
     twitter: "",
     telegram: "",
     redit: "",
     discord: "",
     logo: "",
     description:"",
   };
   const handleSubmit = async (values) => {};
  return (
    <div className={styles.wrapper}>
      <div className={styles.containerr}>
        <div className={styles.formcol}>
          <p className={styles.heading}>Coin Information</p>

          <Formik
            initialValues={initialValues}
            validationSchema={FormSchema}
            onSubmit={handleSubmit}
          >
            <Form className={styles.form}>
              <div className={styles.fieldGrid}>
                <div className={styles.fieldspan}>
                  <div className="">
                    <label className={styles.formlabel}>Name</label>
                    <Field
                      className={styles.formfield}
                      id="username"
                      type="text"
                      placeholder="e.g Bitcoin"
                      name="name"
                    />
                    <ErrorMessage name="name">
                      {(errorText) => (
                        <div className={styles.error}>{errorText}</div>
                      )}
                    </ErrorMessage>
                  </div>
                </div>
                <div className={styles.fieldspan}>
                  <div className="">
                    <label className={styles.formlabel}>Symbol</label>
                    <input
                      className={styles.formfield}
                      id="username"
                      type="text"
                      placeholder="e.g BTC"
                      name="symbol"
                    />
                    <ErrorMessage name="symbol">
                      {(errorText) => (
                        <div className={styles.error}>{errorText}</div>
                      )}
                    </ErrorMessage>
                  </div>
                </div>
              </div>
              <div className={styles.fieldGrid}>
                <div className=" col-span-12 m-1">
                  <label className={styles.formlabel}>Description</label>
                  <Field
                    className={styles.formfield}
                    id="username"
                    type="text"
                    placeholder="Description..."
                    name="des"
                  />
                  <ErrorMessage name="des">
                    {(errorText) => (
                      <div className={styles.error}>{errorText}</div>
                    )}
                  </ErrorMessage>
                </div>
              </div>
              <div className={styles.fieldGrid}>
                <div className={styles.fieldspan}>
                  <div className="">
                    <label className={styles.formlabel}>Price in USD</label>
                    <Field
                      className={styles.formfield}
                      id="username"
                      type="text"
                      placeholder="e.g 30$"
                      name="price"
                    />
                    <ErrorMessage name="price">
                      {(errorText) => (
                        <div className={styles.error}>{errorText}</div>
                      )}
                    </ErrorMessage>
                  </div>
                </div>
                <div className={styles.fieldspan}>
                  <div className="">
                    <label className={styles.formlabel}>
                      Launch Date (dd/mm/yyyy)
                    </label>
                    <Field
                      className={styles.formfield}
                      id="username"
                      type="text"
                      placeholder="e.g 24/03/2018"
                      name="date"
                    />
                    <ErrorMessage name="date">
                      {(errorText) => (
                        <div className={styles.error}>{errorText}</div>
                      )}
                    </ErrorMessage>
                  </div>
                </div>
              </div>
              <p className={styles.heading}>Contact Address</p>
              <div className={styles.fieldGrid}>
                <div className={styles.fieldspan}>
                  <label className={styles.formlabel}>Chain</label>
                  <select id="countries" className={styles.formfield}>
                    <option selected className={styles.formlabel}>
                      Select
                    </option>
                    <option value="US">United States</option>
                    <option value="CA">Canada</option>
                    <option value="FR">France</option>
                    <option value="DE">Germany</option>
                  </select>
                </div>
                <div className={styles.fieldspan}>
                  <div className="">
                    <label className={styles.formlabel}>Address</label>
                    <Field
                      className={styles.formfield}
                      id="username"
                      type="text"
                      placeholder="e.g oxacle"
                      name="address"
                    />
                    <ErrorMessage name="address">
                      {(errorText) => (
                        <div className={styles.error}>{errorText}</div>
                      )}
                    </ErrorMessage>
                  </div>
                </div>
              </div>
              <p className={styles.heading}>Contact information</p>
              <div className={styles.fieldGrid}>
                <div className={styles.fieldspan}>
                  <label className={styles.formlabel}>Contact Email</label>
                  <Field
                    className={styles.formfield}
                    id="username"
                    type="text"
                    placeholder="e.g oxacle"
                    name="email"
                  />
                  <ErrorMessage name="email">
                    {(errorText) => (
                      <div className={styles.error}>{errorText}</div>
                    )}
                  </ErrorMessage>
                </div>
                <div className={styles.fieldspan}>
                  <div className="">
                    <label className={styles.formlabel}>Contact Telegram</label>
                    <Field
                      className={styles.formfield}
                      id="username"
                      type="text"
                      placeholder="e.g oxacle"
                      name="contact"
                    />
                    <ErrorMessage name="contact">
                      {(errorText) => (
                        <div className={styles.error}>{errorText}</div>
                      )}
                    </ErrorMessage>
                  </div>
                </div>
              </div>
              <p className={styles.heading}>Links</p>
              <div className={styles.fieldGrid}>
                <div className={styles.fieldspan}>
                  <label className={styles.formlabel}>Website</label>
                  <Field
                    className={styles.formfield}
                    id="username"
                    type="text"
                    placeholder="e.g oxacle"
                    name="website"
                  />
                  <ErrorMessage name="website">
                    {(errorText) => (
                      <div className={styles.error}>{errorText}</div>
                    )}
                  </ErrorMessage>
                </div>
                <div className={styles.fieldspan}>
                  <div className="">
                    <label className={styles.formlabel}>Twitter</label>
                    <Field
                      className={styles.formfield}
                      id="username"
                      type="text"
                      placeholder="e.g oxacle"
                      name="twitter"
                    />
                    <ErrorMessage name="twitter">
                      {(errorText) => (
                        <div className={styles.error}>{errorText}</div>
                      )}
                    </ErrorMessage>
                  </div>
                </div>
              </div>
              <div className={styles.fieldGrid}>
                <div className={styles.fieldspan}>
                  <label className={styles.formlabel}>Telegram</label>
                  <Field
                    className={styles.formfield}
                    id="username"
                    type="text"
                    placeholder="e.g oxacle"
                    name="telegram"
                  />
                  <ErrorMessage name="telegram">
                    {(errorText) => (
                      <div className={styles.error}>{errorText}</div>
                    )}
                  </ErrorMessage>
                </div>
                <div className={styles.fieldspan}>
                  <div className="">
                    <label className={styles.formlabel}>Redit</label>
                    <Field
                      className={styles.formfield}
                      id="username"
                      type="text"
                      placeholder="e.g oxacle"
                      name="redit"
                    />
                    <ErrorMessage name="redit">
                      {(errorText) => (
                        <div className={styles.error}>{errorText}</div>
                      )}
                    </ErrorMessage>
                  </div>
                </div>
              </div>
              <div className={styles.fieldGrid}>
                <div className={styles.fieldspan}>
                  <label className={styles.formlabel}>Discord</label>
                  <Field
                    className={styles.formfield}
                    id="username"
                    type="text"
                    placeholder="e.g oxacle"
                    name="discord"
                  />
                  <ErrorMessage name="discord">
                    {(errorText) => (
                      <div className={styles.error}>{errorText}</div>
                    )}
                  </ErrorMessage>
                </div>
                <div className={styles.fieldspan}>
                  <div className="">
                    <label className={styles.formlabel}>Logo</label>
                    <Field
                      className={styles.formfield}
                      id="username"
                      type="text"
                      placeholder="e.g oxacle"
                      name="logo"
                    />
                    <ErrorMessage name="logo">
                      {(errorText) => (
                        <div className={styles.error}>{errorText}</div>
                      )}
                    </ErrorMessage>
                  </div>
                </div>
                <div className="col-span-12">
                  <div className={styles.fieldspan}>
                    <div className="">
                      <label className={styles.formlabel}>
                        Additional information
                      </label>
                      <Field
                        className={styles.formfield}
                        id="username"
                        type="text"
                        placeholder="e.g oxacle"
                        name="description"
                      />
                      <ErrorMessage name="description">
                        {(errorText) => (
                          <div className={styles.error}>{errorText}</div>
                        )}
                      </ErrorMessage>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-between mt-4 m-2">
                <button className={styles.buttoncancel}>Cancel</button>
                <button className={styles.buttonsave}>Add Coin</button>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default CoinForm;
