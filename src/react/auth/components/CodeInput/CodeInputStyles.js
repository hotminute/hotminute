import {StyleSheet, Platform} from 'react-native';

import { Colors } from '../../../../config';

export const CELL_SIZE = 50;
export const CELL_BORDER_RADIUS = 8;
export const DEFAULT_CELL_BG_COLOR = Colors.textLightGray;
export const NOT_EMPTY_CELL_BG_COLOR = Colors.primary;
export const ACTIVE_CELL_BG_COLOR = Colors.text;

const CodeInputStyles = StyleSheet.create({
  codeFiledRoot: {
    height: CELL_SIZE,
    marginTop: 30,
    paddingHorizontal: 0,
    justifyContent: 'space-between',
  },
  cell: {
    margin: 4.0,
    height: CELL_SIZE,
    width: CELL_SIZE,
    lineHeight: CELL_SIZE - 5,
    ...Platform.select({web: {lineHeight: 65}}),
    fontSize: 30,
    textAlign: 'center',
    borderRadius: CELL_BORDER_RADIUS,
    color: Colors.primary,
    backgroundColor: '#fff',

    // IOS
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    // Android
    elevation: 3,
  },

  // =======================

  root: {
    minHeight: 800,
    padding: 20,
  },
  title: {
    paddingTop: 50,
    color: '#000',
    fontSize: 25,
    fontWeight: '700',
    textAlign: 'center',
    paddingBottom: 40,
  },
  icon: {
    width: 217 / 2.4,
    height: 158 / 2.4,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  subTitle: {
    paddingTop: 30,
    color: '#000',
    textAlign: 'center',
  },
  nextButton: {
    marginTop: 40,
    borderRadius: 80,
    height: 80,
    backgroundColor: '#3557b7',
    justifyContent: 'center',
    minWidth: 360,
    marginBottom: 100,
  },
  nextButtonText: {
    textAlign: 'center',
    fontSize: 20,
    color: '#fff',
    fontWeight: '700',
  },
});

export default CodeInputStyles;