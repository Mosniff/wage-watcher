function ProgressBar(props: any) {
  return (
    <div className="progress-bar">
      <span
        className="inner-progress-bar"
        style={{ width: `${props.progressBarWidth}%` }}
      ></span>
    </div>
  );
}

export default ProgressBar;
