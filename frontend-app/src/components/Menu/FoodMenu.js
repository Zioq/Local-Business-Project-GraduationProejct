import React, { Component } from "react";
import axios from "axios";
import FoodMenuRecordsList from './FoodMenuRecordsList';

class FoodMenu extends Component {
    
    constructor(props) {
        super(props);
        this.state =  {FoodMenus:[]};
    }


    componentDidMount() {
        axios.get('http://localhost:8888/reactJsCRUD/FoodCRUD/foodMenuList.php')
         .then(response=> {
             this.setState( {FoodMenus:response.data});
         })
         .catch(function (error) {
             console.log(error);
         });
    }

    menuList() {
        return this.state.FoodMenus.map(function(object,i) {
            return <FoodMenuRecordsList obj ={object} key = {i} />;
        });
    }

    render() { 
        return (  
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Food Name</th>
                            <th>Food Size</th>
                            <th>Food Price</th>
                            <th>Food Description</th>
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