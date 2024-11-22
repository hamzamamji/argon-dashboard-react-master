import React, { useState } from "react";
import { Button } from "reactstrap";
import Header from "components/Headers/Header.js";
import CreateWhatsappModal from "components/Pages/CreateWhatsappModal";

const Dashboard = () => {
  const [formModal, setFormModal] = useState(false);

  const toggleModal = () => {
    setFormModal(!formModal);
  };

  return (
    <>
      <Header />

      <h1
        style={{
          fontSize: "20px",
          fontWeight: "bold",
          color: "black",
          marginTop: "20px",
          marginBottom: "20px",
          marginLeft: "15px",
        }}
      >
        Welcome Back, Free Waba
      </h1>

      <h1
        style={{
          textAlign: "center",
          fontSize: "36px",
          fontWeight: "light",
          color: "#D3D3D3",
          marginTop: "20px",
          marginBottom: "20px",
        }}
      >
        WhatsApp Accounts
      </h1>

      {/* Plus Sign Button */}
      <div style={{ position: "relative", marginBottom: "30px" }}>
        <Button
          color="primary"
          onClick={toggleModal}
          style={{
            position: "absolute",
            top: "0",
            left: "30px",
            borderRadius: "15px",
            width: "250px",
            height: "200px",
            fontSize: "50px",
            padding: "0",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "linear-gradient(to bottom, #17a2b8, #0d6efd)",
            boxShadow: "0 6px 20px rgba(13, 110, 253, 0.6)",
          }}
        >
          <span
            style={{
              fontWeight: "bold",
              fontSize: "120px",
              color: "white",
              backgroundColor: "transparent",
              borderRadius: "50%",
              width: "80px",
              height: "80px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              border: "2px solid white",
            }}
          >
            +
          </span>
        </Button>
      </div>

      {/* Dashboard Stats Heading */}
      <h1
        style={{
          textAlign: "center",
          fontSize: "36px",
          fontWeight: "bold",
          color: "#D3D3D3",
          marginTop: "320px", // Space between the button and heading
          marginBottom: "20px",
        }}
      >
        Dashboard Stats
      </h1>

      {/* Integrating the Modal here */}
      <CreateWhatsappModal isOpen={formModal} toggleModal={toggleModal} />
    </>
  );
};

export default Dashboard;
