import React, {useState, useEffect} from 'react';
import {View, Text,  ScrollView, Alert} from 'react-native';
import moment from 'moment';
import ActionBar from '../../shared/footer/ActionBar';
import styles from './EstilosDash';
import firebase from '../../utils/firebase';
import 'firebase/firestore';
import ListPosts from '../../components/ListPosts';

firebase.firestore().settings({experimentalForceLongPolling: true});
const db = firebase.firestore(firebase);

const  Dashboard = (props) => {
  const { user } = props;
  const [showList, setShowList] = useState(true);

  return (
    <View style={styles.container}>
      {/* {showList ? (
        <ScrollView style={styles.scrollView}>
          {birthday.map((item, index) => (
            <Birthday
              key={index}
              birthday={item}
              daleteBirthday={daleteBirthday}
            />
          ))}
          {pasatBirthday.map((item, index) => (
            <Birthday
              key={index}
              birthday={item}
              daleteBirthday={daleteBirthday}
            />
          ))}
        </ScrollView>
      ) : (
        <AddBirthday
          user={user}
          setShowList={setShowList}
          setReloadData={setReloadData}
        />
      )} */}
      <ActionBar showList={showList} setShowList={setShowList} />
      <View style={styles.scrollView}>
      {/* <ScrollView> */}
        <ListPosts />
      {/* </ScrollView> */}
      </View>
    </View>
  );
}

export default  Dashboard;