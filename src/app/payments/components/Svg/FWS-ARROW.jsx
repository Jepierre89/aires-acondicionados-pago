const ArrowIcon = (props) => {
  return (
    <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M5.35688 2.03057C5.22138 2.16156 5.11389 2.31715 5.04054 2.48844C4.9672 2.65973 4.92944 2.84335 4.92944 3.02879C4.92944 3.21423 4.9672 3.39784 5.04054 3.56913C5.11389 3.74042 5.22138 3.89601 5.35688 4.027L11.0278 9.52075L5.35688 15.0145C5.08359 15.2792 4.93006 15.6383 4.93006 16.0127C4.93006 16.3871 5.08359 16.7462 5.35688 17.0109C5.63016 17.2757 6.00081 17.4244 6.3873 17.4244C6.77378 17.4244 7.14443 17.2757 7.41772 17.0109L14.1264 10.5119C14.2619 10.3809 14.3694 10.2253 14.4427 10.054C14.5161 9.88273 14.5538 9.69911 14.5538 9.51367C14.5538 9.32823 14.5161 9.14461 14.4427 8.97333C14.3694 8.80204 14.2619 8.64644 14.1264 8.51545L7.41772 2.01641C6.86231 1.47836 5.9269 1.47836 5.35688 2.03057Z" fill={props.color || "#FCFCFC"}/>
    </svg>
  );
};

export default ArrowIcon;