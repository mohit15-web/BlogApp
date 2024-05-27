import { createContext, useEffect, useReducer } from "react";
export const BlogContext = createContext();
const vibgyorColors = [
  '#8B00FF', // Violet
  '#4B0082', // Indigo
  '#0000FF', // Blue
  '#00FF00', // Green
  '#FFFF00', // Yellow
  '#FF7F00', // Orange
  '#FF0000', // Red
];

const initialState = {
  blogs: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_BLOG":
      return {
        ...state,
        blogs: [
          ...state.blogs,
          {
            id: action.payload.id,
            title: action.payload.title,
            content: action.payload.content,
            bgColor: vibgyorColors[Math.floor(Math.random() * vibgyorColors.length)],
          },
        ],
      };
    default:
      return state;
  }
};

// eslint-disable-next-line react/prop-types
export const BlogProvider = ({ children }) => {
  const [state, dispatch] = useReducer(
    reducer,
    JSON.parse(localStorage.getItem("blog")) || initialState
  );

  useEffect(() => {
    localStorage.setItem("blog", JSON.stringify(state));
  }, [state]);

  return (
    <BlogContext.Provider value={{ state, dispatch }}>
      {children}
    </BlogContext.Provider>
  );
};
