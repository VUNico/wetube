// global
const HOME = "/";
const JOIN = "/join";
const LOGIN = "/login";
const LOGOUT = "/logout";
const SEARCH = "/search";

// user
const USERS = "/users";
const USER_DETAIL = "/:id";
const EDIT_PROFILE = "/:id/edit-profile";
const CHANGE_PASSWORD = "/:id/change-password";

// video
const VIDEOS = "/videos";
const UPLOAD = "/upload";
const VIDEO_DETAIL = "/:id";
const EDIT_VIDEO = "/:id/edit";
const DELETE = "/:id/delete";

const routes = {
  home: HOME,
  join: JOIN,
  login: LOGIN,
  logout: LOGOUT,
  search: SEARCH,
  users: USERS,
  userDetail: USER_DETAIL,
  editProfile: EDIT_PROFILE,
  changePassword: CHANGE_PASSWORD,
  videos: VIDEOS,
  upload: UPLOAD,
  videoDetail: VIDEO_DETAIL,
  editVideo: EDIT_VIDEO,
  delete: DELETE,
};

export default routes;