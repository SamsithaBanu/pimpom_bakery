import moment from "moment";

export const dateFormatStandard = () => {
  return moment().add(5, "days").format("DDMMM,YYYY");
};
