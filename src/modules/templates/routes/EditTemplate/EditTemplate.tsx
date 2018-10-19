import * as React from 'react';
import {HeadContainer, Toolbar, UnduRedoButton} from '../../../../components';

class EditTemplate extends React.Component{

    render(){
        return <div>
            <HeadContainer>
                <Toolbar>
                    <div className="group">
                        <UnduRedoButton/>
                    </div>
                </Toolbar>
                
            </HeadContainer>
        </div>
    }
}

export default EditTemplate;
