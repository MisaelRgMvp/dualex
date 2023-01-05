import React, { useState } from 'react'
import {Avatar, Image} from 'antd'
const random = Math.floor((Math.random() * (8 - 0 + 1)) + 0);
const Porfile =() => {
    var name = "Pablo"
    const ColorList = ['#f56a00', '#7265e6', '#ffbf00', '#00a2ae', '#800000', '#808000', '#808000', '#000080', '#808080	'];
    const GapList = [4, 3, 2, 1];
    const [color, setColor] = useState(ColorList[0]);
    const [gap, setGap] = useState(GapList[0]);
    
    const imageProfile =null;
    console.log(random);

    const PImage = () =>{
        if(imageProfile){
            return(
                <Avatar size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }} src={<Image preview={false} src={imageProfile} />} />
                
                )
            }
            else{
                setColor( ColorList[random]);
            var firstLetter = name.charAt(0);
            return(
                <Avatar size={{ xs: 8, sm: 12, xl: 54 }} style={{background: color}}><p id='letter'>{firstLetter}</p></Avatar>

            )
    }
    }
  return (
    <div>
    <PImage />
    </div>
  )
}
export default Porfile;
