import React from 'react';
import {Text} from 'react-native';

/*location, store name, photo later*/
const getPriceInformation = (price, name) => {
    return name + " is $" + price;
};
const Item = () => {
   return <Text> The price of {getPriceInformation(price,name)}</Text>; 
}

export default Item;