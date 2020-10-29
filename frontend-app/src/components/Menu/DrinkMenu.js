import React, { Component } from "react";
import axios from "axios";
import DrinkMenuRecordsList from './DrinkMenuRecordsList';

class FoodMenu extends Component {
    
    constructor(props) {
        super(props);
        this.state =  {DrinkMenus:[]};
    }


    componentDidMount() {
        axios.get('http://localhost:8888/reactJsCRUD/FoodCRUD/drinkMenuList.php')
         .then(response=> {
             this.setState( {DrinkMenus:response.data});
         })
         .catch(function (error) {
             console.log(error);
         });
    }

    menuList() {
        return this.state.DrinkMenus.map(function(object,i) {
            return <DrinkMenuRecordsList obj ={object} key = {i} />;
        });
    }

    render() { 
        return (  
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Drink Name</th>
                            <th>Drink Size</th>
                            <th>Drink Price</th>
                            <th>Drink Description</th>
                        </tr>
                    </thead>

                    <tbody>
                        {this.menuList()}
                    </tbody>
                </table>
            </div>
        );
    }
}
 
export default FoodMenu;