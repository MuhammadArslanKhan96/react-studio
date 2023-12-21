'use client';
// ======Imports============
import { ReactNode, createContext, useEffect, useReducer } from 'react';
import { ETypes, dark, light } from '@/theme';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import ContextMenu from '@/components/ContextMenu';


// ======Initital State============
const initialState = {
  podcast: 'Podcast',
  theme: {
    mode: 'dark',
    backgroundColor: dark,
    textColor: 'white',
  },

  contextMenu: {
    clientX: 0,
    clientY: 0,
    display: false,
  },
  keyPress: {
    key: '',
    shiftKey: false,
  },
  showAnnotations: false,
  enableAnnotations: true,
  annotations: [],
  dialogBox: false,
  event_Emitter: {},
  setEventEmitter: () => {},
  themeMode: () => {},
  closeContextMenu: () => {},
  changeTitle: () => {},
  setAnnotations: () => {},
  setShowAnnotations: () => {},
  setEnableAnnotations: () => {},
  setDialogBox: () => {},
};

// ======Reducers============

function reducer(state, action) {
  const { type, payload } = action;

  switch (type) {
    case ETypes.THEME_DARK:
      return {
        ...state,
        theme: { mode: 'dark', backgroundColor: dark, textColor: 'white' },
      };

    case ETypes.THEME_LIGHT:
      return {
        ...state,
        theme: { mode: 'light', backgroundColor: light, textColor: 'black' },
      };

    case ETypes.CONTEXT_MENU:
      return { ...state, contextMenu: payload };
    case ETypes.CLOSE_CONTEXT_MENU:
      return {
        ...state,
        contextMenu: { ...state.contextMenu, display: false },
      };

    case ETypes.KEY_PRESS:
      return { ...state, keyPress: payload };
    case ETypes.EVENT_EMITTER:
      return { ...state, event_Emitter: payload };
    case ETypes.PODCAST_TITLE:
      return { ...state, podcast: payload };
    case ETypes.ANNOTATIONS:
      return { ...state, annotations: payload };
    case ETypes.SETSHOWANNOTATIONS:
      return { ...state, showAnnotations: payload };
    case ETypes.SETENEABLEANNOTATIONS:
      return { ...state, enableAnnotations: payload };
    case ETypes.SETDIALOGBOX:
      return { ...state, dialogBox: payload };
    default:
      return state;
  }
}
const ThemeSettings = createContext({
  ...initialState,
});

export const SettingsContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const setEventEmitter = (payload) =>
    dispatch({
      type: ETypes.EVENT_EMITTER,
      payload,
    });

  // Change theme mode
  const themeMode = () => {
    const { mode } = state.theme;
    if (mode === 'dark') {
      return dispatch({ type: ETypes.THEME_LIGHT, payload: null });
    }
    dispatch({ type: ETypes.THEME_DARK, payload: null });
  };

  // close context menu
  const closeContextMenu = () => {
    dispatch({
      type: ETypes.CLOSE_CONTEXT_MENU,
      payload: null,
    });
  };

  // Change podcast Title
  const changeTitle = (payload) => {
    dispatch({
      type: ETypes.PODCAST_TITLE,
      payload,
    });
  };

  // get Annotations data
  function setAnnotations(payload) {
    dispatch({
      type: ETypes.ANNOTATIONS,
      payload,
    });
  }

  // Set show annotations on/off
  function setShowAnnotations(payload) {
    dispatch({
      type: ETypes.SETSHOWANNOTATIONS,
      payload,
    });
  }
  // Set Enable annotations buttons on/off
  function setEnableAnnotations(payload) {
    dispatch({
      type: ETypes.SETENEABLEANNOTATIONS,
      payload,
    });
  }

  // Handle Modal
  function setDialogBox(payload) {
    dispatch({
      type: ETypes.SETDIALOGBOX,
      payload,
    });
  }

  // handle events
  useEffect(() => {
    // context menu event listener
    const editor = document.getElementById('editor');
    if (editor) {
      editor.oncontextmenu = (e) => {
        e.preventDefault();
        const { clientX, clientY } = e;
        const display = true;
        const value = { clientX, clientY, display };
        dispatch({
          type: ETypes.CONTEXT_MENU,
          payload: value,
        });
      };
    }

    // on key press event listener
    window.onkeydown = (event) => {
      const { key, shiftKey, code } = event;

      dispatch({
        type: ETypes.KEY_PRESS,
        payload: { key, shiftKey, code },
      });
    };
  }, []);

  const {
    theme: { mode, backgroundColor },
  } = state;
  const theme = createTheme({
    palette: {
      mode,
      background: {
        default: backgroundColor,
      },
    },
  });

  return (
    <ThemeSettings.Provider
      value={{
        ...state,
        themeMode,
        closeContextMenu,
        setEventEmitter,
        changeTitle,
        setShowAnnotations,
        setEnableAnnotations,
        setAnnotations,
        setDialogBox,
      }}
    >
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ContextMenu
          position={state.contextMenu}
          closeContextMenu={closeContextMenu}
        />
        {children}
      </ThemeProvider>
    </ThemeSettings.Provider>
  );
};

export default ThemeSettings;
