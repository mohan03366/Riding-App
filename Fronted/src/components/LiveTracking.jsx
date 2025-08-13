const LiveTracking = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100vh",
        padding: "10px",
        boxSizing: "border-box",
      }}
    >
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3581.7317773064865!2d85.3639317607159!3d26.14028712702048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed10ba0f9120d1%3A0xe870f3053f362b50!2sM.I.T%20Information%20Technology%20Building!5e0!3m2!1sen!2sin!4v1741023111178!5m2!1sen!2sin"
        style={{
          width: "100%",
          maxWidth: "800px",
          height: "60vh",
          border: "none",
          borderRadius: "10px",
        }}
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default LiveTracking;
