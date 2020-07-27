import React, { Component } from 'react';
import { connect } from 'react-redux';

import Button from '../../components/customButton/customButton';
import Spinner from '../../components/UI/Spinner';
import  './ContactUs.css';
import Input from '../../components/UI/Input/Input';
// import withErrorHandler from '../../../hoc/withErrorHandler/withErrorHandler'
// import * as actions from '../../../store/actions/index';
 import {updatedObject, checkValidity} from '../../shared/utilities';

class ContactUs extends Component {
    state = {
        orderForm: {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Name'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            street: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Street'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            zipCode: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'ZIP Code'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 5,
                    maxLength: 5,
                    isNumeric: true
                },
                valid: false,
                touched: false
            },
            country: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Country'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Your E-Mail'
                },
                value: '',
                validation: {
                    required: true,
                    isEmail: true
                },
                valid: false,
                touched: false
            },
            deliveryMethod: {
                elementType: 'select',
                elementConfig: {
                    options: [
                        {value: 'fastest', displayValue: 'Fastest'},
                        {value: 'cheapest', displayValue: 'Cheapest'}
                    ]
                },
                value: 'fastest',
                validation: {},
                valid: true
            }
        },
        formIsValid: false
    }

    
        inputChangedHandler = (event, inputIdentifier) => {
        
            const updatedFormElement = updatedObject(this.state.orderForm[inputIdentifier], {
                value: event.target.value,
                valid: checkValidity(event.target.value, this.state.orderForm[inputIdentifier].validation),
                touched: true
            });
            const updatedOrderForm = updatedObject(this.state.orderForm, {
                [inputIdentifier]: updatedFormElement
            });
            
            let formIsValid = true;
            for (let inputIdentifier in updatedOrderForm) {
                formIsValid = updatedOrderForm[inputIdentifier].valid && formIsValid;
            }
            this.setState({orderForm: updatedOrderForm, formIsValid: formIsValid});
        }
    render () {
        const formElementsArray = [];
        for (let key in this.state.orderForm) {
            formElementsArray.push({
                id: key,
                config: this.state.orderForm[key]
            });
        }
        let form = (
            <form onSubmit={this.contactDataHandler}>
                {formElementsArray.map(formElement => (
                    <Input 
                        key={formElement.id}
                        elementType={formElement.config.elementType}
                        elementConfig={formElement.config.elementConfig}
                        value={formElement.config.value}
                        invalid={!formElement.config.valid}
                        shouldValidate={formElement.config.validation}
                        touched={formElement.config.touched}
                        changed={(event) => this.inputChangedHandler(event, formElement.id)} />
                ))}
                <Button btnType="Success" disabled={!this.state.formIsValid}>إرسال</Button>
            </form>
        );
        if ( this.props.loading ) {
            form = <Spinner />;
        }
        return (
            <div className="ContactData">
                <h4>سعداء بتواصلك مع فريق مترا</h4>
                {form}
            </div>
        );
    }
}

// const mapStateToProps = state => {
//     return {
//         ings: state.burgerBuilder.ingredients,
//         price: state.burgerBuilder.totalPrice,
//         loading: state.order.loading,
//         token: state.auth.token,
//         userId: state.auth.userId
//     }
// };

// const mapDispatchToProps = dispatch => {
//     return {
//         onOrderBurger: (orderData, token) => dispatch(actions.purchaseBurger(orderData, token))
//     };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(ContactData, axios));
export default ContactUs;