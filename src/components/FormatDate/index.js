const FormatDate = ({ date }) => {
  const dateObj = new Date(date);

  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const formatted = new Intl.DateTimeFormat("en-US", options).format(dateObj);

  return <>{formatted}</>;
};

export default FormatDate;
