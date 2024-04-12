import React, { useState } from 'react';
import './Signup.css';
import { Link, useNavigate, useParams } from 'react-router-dom';
import check from './pictures/check-2.png';
import down from './pictures/down.png';

const Payment = () => {
    const navigate = useNavigate();
    const{ user_id, patient_id } = useParams();
    console.log(useParams());
    console.log("user_id and patient_id from useParams:", user_id, patient_id);
    const [contactInfo, setContactInfo] = useState({
        fullName: '',
        phoneNumber: '',
    });

    const [paymentInfo, setPaymentInfo] = useState({
        cardType: '',
        cardNumber: '',
        nameOnCard: '',
        expirationMonth: '',
        expirationYear: '',
    });

    const [isCardTypeOpen, setIsCardTypeOpen] = useState(false);
    const [isMonthOpen, setIsMonthOpen] = useState(false);
    const [isYearOpen, setIsYearOpen] = useState(false);
    const cardTypeOptions = ['Visa', 'Mastercard', 'American Express'];
    const months = Array.from({ length: 12 }, (_, i) => ({ label: `${i + 1}`, value: `${i + 1}` }));
    const years = Array.from({ length: 10 }, (_, i) => ({ label: `${new Date().getFullYear() + i}`, value: `${new Date().getFullYear() + i}` }));

    const handleContactInput = (e) => {
        setContactInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handlePaymentInput = (e) => {
        setPaymentInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handlePaymentSubmit = (e) => {
        e.preventDefault();
        console.log('Full Name:', contactInfo.fullName);
        console.log('Phone Number:', contactInfo.phoneNumber);
        console.log('Card Type:', paymentInfo.cardType);
        console.log('Card Number:', paymentInfo.cardNumber);
        console.log('Name on Card:', paymentInfo.nameOnCard);
        console.log('Expiration Month:', paymentInfo.expirationMonth);
        console.log('Expiration Year:', paymentInfo.expirationYear);
        console.log('CVC:', paymentInfo.cvc);
        navigate('/payment-details');
    };

    const handleCardTypeSelect = (cardType) => {
        setPaymentInfo((prev) => ({ ...prev, cardType }));
        setIsCardTypeOpen(false); // Close the dropdown after selection
    };
    
    return (
        <div className="account-container2">
            <div className="account-header">Payment Page</div>
            <form action="" onSubmit={handlePaymentSubmit}>
                <div className="form-header">Contact Information</div>
                <div className="account-info">
                    <div>
                        <label htmlFor="fullName">Full Name:</label><br />
                        <input className="full-name-box" type="text" name="fullName" onChange={handleContactInput} required />
                    </div>
                    <div>
                        <label htmlFor="phoneNumber">Phone Number:</label><br />
                        <input className="phone-number-box" type="tel" name="phoneNumber" onChange={handleContactInput} pattern="[0-9]{10}" placeholder="XXX-XXX-XXXX" required />
                    </div>
                </div>

                <div className="form-header">Account Information</div>

                <div className="account-info">
                    <label htmlFor="cardType">Card Type:</label><br />
                    <div className="user-container">
                        <div className="bubbles3">
                            <button type="button" className="select-user-role" onClick={() => setIsCardTypeOpen(!isCardTypeOpen)}>
                                {paymentInfo.cardType ? paymentInfo.cardType : 'Select Card Type'}
                                <img className="down-pic" src={down} alt="Down" />
                            </button>
                            <ul className="list-items" style={{ display: isCardTypeOpen ? 'block' : 'none' }}>
                                {cardTypeOptions.map((cardType) => (
                                    <li key={cardType} className="item" onClick={() => handleCardTypeSelect(cardType)}>
                                        <span className="checkboxes">
                                            {paymentInfo.cardType === cardType && <img className="check-pic" src={check} alt="Check" width="10" height="10" />}
                                        </span>
                                        <span className="item-text">{cardType}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="account-info">
                    <div>
                        <label htmlFor="cardNumber">Card Number:</label><br />
                        <input className="card-number-box" type="text" name="cardNumber" onChange={handlePaymentInput} required />
                    </div>
                    <div>
                        <label htmlFor="nameOnCard">Name on Card:</label><br />
                        <input className="name-on-card-box" type="text" name="nameOnCard" onChange={handlePaymentInput} required />
                    </div>
                    <div>
                        <div >

                            <label htmlFor="expirationMonth">Expiration Month:</label><br />
                            <div className="user-container">
                                <div className="bubbles3">
                                    <button type="button" className="select-user-role" onClick={() => setIsMonthOpen(!isMonthOpen)}>
                                        {paymentInfo.expirationMonth ? paymentInfo.expirationMonth : 'Select Month'}
                                        <img className="down-pic" src={down} alt="Down" />
                                    </button>
                                    <ul className="list-items" style={{ display: isMonthOpen ? 'block' : 'none' }}>
                                        {months.map((month) => (
                                            <li key={month.value} className="item" onClick={() => setPaymentInfo((prev) => ({ ...prev, expirationMonth: month.label }))}>
                                                <span className="item-text">{month.label}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div>
                            <label htmlFor="expirationYear">Expiration Year:</label><br />
                            <div className="user-container">
                                <div className="bubbles3">
                                    <button type="button" className="select-user-role" onClick={() => setIsYearOpen(!isYearOpen)}>
                                        {paymentInfo.expirationYear ? paymentInfo.expirationYear : 'Select Year'}
                                        <img className="down-pic" src={down} alt="Down" />
                                    </button>
                                    <ul className="list-items" style={{ display: isYearOpen ? 'block' : 'none' }}>
                                        {years.map((year) => (
                                            <li key={year.value} className="item" onClick={() => setPaymentInfo((prev) => ({ ...prev, expirationYear: year.label }))}>
                                                <span className="item-text">{year.label}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="cvc">CVC:</label><br />
                        <input className="cvc-box" type="text" name="cvc" onChange={handlePaymentInput} required style={{ width: '80px', marginLeft: '5px' }} />
                    </div>
                </div>


                <div className="submission">
                    <button className="create-acct-button">Complete and Pay</button>
                    <p className="cancel-link">
                        <p><Link className="dashboard-link" to={`/dashboard-patient/${user_id}/${patient_id}`}>Cancel</Link></p>
                    </p>
                </div>
            </form>
        </div>
    );
};

export default Payment;
