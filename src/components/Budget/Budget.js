import React, { Component } from 'react';
import Background from './../shared/Background/Background'
import Chart1 from './../shared/Chart1';
import Chart2 from './../shared/Chart2';
import AddPurchase from './../shared/AddPurchase';
import DisplayPurchases from './../shared/DisplayPurchases';
import Loading from './../shared/Loading/Loading';
import Nav from './../shared/Nav';
import { connect } from 'react-redux'
import requestUserData from './../../ducks/userReducer'
import { requestBudgetData, addPurchase, removePurchase } from './../../ducks/budgetReducer'
import './Budget.css';


class Budget extends Component {
  componentDidMount() {
    this.props.requestUserData(),
      this.props.requestBudgetData()
  }

  render() {
    const { loading, purchases, budgetLimit } = this.props.budget
    const { fristName, lastName } = this.props.user

    return (
      <Background>
        {loading ? <Loading /> : null}
        <div className='budget-container'>
          <Nav fristName={fristName} lastName={lastName} />
          <div className='content-container'>
            <div className="purchases-container">
              <AddPurchase addPurchase={addPurchase} />
              <DisplayPurchases purchases={purchases} removePurchase={removePurchase} />
            </div>
            <div className='chart-container'>
              <Chart1 purchases={purchases} budgetLimit={budgetLimit} />
              <Chart2 purchases={purchases} />
            </div>
          </div>
        </div>
      </Background>
    )
  }
}

const mapStateToProps = (reduxState) => {
  return {
    budget: reduxState.budget,
    user: reduxState.user
  }
}

export default connect(mapStateToProps, { requestUserData, requestBudgetData, addPurchase, removePurchase })(Budget);
