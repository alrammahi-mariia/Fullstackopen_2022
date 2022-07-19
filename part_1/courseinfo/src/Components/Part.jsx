const Part = (props) => {
    return (
      <div>
        <p>Course name: {props.part}</p>
        <p>Exercises: {props.exercises}</p>
      </div>
    );
  };
  
  export default Part;