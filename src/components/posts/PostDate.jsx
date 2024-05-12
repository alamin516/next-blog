
const PostDate = ({createdAt}) => {

    const calculateTimeAgo = (dateString) => {
      const currentDate = new Date();
      const date = new Date(dateString);
      const differenceInTime = currentDate.getTime() - date.getTime();
      const seconds = Math.floor(differenceInTime / 1000);
      if (seconds < 60) {
        return `${seconds} Second${seconds !== 1 ? 's' : ''} Ago`;
      }
      const minutes = Math.floor(seconds / 60);
      if (minutes < 60) {
        return `${minutes} Minute${minutes !== 1 ? 's' : ''} Ago`;
      }
      const hours = Math.floor(minutes / 60);
      if (hours < 24) {
        return `${hours} Hour${hours !== 1 ? 's' : ''} Ago`;
      }
      const days = Math.floor(hours / 24);
      if (days < 30) {
        return `${days} Day${days !== 1 ? 's' : ''} Ago`;
      }
      const months = Math.floor(days / 30);
      if (months < 12) {
        return `${months} Month${months !== 1 ? 's' : ''} Ago`;
      }
      const years = Math.floor(months / 12);
      return `${years} Year${years !== 1 ? 's' : ''} Ago`;
    };
  
    const dateString = createdAt; 
    const timeAgo = calculateTimeAgo(dateString);
  
    return (
      <>
        {timeAgo}
      </>
    );
  };
  
  export default PostDate;