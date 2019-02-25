import React from 'react';
import { scroller } from 'react-scroll';

import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

const SideDrawer = (props) => {

    const scrollToElement = (element) => {
        scroller.scrollTo(element,{
            duration: 1500,
            delay:100,
            smooth: true,
            offset: -150
        });
        props.onClose(false)
    }

    return (
        <Drawer
            anchor="right"
            open={props.open}
            onClose={()=> props.onClose(false)}
        >
            <List component="nav">
                <ListItem button onClick={()=> scrollToElement('featured')}>
                    Amostras
                </ListItem>

                <ListItem button onClick={()=> scrollToElement('venuenfo')}>
                    Venha Conhecer
                </ListItem>

                <ListItem button onClick={()=> scrollToElement('highlights')}>
                    Quem Somos
                </ListItem>

                <ListItem button onClick={()=> scrollToElement('pricing')}>
                    Produtos
                </ListItem>

                <ListItem button onClick={()=> scrollToElement('location')}>
                    Localização
                </ListItem>

            </List> 
        </Drawer>
    );
};

export default SideDrawer;