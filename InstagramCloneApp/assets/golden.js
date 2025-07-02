import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  /* ----------------- General Container ----------------- */
  container: {
    flex: 1,
    paddingTop: 0,
    backgroundColor: '#fff',
  },
  logo: {
    width: 120,
    height: 120,
  },
  notch: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  containerLogo: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 30,
    paddingTop: 10,
    flexDirection: 'row',
  },
  containerRight: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 80,
    position: 'relative',
  },
  heartIcon: {
    width: 10,
    height: 10,
    borderRadius: 50,
    backgroundColor: 'red',
    position: 'absolute',
    left: 18,
    top: 3,
    borderWidth: 2,
    borderColor: '#fff',
  },
  /* ----------------- Login CSS ----------------- */
  loginContainer: {
    flex: 1, 
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
     
  },
  loginLogo: {
    width: 180,
    height: 80,
    marginBottom: 40,
  },
 
  loginInput: {
    width: '95%',
    height: 45,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    marginBottom: 12,
    paddingHorizontal: 10,
    backgroundColor: '#fafafa', 
  },
  loginButton: {
     width: '95%',
    backgroundColor: '#3897f0',
    padding: 12,
    borderRadius: 5,
    alignItems: 'center',
    marginVertical: 10,
    marginHorizontal: 10,
  },
  loginText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  forgotText: {
    color: '#1e90ff',
    marginTop: 10,
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
    width: '100%',
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: '#ddd',
  },
  orText: {
    marginHorizontal: 10,
    color: '#999',
    fontWeight: 'bold',
  },
  fbLogin: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 25,
  },
  fbIcon: {
    width: 20,
    height: 20,
    marginRight: 8,
  },
  fbText: {
    color: '#3b5998',
    fontWeight: 'bold',
  },
  signupContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  /* ----------------- Panel / Story ----------------- */
  panelBody: {},
  panelStory: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    backgroundColor: '#fff',
    paddingTop: 10,
    paddingRight: 15,
    paddingBottom: 10,
    paddingLeft: 15,
  },
  panelStoryBox: {
    marginRight: 10,
    marginLeft: 10,
    elevation: 5,
  },
  borderStyle: {
    width: 64,
    height: 64,
    borderWidth: 1,
    borderColor: 'red',
    borderStyle: 'solid',
    padding: 2,
    borderRadius: 50,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  panelStoryImg: {
    width: '100%',
    height: '100%',
    borderRadius: 50,
    marginLeft: 'auto',
    marginRight: 'auto',
    position: 'relative',
  },
  positionIcon: {
    position: 'relative',
    bottom: 25,
    left: 35,
    backgroundColor: 'blue',
    width: 28,
    height: 28,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  circlePlus: {
    color: 'white',
    fontSize: 12,
    marginTop: 3,
    fontWeight: '600',
  },
  panelStoryTitle: {
    fontSize: 10,
    padding: 5,
    fontWeight: '700',
  },

  /* ----------------- Card / Post ----------------- */
  cardList: {
    marginBottom: 20,
  },
  cardListHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 10,
  },
  cardListHeaderLeft: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  cardListHeaderLeftImg: {
    width: 48,
    height: 48,
    marginRight: 10,
    borderRadius: 50,
  },
  cardListHeaderLeftTitle: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  cardListHeaderLeftLocate: {
    fontSize: 11,
  },
  cardListHeaderRight: {
    padding: 10,
  },
  cardListBody: {
    paddingHorizontal: 10,
  },
  cardListBodyImg: {
    width: '100%',
    height: 350,
    borderRadius: 36,
  },
  leftIcon: {
    paddingLeft: 10,
    paddingRight: 2,
  },
  cardListFooter: {
    backgroundColor: '#fff',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
    paddingBottom: 10,
  },
  cardListFooterBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardListFooterLeft: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  cardListFooterRight: {
    padding: 0,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },

  /* ----------------- Profile Info ----------------- */
  username: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  userArrow: {
    marginTop: 6,
  },
  profileInfo: {
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  profileRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  profileUser: {
    width: 90,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 50,
  },
  profileDataList: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  dataListItem: {
    paddingHorizontal: 10,
    height: 50,
  },
  dataListItemBold: {
    fontWeight: 'bold',
    marginBottom: 0,
    fontSize: 14,
    textAlign: 'center',
    color: '#000',
  },
  dataListItemRegular: {
    fontSize: 12,
    textAlign: 'center',
  },
  profileInfoText: {
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  profileTxt: {
    paddingVertical: 2,
    color: '#000',
  },
  profileInfoBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 10,
    marginHorizontal: 5,
  },
  button: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#333',
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 8,
    flex: 1,
    marginHorizontal: 5,
  },
  buttonText: {
    fontWeight: '600',
    fontSize: 14,
    textAlign: 'center',
  },

  /* ----------------- Reels Screen ----------------- */
  reelsLogo: {
    flexDirection: 'row',
  },
  reelsArrow: {
    marginTop: 4,
  },
  overlay: {
    position: 'absolute',
    bottom: 200,
    left: 10,
    right: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    zIndex: 99,
  },
  leftInfo: {
    width: '75%',
  },
  usernames: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  caption: {
    color: 'white',
    marginTop: 4,
  },
  rightIcons: {
    alignItems: 'center',
  },
  iconText: {
    color: 'white',
    fontSize: 12,
    marginBottom: 8,
  },
});

export default styles;
