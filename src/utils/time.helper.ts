import moment from "moment";

const isToday = (dateStr: string) => {
	return moment(dateStr).isSame(moment(), "day");
};

const relativeTime = (dateStr: string): string => {
	return isToday(dateStr) ? moment(dateStr).fromNow() : moment(dateStr).format("MM/DD/YYYY");
};

export default {
	relativeTime
};
