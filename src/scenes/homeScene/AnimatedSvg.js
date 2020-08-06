
import React from "react";
import { View,Text,Layout } from 'react-native'
import { AnimatedSVGPath } from 'react-native-svg-animations'

class AnimatedSVG extends React.Component {

  render() {
    const d = "M24.3 30C11.4 30 5 43.3 5 50s6.4 20 19.3 20c19.3 0 32.1-40 51.4-40 C88.6 30 95 43.3 95 50s-6.4 20-19.3 20C56.4 70 43.6 30 24.3 30z"
    return (
      <View style={{paddingLeft:80}}>
       <AnimatedSVGPath
          strokeColor={"red"}
          duration={1000}
          strokeWidth={8}
          height={100}
          width={300}
          scale={1.50}
          delay={0}
          d={d}
          loop={true}
          strokeDashArray={[42.76482137044271, 42.76482137044271]}
       />
    <Text category='hint' style={{left: 20}}>0 Device Found.</Text>
    </ View>

    );
  }
}

export default AnimatedSVG;