import React, { Component } from "react";
import axios from "axios";
import MenuRecordsList from './MenuRecordsList';

class FoodMenu extends Component {
    
    constructor(props) {
        super(props);
        this.state =  {menus:[]};
    }


    componentDidMount() {
        axios.get('http://localhost:8888/reactJsCRUD/FoodCRUD/munuList.php')
         .then(response=> {
             this.setState( {menus:response.data});
         })
         .catch(function (error) {
             console.log(error);
         });
    }

    menuList() {
        return this.state.menus.map(function(object,i) {
            return <MenuRecordsList obj ={object} key = {i} />;
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