const instance = axios.create({
  baseURL: "/api/meetings",
});
const MeetingsAPI = {
  getMeetingsData(docName, date, month) {
    return instance.get("/getMeeting/" + docName + "/" + date + "/" + month).then((response) => {
      return response.data;
    });
  },
  getAllMeetings() {
    return instance.get("/").then((response) => {
      return response.data;
    });
  },
  createMeeting(userName, date, month, time, docName, number, info) {
    return instance
      .post("/create", { userName, date, month, time, docName, number, info })
      .then((response) => {
        return response.data;
      });
  },
};
