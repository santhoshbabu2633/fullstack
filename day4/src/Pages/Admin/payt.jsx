import React from 'react'
import Navbar from '../../Components/Navbar'
import Footer from '../../Components/Footer'
import '../../assets/css/ctable.css';
const payt = () => {
  return (
    <div>
        <Navbar></Navbar>
      <table>
        <thead>
          <tr>
            <th>Payment Id</th>
            <th>Student Id</th>
            <th>Course Id</th>
            <th>Status</th>
            <th>Total Amount</th>
            <th>Payment Date</th>
            <th>Mode of Payment</th>
            
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>3</td>
            <td>3</td>
            <td>pending</td>
            <td>INR 6,250</td>
            <td>10/2/24</td>
            <td>UPI</td>
            
        
          </tr>
          <tr>
            <td>2</td>
            <td>2</td>
            <td>12</td>
            <td>payed</td>
            <td>INR 10,250</td>
            <td>15/2/24</td>
            <td>Credit Card</td>
            
        
          </tr>
          <tr>
            <td>3</td>
            <td>1</td>
            <td>4</td>
            <td>payed</td>
            <td> INR 16,250</td>
            <td>9/3/24</td>
            <td>Debit Card</td>
            
        
          </tr>
          <tr>
            <td>4</td>
            <td>3</td>
            <td>7</td>
            <td>pending</td>
            <td>INR 4,250</td>
            <td>2/3/24</td>
            <td>UPI</td>
            
        
          </tr>
          
          
        </tbody>
      </table>
      <Footer></Footer>
    </div>
  )
}

export default payt