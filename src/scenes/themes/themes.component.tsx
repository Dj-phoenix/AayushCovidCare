import React, { Component } from 'react';
import { 
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
  SafeAreaView
   } from 'react-native';
   import {
    TopNavigation,TopNavigationAction
  } from '@ui-kitten/components';


import BotAyur from '../../components/BotAayur/botAyur';
import { MenuIcon } from '../../components/icons';
const initialData = [
        {id:1, title: "10 Foods That Boost the Immune System",views:'90',comments:'10',time:"2020-08-01 12:15 pm", image:"https://s3-ap-southeast-1.amazonaws.com/punchtantra/assets/img/fitness-2.jpg", description:"If you’re looking for ways to prevent colds, the flu, and other infections, your first step should be a visit to your local grocery store. Plan your meals to include these 15 powerful immune system boosters..."},
        {id:2, title: "What Citrus fruit can do?",views:'200',comments:'110',time:"2020-11-12 12:00 pm", image:"https://s3-ap-southeast-1.amazonaws.com/punchtantra/assets/img/fitness-1.jpg", description:"Almost all citrus fruits are high in vitamin C. With such a variety to choose from, it’s easy to add a squeeze of this vitamin to any meal..."} ,
        {id:3, title: "When a Cold Becomes Bronchitis",views:'20',comments:'12',time:"2020-08-05 12:21 pm", image:"https://s3-ap-southeast-1.amazonaws.com/punchtantra/assets/img/inner-6.jpg", description:"A cough is a common cold symptom. Your lungs may be irritated, or your body might be trying to get rid of phlegm or mucus. But if you’re still coughing after the cold is gone, call your doctor..."}, 
        {id:4, title: "Coronavirus: What is it and how can I protect myself?",views:'101',comments:'101',time:"2020-09-12 12:00 pm", image:"https://s3-ap-southeast-1.amazonaws.com/punchtantra/assets/img/fitness-3.jpg", description:"A new virus called the severe acute respiratory syndrome coronavirus 2 (SARS-CoV-2) was identified as the cause of a disease outbreak that began in China in 2019. The disease is called coronavirus disease 2019 (COVID-19)..."}, 
        {id:5, title: "What can I do if I am or may be ill with COVID-19?",time:"2020-07-12 12:11 pm",views:'10008',comments:'109',image:"https://s3-ap-southeast-1.amazonaws.com/punchtantra/assets/img/fitness-4.jpg", description:"Stay home from work, school and public areas, except to get medical care..."}, 
        {id:6, title: "Natoque penatibus et magnis",time:"2020-08-12 12:56 pm",views:'9',comments:'1', image:"https://s3-ap-southeast-1.amazonaws.com/punchtantra/assets/img/work-4.jpg", description:"Lorem ipsum  sit amet, consectetuer adipiscing elit. Aenean commodo ligula..."}
        ]

export const ThemesScreen = ({ navigation }): React.ReactElement => {

  const [listData, setListData] = React.useState(initialData);

  const renderDrawerAction = (): React.ReactElement => (
    <TopNavigationAction
      icon={MenuIcon}
      onPress={navigation.toggleDrawer}
    />
  );
  return (
<>
<SafeAreaView style={styles.safeArea}>
    <View style={styles.container}>
       <TopNavigation
        title='Aayush Covid Care'
        leftControl={renderDrawerAction()}
      />
    <FlatList style={styles.list}
      data={listData}
      keyExtractor= {(item) => {
        return item.id;
      }}
      ItemSeparatorComponent={() => {
        return (
          <View style={styles.separator}/>
        )
      }}
      renderItem={(post) => {
        const item = post.item;
        return (
          <View style={styles.card}>
            <Image style={styles.cardImage} source={{uri:item.image}}/>
            <View style={styles.cardHeader}>
              <View>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.description}>{item.description}</Text>
                <View style={styles.timeContainer}>
                  <Image style={styles.iconData} source={{uri: 'https://img.icons8.com/color/96/3498db/calendar.png'}}/>
                  <Text style={styles.time}>{item.time}</Text>
                </View>
              </View>
            </View>
            <View style={styles.cardFooter}>
              <View style={styles.socialBarContainer}>
                <View style={styles.socialBarSection}>
                  <TouchableOpacity style={styles.socialBarButton}>
                    <Image style={styles.icon} source={{uri: 'https://img.icons8.com/material/96/2ecc71/visible.png'}}/>
                    <Text style={styles.socialBarLabel}>{item.views}</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.socialBarSection}>
                  <TouchableOpacity style={styles.socialBarButton}>
                    <Image style={styles.icon} source={{uri: 'https://img.icons8.com/ios-glyphs/75/2ecc71/comments.png'}}/>
                    <Text style={styles.socialBarLabel}>{item.comments}</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        )
      }}/>
  </View>

<BotAyur />

</SafeAreaView>
</>
  );
};

const styles = StyleSheet.create({

  safeArea: {
    flex: 1,
  },
  item: {
    margin: 8,
  },
  evaToggle: {
    margin: 8,
    alignSelf: 'flex-end',
    flexDirection: 'row-reverse',
  },
  container:{
    flex:1,
    marginTop:20,
    padding: 8
  },
  list: {
    paddingHorizontal: 17,
    backgroundColor:"#E6E6E6",
  },
  separator: {
    marginTop: 10,
  },
  /******** card **************/
  card:{
    shadowColor: '#00000021',
    shadowOffset: {
      width: 2
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    marginVertical: 8,
    backgroundColor:"white"
  },
  cardHeader: {
    paddingVertical: 17,
    paddingHorizontal: 16,
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardContent: {
    paddingVertical: 12.5,
    paddingHorizontal: 16,
  },
  cardFooter:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 12.5,
    paddingBottom: 25,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1,
    backgroundColor:"#EEEEEE",
  },
  cardImage:{
    flex: 1,
    height: 150,
    width: null,
  },
  /******** card components **************/
  title:{
    fontSize:18,
    flex:1,
  }, 
  description:{
    fontSize:15,
    color:"#888",
    flex:1,
    marginTop:5,
    marginBottom:5,
  },
  time:{
    fontSize:13,
    color: "#808080",
    marginTop: 5
  },
  icon: {
    width:25,
    height:25,
  },
  iconData:{
    width:15,
    height:15,
    marginTop:5,
    marginRight:5
  },
  timeContainer:{
    flexDirection:'row'
  },
  /******** social bar ******************/
  socialBarContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    flex: 1
  },
  socialBarSection: {
    justifyContent: 'center',
    flexDirection: 'row',
    flex: 1,
  },
  socialBarlabel: {
    marginLeft: 8,
    alignSelf: 'flex-end',
    justifyContent: 'center',
  },
  socialBarButton:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  }
});   
