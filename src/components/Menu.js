import React from 'react';
import './Menu.css'; 

const Menu = () => {
  return (
    <div className="menu">
      <h2>Menu</h2>
      <table>
        <thead>
          <tr>
            <th>Dish</th>
           
            <th>Price (₹)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan="3" className="category"></td>
          </tr>
          <tr>
            <td>Thukpa (Noodle soup with vegetables)</td>
            
            <td>200</td>
          </tr>
          <tr>
            <td>Litti Chokha (Stuffed flatbread with a side dish of mashed vegetables)</td>
        
            <td>240</td>
          </tr>
          <tr>
            <td>Fara (Crispy fried lentil fritters)</td>
            
            <td>100</td>
          </tr>
          <tr>
            <td>Dhaam ( multi-course vegetarian feast)</td>
         
            <td>400</td>
          </tr>
          <tr>
            <td>Thalipeeth(Savory multigrain flatbread with thecha)</td>
          
            <td>190</td>
          </tr>          
          <tr>
            <td>Sarso ka saag with makke ki roti</td>
        
            <td>200</td>
          </tr>
          <tr>
            <td>payasam (sweet rice porridge with dry fruit toppings)</td>
           
            <td>250</td>
          </tr>
          <tr>
            <td>Chole Bhature (A spicy chickpea curry with deep fried leavened bread)</td>
 
            <td>180</td>
          </tr>
          <tr>
            <td>Beguni (Fried Eggplant Fritters)</td>
            <td>130</td>
          </tr>
          <tr>
            <td>Appam (pancakes with vegetable stew, chuttneys)</td>
       
            <td>180</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Menu;




